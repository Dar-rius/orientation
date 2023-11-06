import prisma from "@/prisma/prisma";

export default async function main(){
    try{
        prisma.$connect()
    } catch(err){
        console.error(err)
    }
}