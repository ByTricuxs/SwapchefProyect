import recipeImage from '../imgs/Pancakes.png';
import recipeTacos from '../imgs/tacos.jpg';
import recipeEnsalada from '../imgs/ensalada.jpg';
import recipeSpaghetti from '../imgs/Spaghetti.png';
import recipeMuffins from '../imgs/muffins.jpg';


export const recipeCards = [
  {
    image: recipeImage,
    category: 'Desayuno' as const,
    name: 'Pancakes sin leche',
    autor: 'Krysten V.',
    ingredients: ['1 taza de harina', '½ taza de jugo de naranja natural', '1 huevo grande', '1 banano maduro', '1 cucharadita de polvo para hornear', '1 cucharadita de esencia de vainilla', 'Aceite vegetal (para engrasar la sartén)'],
    steps: ['Tritura el banano con un tenedor hasta formar un puré', 'En un bowl, mezcla el banano, huevo, jugo de naranja y vainilla', 'Añade la harina y el polvo para hornear. Mezcla hasta integrar', 'Engrasa una sartén y calienta a fuego medio', 'Vierte un poco de mezcla para formar un pancake. Cocina hasta que salgan burbujas.', 'Voltea con cuidado y cocina por el otro lado hasta dorar', 'Sirve caliente, con miel, frutas o el acompañamiento de tu gusto']
  },
  {
    image: recipeTacos,
    category: 'Comidas' as const,
    name: 'Tacos',
    autor: 'Luis G.',
    ingredients: [' tortillas de maíz o harina', 'Carne molida o deshebrada al gusto', '½ taza de salsa (mexicana, pico de gallo o al gusto)', 'Sal, pimienta y especias al gusto'],
    steps: ['Cocina la carne en sartén con sal y especias hasta que esté dorada', 'Calienta las tortillas en otra sartén o en microondas', 'Rellena cada tortilla con una porción de carne', 'Agrega salsa y cilantro al gusto. Sirve inmediatamente']
  },
  {
    image: recipeEnsalada,
    category: 'Vegetariano' as const,
    name: 'Ensalada Verde',
    autor: 'Ana P.',
    ingredients: ['1 lechuga romana o americana', '1 pepino', '1 aguacate maduro', '2 cucharadas de aderezo (italiano, limón, balsámico o tu favorito)'],
    steps: ['Lava muy bien todos los ingredientes con agua y unas gotas de vinagre', 'Corta la lechuga en tiras finas, el pepino en rodajas y el aguacate en cubos', 'Mezcla todo en un bowl grande y añade el aderezo justo antes de servir', 'Sirve y disfruta']
  },

  {
    image: recipeSpaghetti,
    category: 'Comidas' as const,
    name: 'Spaghettis en salsa rosa',
    autor: 'kristen V.',
    ingredients: ['Spaghettis al gusto', 'Carne molida al gusto', '1 salsa de tomate', '1 salsa blanca o una crema dulce', '1 cucharadita de sal', '1 cucharadita de sazón completa'],
    steps: ['Cocina los spaghettis en agua hirviendo con sal, según las instrucciones del paquete', 'Condimenta la carne con sal y sazón completa', 'Fríe la carne en una sartén hasta que esté bien cocida', 'Calienta las salsas (tomate y blanca) por separado, luego mézclalas hasta formar una salsa rosada', 'Sirve los spaghettis con la carne y la salsa por encima']
  }
  ,

  {
    image: recipeMuffins,
    category: 'Reposteria' as const,
    name: ' Muffins de Vainilla Sin Huevo',
    autor: 'kristen V.',
    ingredients: ['1 ½ taza de harina de trigo', '½ taza de azúcar', '1 cucharada de polvo de hornear', '½ cucharadita de sal', '1 taza de leche  (avena, soya, almendra, vaca, etc.)', '¼ taza de aceite vegetal', '1 cucharada de vinagre blanco o de manzana', '1 cucharada de esencia de vainilla'],
    steps: ['Precalienta el horno a 180°C (350°F) y prepara un molde para muffins con capacillos o ligeramente engrasado', 'Mezcla los ingredientes secos en un tazón grande: harina, azúcar, polvo de hornear y sal', 'En otro recipiente, mezcla los líquidos: leche vegetal, aceite, vinagre y vainilla', 'Incorpora los líquidos a los secos, mezclando solo hasta que no queden grumos grandes (no sobrebatas)', 'Llena los moldes hasta ¾ de su capacidad', 'Hornea durante 18-22 minutos o hasta que al insertar un palillo, salga limpio', 'Deja enfriar sobre una rejilla antes de servir']
  }
];
