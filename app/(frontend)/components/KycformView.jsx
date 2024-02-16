"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const KYCFormView = ({ params }) => {
  const [kycData, setKYCData] = useState(null);

  useEffect(() => {
    const fetchKYCData = async () => {
      try {
        const response = await axios.get(`/api/kyc/${params.id}`);
        setKYCData(response.data);
      } catch (error) {
        console.error("Error fetching KYC data:", error);
      }
    };

    fetchKYCData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      {kycData && params.id === kycData._id && (
        <form>
          {/* Salutation */}
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
            <h2>Welcome to {id} Account</h2>
            <form>
              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="salutation"
                  >
                    Salutation:
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    name="salutation"
                    value={
                      localStorage.salutation
                        ? localStorage.getItem("salutation")
                        : formData.salutation
                    }
                    disabled={localStorage.getItem("salutation") !== null}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Gender:
                  </label>
                  <select
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    name="gender"
                    value={
                      localStorage.gender
                        ? localStorage.getItem("gender")
                        : formData.gender
                    }
                    disabled={localStorage.getItem("gender") !== null}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contactNumber"
                >
                  Contact Number:
                </label>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">+977</span>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="tel"
                    name="contactNumber"
                    value={
                      localStorage.contactNumber
                        ? localStorage.getItem("contactNumber")
                        : formData.contactNumber
                    }
                    disabled={localStorage.getItem("contactNumber") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name:
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  type="text"
                  name="fullName"
                  value={
                    localStorage.fullName
                      ? localStorage.getItem("fullName")
                      : formData.fullName
                  }
                  disabled={localStorage.getItem("fullName") !== null}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dateOfBirth"
                >
                  Date of Birth:
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  type="date"
                  name="dateOfBirth"
                  value={
                    localStorage.dateOfBirth
                      ? localStorage.getItem("dateOfBirth")
                      : formData.dateOfBirth
                  }
                  disabled={localStorage.getItem("dateofBirth") !== null}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="emailAddress"
                >
                  Email Address:
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  type="email"
                  name="emailAddress"
                  value={
                    localStorage.emailAddress
                      ? localStorage.getItem("emailAddress")
                      : formData.emailAddress
                  }
                  disabled={localStorage.getItem("emailAddress") !== null}
                  onChange={handleChange}
                  required
                />
              </div>

              <h3 className="text-lg font-bold mb-4">Educational Detail:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="highestEducation"
                  >
                    Highest Education:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="highestEducation"
                    value={
                      localStorage.highestEducation
                        ? localStorage.getItem("highestEducation")
                        : formData.highestEducation
                    }
                    disabled={localStorage.getItem("highestEducation") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="faculty"
                  >
                    Faculty:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="faculty"
                    value={
                      localStorage.faculty
                        ? localStorage.getItem("faculty")
                        : formData.faculty
                    }
                    disabled={localStorage.getItem("faculty") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="boardUniversity"
                  >
                    Board/University:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="boardUniversity"
                    value={
                      localStorage.boardUniversity
                        ? localStorage.getItem("boardUniversity")
                        : formData.boardUniversity
                    }
                    disabled={localStorage.getItem("boardUniversity") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold mb-4">Address Detail:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="province"
                  >
                    Province:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="province"
                    value={
                      localStorage.province
                        ? localStorage.getItem("province")
                        : formData.province
                    }
                    disabled={localStorage.getItem("province") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="district"
                  >
                    District:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="district"
                    value={
                      localStorage.district
                        ? localStorage.getItem("district")
                        : formData.district
                    }
                    disabled={localStorage.getItem("district") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="localBody"
                  >
                    Local Body:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="localBody"
                    value={
                      localStorage.localBody
                        ? localStorage.getItem("localBody")
                        : formData.localBody
                    }
                    disabled={localStorage.getItem("localBody") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="wardNo"
                  >
                    Ward No.:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="wardNo"
                    value={
                      localStorage.wardNo
                        ? localStorage.getItem("wardNo")
                        : formData.wardNo
                    }
                    disabled={localStorage.getItem("wardNo") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="toleStreetName"
                  >
                    Tole/Street Name:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                    type="text"
                    name="toleStreetName"
                    value={
                      localStorage.toleStreetName
                        ? localStorage.getItem("toleStreetName")
                        : formData.toleStreetName
                    }
                    disabled={localStorage.getItem("toleStreetName") !== null}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Declaration */}
              <h3 className="text-lg font-bold mb-2">Declaration:</h3>
              <div className="mb-4">
                <label className="flex items-center text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={
                      localStorage.declaration
                        ? localStorage.getItem("declaration")
                        : formData.declaration
                    }
                    disabled={localStorage.getItem("declaration") !== null}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  I declare that all the information provided above is genuine
                  and correct to the best of my knowledge.
                </label>
              </div>

              <div className="mb-6">
                <label className="flex items-center text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={
                      localStorage.agreeToTerms
                        ? localStorage.getItem("agreeToTerms")
                        : formData.agreeToTerms
                    }
                    disabled={localStorage.getItem("agreeToTerms") !== null}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  I agree to the terms and conditions to be applied.
                </label>
              </div>

              <div className="flex gap-10">
                <button
                  onClick={handleSave}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender:
            </label>
            <p>{kycData.gender}</p>
          </div>

          {/* Declaration */}
          <h3 className="text-lg font-bold mb-2">Declaration:</h3>
          <div className="mb-4">
            <label>
              <input type="checkbox" checked={kycData.declaration} disabled /> I
              declare that all the information provided above is genuine and
              correct to the best of my knowledge.
            </label>
          </div>

          <div className="mb-6">
            <label>
              <input type="checkbox" checked={kycData.agreeToTerms} disabled />{" "}
              I agree to the terms and conditions to be applied.
            </label>
          </div>
        </form>
      )}
    </div>
  );
};

export default KYCFormView;
