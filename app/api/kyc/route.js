import KYCModel from "@/models/kyc.models";
import { NextRequest, NextResponse } from "next/server";
import DB from "@/connections/DB";

DB();

export async function GET() {
  try {
    const kycEntries = await KYCModel.find();
    return NextResponse.json(kycEntries, { status: 200 });
  } catch (error) {
    console.error("Error fetching KYC entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch KYC entries" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      accountType,
      salutation,
      gender,
      contactNumber,
      fullName,
      dateOfBirth,
      emailAddress,
      highestEducation,
      faculty,
      boardUniversity,
      province,
      district,
      localBody,
      wardNo,
      toleStreetName,
      declaration,
      agreeToTerms,
    } = reqBody;

    // Check if KYC entry already exists based on certain criteria (customize as needed)
    const existingKYC = await KYCModel.findOne({ emailAddress });
    if (existingKYC) {
      return NextResponse.json(
        { message: "KYC Entry Already Exists" },
        { status: 400 }
      );
    }

    const newKYCEntry = new KYCModel({
      accountType,
      salutation,
      gender,
      contactNumber,
      fullName,
      dateOfBirth,
      emailAddress,
      highestEducation,
      faculty,
      boardUniversity,
      province,
      district,
      localBody,
      wardNo,
      toleStreetName,
      declaration,
      agreeToTerms,
    });

    const savedKYCEntry = await newKYCEntry.save();
    console.log(savedKYCEntry);
    return NextResponse.json(savedKYCEntry, { status: 200 });
  } catch (error) {
    console.error("Error creating KYC entry:", error);
    return NextResponse.json(
      { error: "Failed to create KYC entry" },
      { status: 500 }
    );
  }
}
