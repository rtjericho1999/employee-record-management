"use server";

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const data = await req.json();
  try {
    const createdEmployee = await prisma.employees.create({
      data: data,
    });
    return NextResponse.json(createdEmployee);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET() {
  try {
    const selectAllEmployees = await prisma.employees.findMany({
      select: {
        id: true,
        firstName: true,
        middleName: true,
        lastName: true,
        position: true,
        profilePicture: true,
      },
    });
    return NextResponse.json(selectAllEmployees);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(req) {
  const data = await req.json();
  try {
    const updateEmployee = await prisma.employees.update({
      where: {
        id: data?.id,
      },
      data: {
        firstName: data?.firstName,
        middleName: data?.middleName === "" ? null : data?.middleName,
        lastName: data?.lastName,
        position: data?.position,
        profilePicture: data?.profilePicture,
      },
    });
    return NextResponse.json(updateEmployee);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PATCH(req) {
  const data = await req.json();
  try {
    const deleteEmployee = await prisma.employees.delete({
      where: {
        id: data,
      },
    });
    return NextResponse.json(deleteEmployee);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
