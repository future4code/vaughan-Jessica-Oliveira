import express = require("express");
import { Express } from "express";

const app = express();
app.use(express.json);

app.get("/ping", (request, response) => {
  response.send("Pong");
});

type tarefa = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const listaTarefas: tarefa[] = [
  {
    userId: 1,
    id: 1,
    title: "varrer a casa",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "lavar louça",
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: "lavar roupa",
    completed: false,
  },
];

app.get("/todos:completed", (request, response) => {
  const status = request.params.completed;

  const tarefasCompletas = listaTarefas.filter((tarefa) => {
    return tarefa.completed === true;
  });

  const tarefasIncompletas = listaTarefas.filter((tarefa) => {
    return tarefa.completed === false;
  });

  if (status === "true") {
    response.send(tarefasCompletas);
  } else {
    response.send(tarefasIncompletas);
  }
});

app.post("/criarTarefa", (request, response) => {
  const body = {
    userId: Number(request.headers.authorization),
    id: new Date().getTime(),
    title: request.body.title,
    completed: request.body.completed,
  };

  listaTarefas.push(body);

  response.send(listaTarefas);
});
