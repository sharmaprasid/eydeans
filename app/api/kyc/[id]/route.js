import KYCModel from "@/models/kyc.models";
import { NextRequest, NextResponse } from "next/server";
import DB from "@/connections/DB";

DB();

export async function GET(request, context) {
  const { id } = context.params;
  try {
    const kycEntries = await KYCModel.findById(id);
    return NextResponse.json(kycEntries, { status: 200 });
  } catch (error) {
    console.error("Error fetching KYC entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch KYC entries" },
      { status: 500 }
    );
  }
}
