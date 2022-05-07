import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (request: Request, response: Response) => {
  try {
    const { name, CPF, dateOfBirthAsString } = request.body;

    const [day, month, year] = dateOfBirthAsString.split("/");

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

    const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime();

    const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365;

    if (ageInYears < 18) {
      response.statusCode = 406;
      throw new Error("Idade deve ser maior que 18 anos.");
    }

    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: [],
    });
    response.status(201).send("Conta criada com sucesso!");
  } catch (error) {
    response.send(error.message);
  }
});

app.get("/users/all", (request: Request, response: Response) => {
  try {
    if (!accounts.length) {
      response.statusCode = 404;
      throw new Error("Nenhuma conta encontrada");
    }
    response.status(200).send(accounts);
  } catch (error) {
    response.send(error.message);
  }
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
