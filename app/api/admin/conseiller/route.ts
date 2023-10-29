import { NextRequest, NextResponse } from "next/server";
import main from "../../config";
import prisma from "@/prisma/prisma";

export async function POST(req: NextRequest) {
  try {
    const { nom, prenom, email, telephone } = await req.json();
    await main();
    await prisma.conseiller.create({
      data: {
        nom,
        prenom,
        email,
        telephone,
      },
    });
    return NextResponse.json({ message: "Data validate" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Data don't validate" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
