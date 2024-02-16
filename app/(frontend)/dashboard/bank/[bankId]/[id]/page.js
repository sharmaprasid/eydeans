import KYCForm from "@/app/(frontend)/components/KycForm";
import React from "react";

const KycPage = ({ params }) => {
  console.log(params.id);

  return (
    <div>
      <KYCForm id={params.id} />
    </div>
  );
};

export default KycPage;
