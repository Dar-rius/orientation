import main from "@/app/api/config";
import prisma from "@/prisma/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const {
      serie_bac,
      mention,
      nom_mat_meilleur,
      note_mat_meilleur,
      nom_mat_mauvaise,
      note_mat_mauvaise,
      passion,
      carriere_futur,
      objectif_vie,
      hobby,
      domaine_interesse,
      soutien,
      infos_sup,
    } = await req.json();

    await main();

    await prisma.questionnaire.create({
      data: {
        serie_bac,
        mention,
        nom_mat_meilleur,
        note_mat_meilleur,
        nom_mat_mauvaise,
        note_mat_mauvaise,
        passion,
        carriere_futur,
        objectif_vie,
        hobby,
        domaine_interesse,
        soutien,
        infos_sup,
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
