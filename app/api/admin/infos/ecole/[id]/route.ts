import { NextRequest, NextResponse } from "next/server";
import main from "@/app/api/config";
import prisma from "@/prisma/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    const { nom, adresse, site } = await req.json();
    await main();
    await prisma.info_ecole.update({
      where: {
        id: id,
      },
      data: {
        nom,
        adresse,
        site,
      },
    });
    return NextResponse.json({ messgae: "Data validate" }, { status: 201 });
  } catch {
    return NextResponse.json({ messgae: "ID don't validate" }, { status: 404 });
  } finally {
    prisma.$disconnect();
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    await main();
    await prisma.info_ecole.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ messgae: "Data deleted" }, { status: 200 });
  } catch {
    return NextResponse.json({ messgae: "ID don't validate" }, { status: 404 });
  } finally {
    prisma.$disconnect();
  }
}
