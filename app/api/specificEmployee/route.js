"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const data = await req.json();
  try {
    const selectEmployee = await prisma.employees.findFirst({
      where: {
        id: data,
      },
    });
    return NextResponse.json(selectEmployee);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
