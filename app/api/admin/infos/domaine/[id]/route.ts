import { NextRequest, NextResponse } from "next/server";
import main from "@/app/api/config";
import prisma from "@/prisma/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    const { nom, description } = await req.json();
    await main();
    await prisma.info_domaine.update({
      where: {
        id: id,
      },
      data: {
        nom,
        description,
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
    main();
    if (
      Number(prisma.info_ecole.count) > 0 &&
      Number(prisma.info_metier.count) > 0
    ) {
      await prisma.info_ecole.delete({
        where: {
          id_domaine: id,
        },
      });

      await prisma.info_metier.delete({
        where: {
          id_domaine: id,
        },
      });

      await prisma.info_domaine.delete({
        where: {
          id: id,
        },
      });
    } else if (Number(prisma.info_ecole.count) > 0) {
      await prisma.info_ecole.delete({
        where: {
          id_domaine: id,
        },
      });

      await prisma.info_domaine.delete({
        where: {
          id: id,
        },
      });
    } else if (Number(prisma.info_metier.count) > 0) {
      await prisma.info_metier.delete({
        where: {
          id_domaine: id,
        },
      });

      await prisma.info_domaine.delete({
        where: {
          id: id,
        },
      });
    } else {
      await prisma.info_domaine.delete({
        where: {
          id: id,
        },
      });
    }

    return NextResponse.json({ messgae: "Data deleted" }, { status: 200 });
  } catch {
    return NextResponse.json({ messgae: "ID don't validate" }, { status: 404 });
  } finally {
    prisma.$disconnect();
  }
}
