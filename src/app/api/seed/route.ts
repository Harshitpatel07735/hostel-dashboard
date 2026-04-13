import { NextResponse } from "next/server"
import prisma from "@/lib/db"
import { hash } from "bcryptjs"

export async function GET() {
  try {
    const adminEmail = "admin@hostel.com"
    const adminPassword = await hash("admin123", 10)

    await prisma.user.upsert({
      where: { email: adminEmail },
      update: { role: "ADMIN" },
      create: {
        email: adminEmail,
        password: adminPassword,
        name: "Super Admin",
        role: "ADMIN"
      }
    })

    const studentEmail = "student@hostel.com"
    const studentPassword = await hash("student123", 10)

    await prisma.user.upsert({
      where: { email: studentEmail },
      update: { role: "STUDENT" },
      create: {
        email: studentEmail,
        password: studentPassword,
        name: "John Student",
        role: "STUDENT"
      }
    })

    return NextResponse.json({ message: "Seed successful! Admin: admin@hostel.com / admin123, Student: student@hostel.com / student123" })
  } catch (error: any) {
    console.error("[SEED_ERROR]", error)
    // Map common errors to user-friendly messages
    let message = error.message || "An unexpected error occurred during seeding."
    if (message.includes("ECONNREFUSED") || message.includes("Can't reach database")) {
        message = "DATABASE_CONNECTION_ERROR: The database proxy (port 51214) is unreachable. Ensure the proxy is running."
    }
    return NextResponse.json({ error: message, details: error.meta || error.code }, { status: 500 })
  }
}

