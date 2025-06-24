import { IProduct } from "./productsMock";

export interface IPedido {
  id: string;
  dataHora: string;
  description: string;
  itens: {
    produtoId: IProduct["id"];
    quantidade: number;
  }[];
  status: "em_preparacao" | "pronto" | "entregue" | "cancelado";
}

export const pedidosMock: IPedido[] = [
  {
    id: "1",
    dataHora: "2025-05-05T12:00:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p1", quantidade: 2 },
      { produtoId: "p3", quantidade: 1 },
    ],
  },
  {
    id: "2",
    dataHora: "2025-05-05T12:20:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p2", quantidade: 1 }],
  },
  {
    id: "3",
    dataHora: "2025-05-05T12:35:00",
    status: "pronto",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p1", quantidade: 1 },
      { produtoId: "p2", quantidade: 1 },
    ],
  },
  {
    id: "4",
    dataHora: "2025-05-05T12:50:00",
    status: "em_preparacao",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p1", quantidade: 3 }],
  },
  {
    id: "5",
    dataHora: "2025-05-05T13:10:00",
    status: "cancelado",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p2", quantidade: 2 },
      { produtoId: "p3", quantidade: 2 },
    ],
  },
  {
    id: "6",
    dataHora: "2025-05-05T13:30:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p3", quantidade: 3 }],
  },
  {
    id: "7",
    dataHora: "2025-05-05T14:00:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p1", quantidade: 1 },
      { produtoId: "p3", quantidade: 1 },
    ],
  },
  {
    id: "8",
    dataHora: "2025-05-05T14:15:00",
    status: "pronto",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p2", quantidade: 2 }],
  },
  {
    id: "9",
    dataHora: "2025-05-05T14:40:00",
    status: "em_preparacao",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p1", quantidade: 2 }],
  },
  {
    id: "10",
    dataHora: "2025-05-05T15:00:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p2", quantidade: 1 },
      { produtoId: "p3", quantidade: 2 },
    ],
  },
  {
    id: "11",
    dataHora: "2025-05-05T15:20:00",
    status: "cancelado",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p1", quantidade: 1 }],
  },
  {
    id: "12",
    dataHora: "2025-05-05T15:45:00",
    status: "pronto",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p1", quantidade: 1 },
      { produtoId: "p2", quantidade: 1 },
    ],
  },
  {
    id: "13",
    dataHora: "2025-05-05T16:00:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p2", quantidade: 2 },
      { produtoId: "p3", quantidade: 1 },
    ],
  },
  {
    id: "14",
    dataHora: "2025-05-05T16:20:00",
    status: "em_preparacao",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p1", quantidade: 2 }],
  },
  {
    id: "15",
    dataHora: "2025-05-05T16:45:00",
    status: "pronto",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p3", quantidade: 2 }],
  },
  {
    id: "16",
    dataHora: "2025-05-05T17:00:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p1", quantidade: 1 }],
  },
  {
    id: "17",
    dataHora: "2025-05-05T17:15:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p2", quantidade: 1 }],
  },
  {
    id: "18",
    dataHora: "2025-05-05T17:40:00",
    status: "cancelado",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p1", quantidade: 1 },
      { produtoId: "p3", quantidade: 1 },
    ],
  },
  {
    id: "19",
    dataHora: "2025-05-05T18:00:00",
    status: "entregue",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [{ produtoId: "p2", quantidade: 2 }],
  },
  {
    id: "20",
    dataHora: "2025-05-05T18:30:00",
    status: "pronto",
    description: "Este pedido possui esta descrição referente ao pedido",
    itens: [
      { produtoId: "p1", quantidade: 2 },
      { produtoId: "p3", quantidade: 1 },
    ],
  },
];
