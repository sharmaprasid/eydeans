import DB from "@/connections/DB";
import User from "@/models/user.models";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createHmac } from "crypto";
import { SignJWT, jwtVerify } from "jose";

DB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User Doesn't exist" },
        { status: 400 }
      );
    }

    const validpassword = await bcrypt.compare(password, user.password);
    if (!validpassword) {
      return NextResponse.json(
        { message: "Credential doesn't match" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    const secret = new TextEncoder().encode(
      "Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP"
    );

    const payload = { tokenData, exp: Math.floor(Date.now() / 1000) + 60 * 60 };

    const jwt = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .sign(secret);

    const response = NextResponse.json(user, { status: 200 });
    response.cookies.set("token", jwt, { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
