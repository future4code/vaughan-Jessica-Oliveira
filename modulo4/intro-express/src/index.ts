import cors from "cors";
import { Express, request, response } from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello");
});

type user = {
  id: number;
  name: string;
  phone: string | number;
  email: string;
  website: string;
};

const users: user[] = [
  {
    id: 123,
    name: "Jessica Oliveira",
    phone: 12345678,
    email: "jessica@gmail.com",
    website: "jessica.com.br",
  },
  {
    id: 456,
    name: "Marina Oliveira",
    phone: 891234567,
    email: "marina@gmail.com",
    website: "marina.com.br",
  },
];

app.get("/users", (request, response) => {
  response.send(users);
});

type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const posts: post[] = [
  {
    id: 123,
    title: "Post 1",
    body: "Lorem 1",
    userId: 1,
  },
  {
    id: 456,
    title: "Post 2",
    body: "Lorem 2",
    userId: 2,
  },
  {
    id: 789,
    title: "Post 3",
    body: "Lorem 3",
    userId: 3,
  },
];

app.get("/posts", (request, response) => {
  response.send(posts);
});
