import express, { request, response } from "express";
import { Express } from "express";
import { listaProdutos, Produto } from "./data";

const app = express();

app.use(express.json());

app.listen(3003, () => console.log("Servidor rodando em 3003"));

app.get("/test", (request, response) => {
  response.send("API funcionando.");
});

app.post("/products", (request: Request, response: Response) => {
  try {
    const name = request.body.name;
    const price = request.body.price;

    const novoProduto: Produto = {
      id: Date.now().toString(),
      name,
      price,
    };

    listaProdutos.push(novoProduto);
    response.send(listaProdutos);
  } catch (error: any) {
    response.send("Algo deu errado, tente novamente");
  }
});

app.get("/products", (request: Request, response: Response) => {
  try {
    response.send(listaProdutos);
  } catch (error: any) {
    response.send(error.message || "Erro inesperado");
  }
});
