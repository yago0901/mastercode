import { IGroceries, ingredientsMock } from "./ingredientsMock";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  type: "snack" | "drink" | "side" | "portion";
  description?: string;
  groceries?: {
    id: string;
    name: string;
    quantity: number;
    unit: string;
  }[];
}

function getGroceriesDetail(groceriesList: { grocerie: string; quantity: number }[]) {
  return groceriesList.map(({ grocerie, quantity }) => {
    const found = ingredientsMock.find((item) => item.id === grocerie);
    return found
      ? {
          id: found.id,
          name: found.name,
          quantity,
          unit: found.unit,
        }
      : {
          id: grocerie,
          name: "Desconhecido",
          quantity,
          unit: "un",
        };
  });
}

export const productsMock: IProduct[] = [
  {
    id: "p1",
    name: "X-Burguer",
    price: 20,
    type: "snack",
    description: "Pão, carne e queijo cheddar com maionese.",
    groceries: getGroceriesDetail([
      { grocerie: "i1", quantity: 1 },
      { grocerie: "i2", quantity: 150 },
      { grocerie: "i3", quantity: 40 },
      { grocerie: "i7", quantity: 20 },
    ]),
  },
  {
    id: "p2",
    name: "X-Salada",
    price: 22,
    type: "snack",
    description: "Clássico com carne, queijo, alface, tomate e maionese.",
    groceries: getGroceriesDetail([
      { grocerie: "i1", quantity: 1 },
      { grocerie: "i2", quantity: 150 },
      { grocerie: "i3", quantity: 40 },
      { grocerie: "i5", quantity: 30 },
      { grocerie: "i6", quantity: 30 },
      { grocerie: "i7", quantity: 20 },
    ]),
  },
  {
    id: "p3",
    name: "X-Bacon",
    price: 25,
    type: "snack",
    description: "Hambúrguer com bacon crocante e queijo.",
    groceries: getGroceriesDetail([
      { grocerie: "i1", quantity: 1 },
      { grocerie: "i2", quantity: 150 },
      { grocerie: "i3", quantity: 40 },
      { grocerie: "i4", quantity: 50 },
      { grocerie: "i7", quantity: 20 },
    ]),
  },
  {
    id: "p4",
    name: "X-Egg",
    price: 24,
    type: "snack",
    description: "Carne, ovo, queijo e maionese no pão.",
    groceries: getGroceriesDetail([
      { grocerie: "i1", quantity: 1 },
      { grocerie: "i2", quantity: 150 },
      { grocerie: "i3", quantity: 40 },
      { grocerie: "i15", quantity: 1 },
      { grocerie: "i7", quantity: 20 },
    ]),
  },
  {
    id: "p5",
    name: "X-Tudo",
    price: 30,
    type: "snack",
    description: "O lanche completo com tudo que você gosta.",
    groceries: getGroceriesDetail([
      { grocerie: "i1", quantity: 1 },
      { grocerie: "i2", quantity: 150 },
      { grocerie: "i3", quantity: 40 },
      { grocerie: "i4", quantity: 50 },
      { grocerie: "i5", quantity: 30 },
      { grocerie: "i6", quantity: 30 },
      { grocerie: "i15", quantity: 1 },
      { grocerie: "i7", quantity: 20 },
      { grocerie: "i8", quantity: 10 },
      { grocerie: "i9", quantity: 10 },
    ]),
  },
  {
    id: "p6",
    name: "X-Frango",
    price: 23,
    type: "snack",
    description: "Frango grelhado, mussarela, salada e maionese.",
    groceries: getGroceriesDetail([
      { grocerie: "i1", quantity: 1 },
      { grocerie: "i14", quantity: 150 },
      { grocerie: "i18", quantity: 40 },
      { grocerie: "i5", quantity: 30 },
      { grocerie: "i6", quantity: 30 },
      { grocerie: "i7", quantity: 20 },
    ]),
  },
  {
    id: "p7",
    name: "X-Veggie",
    price: 24,
    type: "snack",
    description: "Opção vegetariana com hambúrguer vegetal e salada.",
    groceries: getGroceriesDetail([
      { grocerie: "i1", quantity: 1 },
      { grocerie: "i20", quantity: 150 },
      { grocerie: "i18", quantity: 40 },
      { grocerie: "i5", quantity: 30 },
      { grocerie: "i6", quantity: 30 },
      { grocerie: "i7", quantity: 20 },
    ]),
  },
  {
    id: "p8",
    name: "Hot Dog",
    price: 18,
    type: "snack",
    description: "Cachorro-quente com batata palha, ketchup e mostarda.",
    groceries: getGroceriesDetail([
      { grocerie: "i12", quantity: 1 },
      { grocerie: "i13", quantity: 1 },
      { grocerie: "i7", quantity: 20 },
      { grocerie: "i8", quantity: 10 },
      { grocerie: "i9", quantity: 10 },
      { grocerie: "i16", quantity: 20 },
    ]),
  },
  {
    id: "p9",
    name: "Soda Can",
    price: 5,
    type: "drink",
    description: "O lanche completo com tudo que você gosta.",
  },
  {
    id: "p10",
    name: "Natural Juice",
    price: 6,
    type: "drink",
    description: "O lanche completo com tudo que você gosta.",
  },
  {
    id: "p11",
    name: "French Fries",
    price: 12,
    type: "portion",
    description: "O lanche completo com tudo que você gosta.",
    groceries: getGroceriesDetail([{ grocerie: "i16", quantity: 150 }]),
  },
];
