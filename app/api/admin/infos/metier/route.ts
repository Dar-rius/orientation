import main from "@/app/api/config";
import prisma from "@/prisma/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nom, description, id_domaine } = await req.json();
    await main();
    await  prisma.info_metier.create({
      data:{
        nom,
        description,
        id_domaine
      }
    })
    return NextResponse.json({ message: "Data validate" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
        { message: "Data don't validate" },
        { status: 500 },
    );
  } finally {
    prisma.$disconnect();
  }
}