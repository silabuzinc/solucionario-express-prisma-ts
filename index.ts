import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const get = require('./routes/get');
const post = require('./routes/post');
const update = require('./routes/update');
const delete_method = require('./routes/delete');

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Get all authors with posts
app.get("/get_authors", get.get_all_authors);

// Get published post
app.get('/feed', get.get_posts);

// Post methods

app.post("/author", post.create_user);
app.post("/post", post.create_post);

// Make publish
app.put('/publish/:id', update.publish);

// Modify post
app.patch('/ppost/:id', update.update_post);

// Delete method
app.delete('/user/:id', delete_method.delete_user);
app.delete('/post/:id', delete_method.delete_post);

app.listen(port, () => {
  console.log(`El servidor se ejecuta en http://localhost:${port}`);
});
