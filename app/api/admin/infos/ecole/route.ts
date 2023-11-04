import main from "@/app/api/config";
import prisma from "@/prisma/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { nom, adresse, site, id_domaine } = await req.json();
    await main();
    await prisma.info_ecole.create({
      data: {
        nom,
        adresse,
        site,
        id_domaine,
      },
    });
    return NextResponse.json({ messgae: "Data validate" }, { status: 201 });
  } catch {
    return NextResponse.json(
      { messgae: "Data don't validate" },
      { status: 500 },
    );
  } finally {
    prisma.$disconnect();
  }
}
