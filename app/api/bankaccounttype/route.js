import DB from "@/connections/DB";
import BankAccountType from "@/models/bankAccountType.models";
import { NextRequest, NextResponse } from "next/server";

DB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { bankid } = reqBody;

    return NextResponse.json(
      {
        message: "",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
