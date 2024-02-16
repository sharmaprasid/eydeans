import DB from "@/connections/DB";
import User from "@/models/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

DB();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password, isAdmin } = reqBody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User Already Exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      {
        message: "User Created Successfully",
        success: true,
        savedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
