export type IGroceries = {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  description: string;
  averagePrice: number;
  minQuantity: number;
};

export const ingredientsMock: IGroceries[] = [
  { id: 'i1', name: 'Pão de hambúrguer', quantity: 100, unit: 'un', description: 'Pão macio para hambúrguer artesanal', averagePrice: 0.80, minQuantity: 80 },
  { id: 'i2', name: 'Carne bovina', quantity: 5000, unit: 'g', description: 'Carne moída de alta qualidade', averagePrice: 40.00, minQuantity: 3000 },
  { id: 'i3', name: 'Queijo cheddar', quantity: 2000, unit: 'g', description: 'Queijo cheddar processado', averagePrice: 25.00, minQuantity: 1500 },
  { id: 'i4', name: 'Bacon', quantity: 1500, unit: 'g', description: 'Bacon fatiado e defumado', averagePrice: 30.00, minQuantity: 1200 },
  { id: 'i5', name: 'Alface', quantity: 1000, unit: 'g', description: 'Alface americana lavada e pronta', averagePrice: 6.00, minQuantity: 800 },
  { id: 'i6', name: 'Tomate', quantity: 800, unit: 'g', description: 'Tomate maduro cortado em rodelas', averagePrice: 7.00, minQuantity: 1000 },
  { id: 'i7', name: 'Maionese', quantity: 1000, unit: 'ml', description: 'Maionese artesanal', averagePrice: 10.00, minQuantity: 900 },
  { id: 'i8', name: 'Ketchup', quantity: 1000, unit: 'ml', description: 'Ketchup tradicional', averagePrice: 8.00, minQuantity: 800 },
  { id: 'i9', name: 'Mostarda', quantity: 1000, unit: 'ml', description: 'Mostarda amarela suave', averagePrice: 8.00, minQuantity: 800 },
  { id: 'i10', name: 'Cebola', quantity: 700, unit: 'g', description: 'Cebola branca cortada em rodelas', averagePrice: 5.00, minQuantity: 1000 },
  { id: 'i11', name: 'Pepino em conserva', quantity: 500, unit: 'g', description: 'Pepino agridoce fatiado', averagePrice: 12.00, minQuantity: 700 },
  { id: 'i12', name: 'Pão de hot dog', quantity: 50, unit: 'un', description: 'Pão macio para cachorro-quente', averagePrice: 0.70, minQuantity: 60 },
  { id: 'i13', name: 'Salsicha', quantity: 100, unit: 'un', description: 'Salsicha tipo viena', averagePrice: 1.00, minQuantity: 120 },
  { id: 'i14', name: 'Frango desfiado', quantity: 3000, unit: 'g', description: 'Peito de frango cozido e desfiado', averagePrice: 28.00, minQuantity: 2500 },
  { id: 'i15', name: 'Ovo', quantity: 60, unit: 'un', description: 'Ovos brancos médios', averagePrice: 0.70, minQuantity: 80 },
  { id: 'i16', name: 'Batata palha', quantity: 1200, unit: 'g', description: 'Batata palha crocante', averagePrice: 18.00, minQuantity: 1000 },
  { id: 'i17', name: 'Presunto', quantity: 1500, unit: 'g', description: 'Presunto cozido fatiado', averagePrice: 22.00, minQuantity: 1200 },
  { id: 'i18', name: 'Queijo mussarela', quantity: 2000, unit: 'g', description: 'Mussarela fatiada', averagePrice: 24.00, minQuantity: 1800 },
  { id: 'i19', name: 'Molho especial', quantity: 800, unit: 'ml', description: 'Molho da casa exclusivo', averagePrice: 15.00, minQuantity: 900 },
  { id: 'i20', name: 'Hambúrguer vegetariano', quantity: 1000, unit: 'g', description: 'Hambúrguer vegetal à base de soja', averagePrice: 32.00, minQuantity: 1500 },
];
