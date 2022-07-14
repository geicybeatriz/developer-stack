// TODO
import { Question } from "@prisma/client";
import { findAll, getQuestionById, insert } from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">;

async function insertQuestion(question:CreateQuestionData){
    const newQuestion = await insert(question);
    return newQuestion;
}

// async function findByQuestion(question:CreateQuestionData){
//     const questionExist= await findByName(question.question);
//     if(questionExist) throw {type:"conflict", message:"questions conflicts"};
//     return questionExist;
// }

async function findAllQuestions(){
    return await findAll();
}

async function findById(id:number){
    const question = await getQuestionById(id);
    if(!question) throw {type: "not_found", message: "not found"};
    return question;
}

const questionService = {
    insertQuestion,
    findAllQuestions,
    findById
};

export default questionService;