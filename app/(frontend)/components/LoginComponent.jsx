"use client";
import React, { useState } from "react";
import {
  AiFillLock,
  AiFillFacebook,
  AiFillGoogleSquare,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Joi from "joi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

// Constants for field names
const EMAIL_FIELD = "email";
const PASSWORD_FIELD = "password";

const url = "/dashboard";

const formDetails = [
  {
    id: 1,
    icon: <MdEmail size={20} />,
    placeholder: "johndoe@gmail.com",
    name: EMAIL_FIELD,
  },
  {
    id: 2,
    icon: <AiFillLock size={20} />,
    placeholder: "Password",
    name: PASSWORD_FIELD,
  },
];

const PasswordToggle = ({ togglePassword, isPasswordVisible }) => (
  <div>
    <button onClick={togglePassword} type="button">
      {isPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </button>
  </div>
);

const LoginComponent = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [passwordToggle, setPasswordToggle] = useState(true);
  const router = useRouter();

  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  const getPasswordFieldType = () => {
    return passwordToggle ? "password" : "text";
  };

  const handleSubmit = async (values) => {
    try {
      const validationSchemaJoi = Joi.object({
        [EMAIL_FIELD]: Joi.string().required(),
        [PASSWORD_FIELD]: Joi.string().required(),
      });

      const { error } = validationSchemaJoi.validate(values);
      if (error) {
        alert(error.details.map((detail) => detail.message).join("\n"));
        return;
      }

      const response = await axios.post("/api/login", values);
      // console.log(response);
      if (response.status === 200) {
        const { isAdmin } = response.data;
        console.log(isAdmin);
        if (isAdmin == true) {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
        toast.success("Login successful");
        // router.push(url);
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed. Try again");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-md">
        <div className="content-center flex flex-col gap-6 mx-auto">
          <Image
            className="mx-auto"
            src="/bibaboo.svg"
            height={120}
            width={180}
            alt="logo"
          />
          <h2 className="mt-6 mb-10 text-center text-2xl font-bold leading-9 text-gray-900">
            Sign in
          </h2>
        </div>
        <Formik
          initialValues={{ [EMAIL_FIELD]: "", [PASSWORD_FIELD]: "" }}
          validationSchema={Yup.object({
            [EMAIL_FIELD]: Yup.string().required("Email is required"),
            [PASSWORD_FIELD]: Yup.string().required("Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              {formDetails.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center gap-4">
                    <div>{item.icon}</div>
                    <Field
                      type={
                        item.name === PASSWORD_FIELD
                          ? getPasswordFieldType()
                          : "text"
                      }
                      name={item.name}
                      className="outline-none text-gray-600 rounded-md px-3 py-2 w-full focus:ring focus:ring-blue-300"
                      placeholder={item.placeholder}
                    />
                    {item.name === PASSWORD_FIELD && (
                      <PasswordToggle
                        togglePassword={handlePasswordToggle}
                        isPasswordVisible={passwordToggle}
                      />
                    )}
                  </div>
                  <ErrorMessage
                    name={item.name}
                    component="div"
                    className="text-red-500"
                  />
                  <hr className="my-2" />
                </div>
              ))}

              <div className="flex justify-center">
                <button
                  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="mt-4 text-center">
                <Link href="/register" className="text-blue-500 underline">
                  Create Account
                </Link>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/forgotpassword"
                  className="text-blue-500 underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default LoginComponent;
