import { createFileRoute } from '@tanstack/react-router';

import { recipeCards as baseRecipes } from '../components/pages/recipesPages';
import like from '../assets/corazonVacio.svg';
import ButtonCard from '../components/ui/ButtonCard';
import Container from '../components/ui/Container';

const buttonPropsCards = {
  heart: like,
  style: ""
};

const favoriteCards = baseRecipes
  .filter(r => r.name === 'Pancakes') // ← aquí decides cuáles son favoritos
  .map(recipe => ({
    ...recipe,
    button: <ButtonCard {...buttonPropsCards} />
  }));

const headerProps = { title: 'Favoritos' };

export const Route = createFileRoute('/favorites')({
  component: () => <Container header={headerProps} cards={favoriteCards} />
});
