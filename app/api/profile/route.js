import decodeToken from "@/helpers/decodeToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import DB from "@/utils/db";
DB();
export async function GET(request) {
  try {
    const userId = await decodeToken(request);
    const user = await User.findOne({ _id: userId }).select(" -password  ");

    return NextResponse.json({
      message: "user Found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
