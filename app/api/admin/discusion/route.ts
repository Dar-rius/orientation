import main from "@/app/api/config";
import prisma from "@/prisma/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { subject, topic } = await req.json();
        await main();
        await  prisma.discussion.create({
            data:{
                subject,
                topic,
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