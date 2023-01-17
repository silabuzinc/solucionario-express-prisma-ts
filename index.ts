import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/author", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  res.json(user);
});

app.post("/post", async (req, res) => {
  const { title, content, author } = req.body;
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { id: author } },
    },
  });
  res.json(result);
});

app.listen(port, () => {
  console.log(`El servidor se ejecuta en http://localhost:${port}`);
});
