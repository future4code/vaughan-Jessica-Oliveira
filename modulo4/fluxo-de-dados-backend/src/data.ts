export type Produto = {
  id: string;
  name: string;
  price: number;
};

export const listaProdutos: Produto[] = [
  {
    id: "1",
    name: "Televisão",
    price: 1500,
  },
  {
    id: "2",
    name: "Videogame",
    price: 4000,
  },
  {
    id: "3",
    name: "Celular",
    price: 2500,
  },
];
