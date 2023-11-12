import { NextRequest, NextResponse } from "next/server";
import main from "../../../config";
import prisma from "@/prisma/prisma";

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } },
) {
    try {
        const id = Number(params.id);
        const { subject, topic } = await req.json();
        await main();
        await prisma.discussion.update({
            where: {
                id: id,
            },
            data: {
                subject,
                topic
            },
        });
        return NextResponse.json({ message: "Data updated" }, { status: 201 });
    } catch {
        return NextResponse.json(
            { message: "Data don't validate" },
            { status: 500 },
        );
    } finally {
        await prisma.$disconnect();
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } },
) {
    try {
        const id = Number(params.id);
        await main();
        await prisma.discussion.delete({
            where: {
                id: id,
            },
        });
        return NextResponse.json({ message: "Data deleted" }, { status: 201 });
    } catch {
        return NextResponse.json({ message: "Id not found" }, { status: 500 });
    } finally {
        prisma.$disconnect();
    }
}