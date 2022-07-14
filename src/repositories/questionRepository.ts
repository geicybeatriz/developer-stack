import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

export async function insert(question:CreateQuestionData){
    await prisma.question.create({
        data: question
    });
}

// export async function findByName(question:string){
//     console.log(question);
//     return await prisma.question.findMany({
//         where: {question}
//     })
// }

export async function findAll(){
    return await prisma.question.findMany()
}

export async function getQuestionById(id:number){
    return await prisma.question.findUnique({
        where: {id}
    });
}