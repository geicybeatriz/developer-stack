// TODO
import { Answer } from "@prisma/client";
import { addAnswer, getById } from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">;

async function createAnswer(answer:CreateAnswerData){
    return await addAnswer(answer);
}

async function getAnswer(questionId:number){
    return await getById(questionId);
}



const answerService = {
    createAnswer,
    getAnswer
};

export default answerService;