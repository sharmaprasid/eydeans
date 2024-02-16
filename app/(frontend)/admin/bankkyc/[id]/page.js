"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const KYCFormView = ({ params }) => {
  const [kycData, setKYCData] = useState(null);
  const [formData, setFormData] = useState({
    salutation: "",
    gender: "",
    contactNumber: "",
    fullName: "",
    dateOfBirth: "",
    emailAddress: "",
    highestEducation: "",
    faculty: "",
    boardUniversity: "",
    province: "",
    district: "",
    localBody: "",
    wardNo: "",
    toleStreetName: "",
    declaration: false,
    agreeToTerms: false,
  });

  useEffect(() => {
    const fetchKYCData = async () => {
      try {
        const response = await axios.get(`/api/kyc/${params.id}`);
        setKYCData(response.data);
        setFormData({
          salutation: response.data.salutation,
          gender: response.data.gender,
          contactNumber: response.data.contactNumber,
          fullName: response.data.fullName,
          dateOfBirth: response.data.dateOfBirth,
          emailAddress: response.data.emailAddress,
          highestEducation: response.data.highestEducation,
          faculty: response.data.faculty,
          boardUniversity: response.data.boardUniversity,
          province: response.data.province,
          district: response.data.district,
          localBody: response.data.localBody,
          wardNo: response.data.wardNo,
          toleStreetName: response.data.toleStreetName,
          declaration: response.data.declaration,
          agreeToTerms: response.data.agreeToTerms,
        });
      } catch (error) {
        console.error("Error fetching KYC data:", error);
      }
    };

    fetchKYCData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md border border-gray-200">
      {kycData && params.id === kycData._id && (
        <form>
          <section>
            <h3 className="text-lg font-bold mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Full Name"
                value={`${formData.salutation} ${formData.fullName}`}
                disabled
              />
              <FormField
                label="Gender"
                value={formData.gender}
                onChange={handleChange}
                name="gender"
                disabled
              />
              <FormField
                label="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                name="dateOfBirth"
                disabled
              />
              <FormField
                label="Email"
                value={formData.emailAddress}
                onChange={handleChange}
                name="emailAddress"
                disabled
              />
              <FormField
                label="Education"
                value={formData.highestEducation}
                onChange={handleChange}
                name="highestEducation"
                disabled
              />
              <FormField
                label="Faculty"
                value={formData.faculty}
                onChange={handleChange}
                name="faculty"
                disabled
              />
              <FormField
                label="Board University"
                value={formData.boardUniversity}
                onChange={handleChange}
                name="boardUniversity"
                disabled
              />
              <FormField
                label="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                name="contactNumber"
                disabled
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-2">Address Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Province Name"
                value={formData.province}
                onChange={handleChange}
                name="province"
                disabled
              />
              <FormField
                label="District"
                value={formData.district}
                onChange={handleChange}
                name="district"
                disabled
              />
              <FormField
                label="Local Body"
                value={formData.localBody}
                onChange={handleChange}
                name="localBody"
                disabled
              />
              <FormField
                label="Ward No"
                value={formData.wardNo}
                onChange={handleChange}
                name="wardNo"
                disabled
              />
              <FormField
                label="Tole Name"
                value={formData.toleStreetName}
                onChange={handleChange}
                name="toleStreetName"
                disabled
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold mb-2">Declaration:</h3>
            <CheckboxField
              label="I declare that all the information provided above is genuine and correct to the best of my knowledge."
              checked={formData.declaration}
              disabled
            />
          </section>

          <section>
            <CheckboxField
              label="I agree to the terms and conditions to be applied."
              checked={formData.agreeToTerms}
              disabled
            />
          </section>
        </form>
      )}
    </div>
  );
};

const FormField = ({ label, value, onChange, name, disabled }) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={name}
    >
      {label}:
    </label>
    <input
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  </div>
);

const CheckboxField = ({ label, checked, disabled }) => (
  <div className="mb-4">
    <label className="flex items-center text-gray-700 text-sm">
      <input
        type="checkbox"
        name={label}
        checked={checked}
        onChange={() => {}}
        disabled={disabled}
        className="mr-2"
      />
      {label}
    </label>
  </div>
);

export default KYCFormView;
