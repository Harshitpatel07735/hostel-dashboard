import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { fullName, email, password, role, hostelName, roomNumber } = await req.json();

    if (!email || !password || !fullName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: fullName,
        email,
        password: hashedPassword,
        role: role as any,
      },
    });

    // If it's a student, we can also create the student profile
    if (role === "STUDENT") {
        await prisma.student.create({
            data: {
                userId: user.id,
                studentId: `STU-${Math.floor(Math.random() * 10000)}`,
                course: "Unknown",
                year: 1,
                parentName: "Unknown",
                parentPhone: "Unknown",
                parentEmail: "Unknown",
                address: "Unknown",
            }
        })
    }


    return NextResponse.json({ message: "User registered successfully", user: { id: user.id, email: user.email } }, { status: 201 });
  } catch (error: any) {
    console.error("REGISTRATION_ERROR", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
