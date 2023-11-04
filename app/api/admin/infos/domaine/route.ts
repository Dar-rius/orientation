import main from "@/app/api/config";
import prisma from "@/prisma/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { nom, description } = await req.json();
    await main();
    await prisma.info_domaine.create({
      data: {
        nom,
        description,
      },
    });
    return NextResponse.json({ messgae: "Data validate" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { messgae: "Data don't validate" },
      { status: 500 },
    );
  } finally {
    prisma.$disconnect();
  }
}
