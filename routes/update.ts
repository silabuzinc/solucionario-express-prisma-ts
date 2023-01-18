import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Make publish

exports.publish = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const post = await prisma.post.update({
    where: { id },
    data: { published: true },
  });
  res.json(post);
};

// Modify post

exports.update_post = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const data = req.body;

  const post = await prisma.post.update({
    where: { id },
    data: data,
  });
  res.json(post);
};
