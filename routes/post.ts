import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

exports.create_user = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  res.json(user);
};

// Modificamos el connect y ahora se realizará por el email de autor

exports.create_post = async (req: Request, res: Response) => {
  const { title, content, authorEmail } = req.body;
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
};
