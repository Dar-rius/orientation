import main from "@/app/api/config";
import prisma from "@/prisma/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const {
      reponse1,
      reponse2,
      reponse3,
      reponse4,
      reponse5,
      reponse6,
      reponse7,
      reponse8,
      reponse9,
      reponse10,
    } = await req.json();

    const id = Number(params.id);

    await main();

    await prisma.reponse.create({
      data: {
        id_question: id,
        reponse1,
        reponse2,
        reponse3,
        reponse4,
        reponse5,
        reponse6,
        reponse7,
        reponse8,
        reponse9,
        reponse10,
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
