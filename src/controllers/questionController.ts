import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const question = req.body;
  // await questionService.findByQuestion(question);
  await questionService.insertQuestion(question);
  res.sendStatus(200);
}

export async function answer(req: Request, res: Response) {
  const questionId = parseInt(req.params.id);
  const answer = req.body.answer;
  const newAnswer = {answer:answer, questionId:questionId};

  await questionService.findById(questionId);
  await answerService.createAnswer(newAnswer);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAllQuestions();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const question = await questionService.findById(id);
  const answers = await answerService.getAnswer(id);

  const response = {
    id:id,
    question:question.question,
    answers:answers
  }
  res.status(200).send(response);
}
