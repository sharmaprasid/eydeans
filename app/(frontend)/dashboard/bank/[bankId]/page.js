"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import sortAccountTypes from "@/utils/sort";
// import KYCForm from "@/app/(frontend)/components/KycForm";

function BankPage({ params }) {
  const router = useRouter();

  const { bankId } = params;

  const [bankData, setBankData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedSort, setSelectedSort] = useState("none");
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [viewDetailsAccount, setViewDetailsAccount] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleViewDetails = (accountType) => {
    setViewDetailsAccount(accountType);
    setDetailsOpen(!detailsOpen);
  };

  const handleClick = (accountType) => {
    if (accountType) {
      router.push(`/dashboard/bank/${bankId}/${accountType.slug}`);
    } else {
      alert("Please select an account type before applying.");
    }
  };

  const fetchBankDetails = async () => {
    try {
      const response = await axios.get("http://139.59.41.77/api/bank");
      const matchingBank = response.data.data.find(
        (bank) => bank.slug === bankId
      );

      if (matchingBank) {
        setBankData(matchingBank);
        setSelectedAccount(null);
      } else {
        setError(new Error("Bank not found"));
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (bankId) {
      fetchBankDetails();
    }
  }, [bankId]);

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    setSelectedAccount(null);
  };

  const handleAccountClick = (accountType) => {
    setSelectedAccount((prevSelected) =>
      prevSelected === accountType ? null : accountType
    );
  };

  if (error) {
    return (
      <div className="text-red-500">
        Error loading bank data: {error.message}
      </div>
    );
  }

  if (!bankData) {
    return <div className="text-gray-500">Loading bank data...</div>;
  }

  const sortedAccounts = sortAccountTypes(bankData.accountTypes, selectedSort);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">{bankData.title}</h1>
      <p className="text-gray-600 mb-4">Address: {bankData.address}</p>

      <h2 className="text-2xl font-bold mb-2">Account Types</h2>
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sort by Interest Rate
          </label>
          <select
            value={selectedSort}
            onChange={handleSortChange}
            className="p-2 rounded-md border border-gray-300"
          >
            <option value="none">Select Option</option>
            <option value="max-interest">Highest Interest Rate</option>
            <option value="min-interest">Lowest Interest Rate</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sort by Minimum Balance
          </label>
          <select
            value={selectedSort}
            onChange={handleSortChange}
            className="p-2 rounded-md border border-gray-300"
          >
            <option value="none">Select Option</option>
            <option value="max-balance">Highest Minimum Balance</option>
            <option value="min-balance">Lowest Minimum Balance</option>
          </select>
        </div>
      </div>

      {sortedAccounts.length > 0 ? (
        <ul>
          {sortedAccounts.map((accountType) => (
            <li
              key={accountType.slug}
              className="border-b border-gray-300 py-2 cursor-pointer"
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-xl font-semibold">{accountType.title}</p>
                  <p className="text-gray-600">
                    Interest Rate:{" "}
                    {
                      accountType.attributes.find(
                        (attr) => attr.title === "Interest Rate"
                      ).value
                    }
                  </p>
                  <p className="text-gray-600">
                    Minimum Balance:{" "}
                    {
                      accountType.attributes.find(
                        (attr) => attr.title === "Minimum Balance"
                      ).value
                    }
                  </p>
                  {selectedAccount === accountType && (
                    <div>
                      <p className="text-gray-600">
                        Interest Rate:{" "}
                        {
                          accountType.attributes.find(
                            (attr) => attr.title === "Interest Rate"
                          ).value
                        }
                      </p>
                      <p className="text-gray-600">
                        Minimum Balance:{" "}
                        {
                          accountType.attributes.find(
                            (attr) => attr.title === "Minimum Balance"
                          ).value
                        }
                      </p>
                      {accountType.attributes.map((attr) => (
                        <p key={attr.id} className="text-gray-600">
                          {attr.title}: {attr.value}
                        </p>
                      ))}
                    </div>
                  )}
                  <div className=" py-2 space-x-2">
                    <button
                      onClick={() => handleViewDetails(accountType)}
                      className="mt-2 w-32 bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleClick(accountType)}
                      className="mt-2 bg-green-500 w-32 text-white px-4 py-2 rounded-md"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                {viewDetailsAccount === accountType && detailsOpen && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <h3 className="text-xl font-semibold mb-2">
                      {accountType.title} Details
                    </h3>
                    {accountType.attributes.map((attr) => (
                      <p key={attr.id} className="text-gray-600">
                        {attr.title}: {attr.value}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">
          No account types available for this bank.
        </p>
      )}
    </div>
  );
}

export default BankPage;
