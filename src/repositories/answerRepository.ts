

import { prisma } from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

export async function addAnswer(answer:CreateAnswerData){
    return await prisma.answer.create({
        data: answer
    });
}

export async function getById(questionId:number){
    return await prisma.answer.findMany({
        where: {questionId}
    });
}