import Bank from "@/models/bank.models";
import DB from "@/connections/DB";
import { NextRequest, NextResponse } from "next/server";

DB();

export async function GET() {
  try {
    const banks = await Bank.find();
    return NextResponse.json(banks, { status: 200 });
  } catch (error) {
    console.error("Error fetching banks:", error);
    return NextResponse.json(
      { error: "Failed to fetch banks" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, slug, phone, mobile } = reqBody;

    const bank = await Bank.findOne({ slug });
    if (bank) {
      return NextResponse.json(
        { message: "Bank Already Exists" },
        { status: 400 }
      );
    }

    const newBank = new Bank({ title, slug, phone, mobile });
    const savedBank = await newBank.save();

    return NextResponse.json(
      { message: "Bank Created Successfully", success: true, savedBank },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating bank:", error);
    return NextResponse.json(
      { error: "Failed to create bank" },
      { status: 500 }
    );
  }
}
