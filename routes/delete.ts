import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// Delete method

exports.delete_user = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  res.json(user);
};

exports.delete_post = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  const post = await prisma.post.delete({
    where: {
      id,
    },
  });
  res.json(post);
};
