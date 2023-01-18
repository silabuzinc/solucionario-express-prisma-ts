import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
// Get all authors with posts

exports.get_all_authors = async (req: Request, res: Response) => {
  console.log(req.params);
  const authors = await prisma.user.findMany({
    include: { posts: true },
  });
  res.json(authors);
};

// Get published post
exports.get_posts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  res.json(posts);
};
