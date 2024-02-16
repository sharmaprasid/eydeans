"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const BankPage = () => {
  const [banks, setBanks] = useState([]);
  // const [selectedBank, setSelectedBank] = useState(null);
  // const [selectedAccountType, setSelectedAccountType] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://139.59.41.77/api/bank")
      .then((response) => response.json())
      .then((data) => setBanks(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBankClick = (bank) => {
    setSelectedBank(bank);
    setSelectedAccountType(null);
  };

  // const handleAccountTypeClick = (accountType) => {
  //   setSelectedAccountType(accountType);
  // };

  return (
    <div>
      <div style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
        {banks.map((bank) => (
          <div
            key={bank.title}
            style={{ margin: "10px", cursor: "pointer", flex: "0 0 24%" }}
          >
            <Link href={`/dashboard/bank/${bank.slug}`}>
              <Image width={40} height={30} src={bank.logo} alt={bank.title} />
              <p className="align-center my-4 py-2">{bank.title}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* {selectedBank && (
        <div>
          <h2>{selectedBank.title} Account Types</h2>
          {selectedBank.accountTypes.map((accountType) => (
            <div
              key={accountType.title}
              style={{ margin: "10px", cursor: "pointer" }}
              onClick={() => handleAccountTypeClick(accountType)}
            >
              <p>{accountType.title}</p>
            </div>
          ))}
        </div>
      )} */}

      {/* {selectedAccountType && (
        <div>
          <h3>{selectedAccountType.title} Details</h3>
          <p>
            Interest Rate:{" "}
            {
              selectedAccountType.attributes.find(
                (attr) => attr.title === "Interest Rate"
              ).value
            }
          </p>
          <p>
            Minimum Balance:{" "}
            {
              selectedAccountType.attributes.find(
                (attr) => attr.title === "Minimum Balance"
              ).value
            }
          </p>
        </div>
      )} */}
    </div>
  );
};

export default BankPage;
