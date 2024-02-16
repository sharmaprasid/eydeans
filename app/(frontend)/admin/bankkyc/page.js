"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const KYCForm = () => {
  const [kycData, setKYCData] = useState(null);
  const router = useRouter();

  const handleClickKyc = (id) => {
    const url = `bankkyc/${id}`;
    router.push(url);
  };

  useEffect(() => {
    const fetchKYCData = async () => {
      try {
        const response = await axios.get("/api/kyc");
        setKYCData(response.data);
      } catch (error) {
        console.error("Error fetching KYC data:", error);
      }
    };

    fetchKYCData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">KYC Users</h2>
      {kycData ? (
        <table className="w-full">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {kycData.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.emailAddress}</td>
                <td>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleClickKyc(user._id)}
                  >
                    View KYC Form
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">Loading KYC data...</p>
      )}
    </div>
  );
};

export default KYCForm;
