import recipeImage from '../imgs/Pancakes.png';

export const recipeCards = [
  {
    image: recipeImage,
    category: 'Desayuno' as const,
    name: 'Pancakes',
    autor: 'Krysten V.',
    ingredients: ['Harina', 'Huevo', 'Leche', 'Mantequilla'],
    steps: ['Mezclar ingredientes', 'Verter en sartén', 'Cocinar por ambos lados']
  },
  {
    image: recipeImage,
    category: 'Comidas' as const,
    name: 'Tacos',
    autor: 'Luis G.',
    ingredients: ['Tortillas', 'Carne', 'Salsa', 'Cilantro'],
    steps: ['Cocinar carne', 'Calentar tortilla', 'Agregar ingredientes']
  },
  {
    image: recipeImage,
    category: 'Vegetariano' as const,
    name: 'Ensalada Verde',
    autor: 'Ana P.',
    ingredients: ['Lechuga', 'Pepino', 'Aguacate', 'Aderezo'],
    steps: ['Lavar ingredientes', 'Cortar verduras', 'Servir con aderezo']
  }
];
