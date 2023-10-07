import { NextRequest, NextResponse } from "next/server";
import main from "@/app/api/config";
import prisma from "@/prisma/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    const {
      domaine,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
    } = await req.json();

    await main();

    await prisma.test_Competence.update({
      where: {
        id: id,
      },
      data: {
        domaine,
      },
    });

    await prisma.question.update({
      where: {
        id: id,
      },
      data: {
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
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

    await prisma.question.delete({
      where: {
        id: id,
      },
    });

    await prisma.test_Competence.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ messgae: "Data validate" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { messgae: "ID don't validate or request invalid" },
      { status: 404 },
    );
  } finally {
    prisma.$disconnect();
  }
}
