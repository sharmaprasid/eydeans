"use client";
import React, { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Joi from "joi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const EMAIL_FIELD = "email";
const PASSWORD_FIELD = "password";
const CONFIRM_PASSWORD_FIELD = "confirmpassword";

const url = "/login";

const formdetail = [
  {
    id: 1,
    icon: <BsFillPersonFill size={20} />,
    placeholder: "Username",
    type: "text",
    name: "username",
  },
  {
    id: 2,
    icon: <MdEmail size={20} />,
    placeholder: "johndoe@gmail.com",
    type: "email",
    name: "email",
  },
  {
    id: 3,
    icon: <AiFillLock size={20} />,
    placeholder: "Password",
    type: "password",
    name: "password",
  },
  {
    id: 4,
    icon: <AiOutlineLock size={20} />,
    placeholder: "Confirm Password",
    type: "password",
    name: "confirmpassword",
  },
];

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
});

const validationSchemaJoi = Joi.object({
  username: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .required()
    .min(10)
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/, "password")
    .message(
      "Password must be at least 10 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    ),
  confirmpassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm Password")
    .options({ messages: { "any.only": "{{#label}} does not match" } }),
  agree: Joi.boolean().valid(true).required(),
});

const RegisterComponent = () => {
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(true);
  const router = useRouter();
  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };
  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };
  const getPasswordFieldType = () => {
    return passwordToggle ? "password" : "text";
  };
  const getConfirmPasswordFieldType = () => {
    return confirmPasswordToggle ? "password" : "text";
  };
  const PasswordToggle = ({ togglePassword, isPasswordVisible }) => (
    <div>
      <button onClick={togglePassword} type="button">
        {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </button>
    </div>
  );
  const handleSubmit = async (values) => {
    try {
      await validationSchemaJoi.validateAsync(values, { abortEarly: false });
      console.log(values);

      const response = await axios.post("/api/register", values);

      if (response.status === 200) {
        toast.success("User Sign Up successfully");
        router.push(url);
      }
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        const errorMessages = error.details
          .map((detail) => detail.message)
          .join("\n");
        toast.error(errorMessages);
      } else {
        console.error(error);
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-md">
        <div className=" flex mb-3  justify-center sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up
          </h2>
        </div>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            agree: false,
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid }) => (
            <Form className="space-y-6">
              {formdetail.map((items) => (
                <div key={items.id}>
                  <div className="flex items-center gap-4">
                    <div>{items.icon}</div>
                    <Field
                      type={
                        items.name === PASSWORD_FIELD
                          ? getPasswordFieldType()
                          : items.name === CONFIRM_PASSWORD_FIELD
                          ? getConfirmPasswordFieldType()
                          : "text"
                      }
                      name={items.name}
                      className="outline-none text-gray-600 rounded-md px-3 py-2 w-full focus:ring focus:ring-blue-300"
                      placeholder={items.placeholder}
                    />
                    {items.name === PASSWORD_FIELD && (
                      <PasswordToggle
                        togglePassword={handlePasswordToggle}
                        isPasswordVisible={passwordToggle}
                      />
                    )}
                    {items.name === CONFIRM_PASSWORD_FIELD && (
                      <PasswordToggle
                        togglePassword={handleConfirmPasswordToggle}
                        isPasswordVisible={confirmPasswordToggle}
                      />
                    )}
                  </div>
                  <ErrorMessage
                    name={items.name}
                    component="div"
                    className="text-red-500"
                  />
                  <hr className="my-2" />
                </div>
              ))}

              <div className="flex gap-5 py-6">
                <Field
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className="mr-2"
                />
                <label htmlFor="agree" className="text-sm">
                  I agree to all statements in{" "}
                  <Link href="/Terms and Conditions.pdf">Terms of Service</Link>
                </label>
                <ErrorMessage
                  name="agree"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  className={`${
                    !isValid
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-700"
                  } text-white font-bold py-2 px-4 rounded `}
                  type="submit"
                  disabled={!isValid}
                >
                  Register
                </button>
                <Link href={url} className="underline">
                  I am already a member
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterComponent;
