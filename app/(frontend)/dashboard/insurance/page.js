"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const InsurancePage = () => {
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://139.59.41.77/api/bank")
      .then((response) => response.json())
      .then((data) => setBanks(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBankClick = (bank) => {
    setSelectedBank(bank);
  };

  return (
    <div>
      <h1>Bank List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {banks.map((bank) => (
          <div
            key={bank.title}
            style={{ margin: "10px", cursor: "pointer", flex: "0 0 24%" }}
          >
            <Link href={`/dashboard/bank/${bank.slug}`}>
              <Image
                width={50}
                height={50}
                src={bank.logo}
                alt={bank.title}
                style={{ width: "100%", height: "auto" }}
              />
              <p>{bank.title}</p>
            </Link>
          </div>
        ))}
      </div>

      {selectedBank && (
        <div>
          <h2>{selectedBank.title} Account Types</h2>
          {selectedBank.accountTypes.map((accountType) => (
            <div
              key={accountType.title}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              <Link
                href={`/banks/${selectedBank.slug}/account-types/${accountType.slug}`}
                passHref
              >
                <a>
                  <p>{accountType.title}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InsurancePage;
