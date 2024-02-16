import KYCModel from "@/models/kyc.models";
import { NextRequest, NextResponse } from "next/server";
import DB from "@/connections/DB";

DB();

export async function GET(request) {
  const { searchParams } = request.params;
  console.log(searchParams);
  const id = searchParams.get("id");
  con;

  try {
    const kycEntries = await KYCModel.find(id);
    return NextResponse.json(kycEntries, { status: 200 });
  } catch (error) {
    console.error("Error fetching KYC entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch KYC entries" },
      { status: 500 }
    );
  }
}
