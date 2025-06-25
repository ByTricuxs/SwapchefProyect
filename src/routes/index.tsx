import { createFileRoute } from '@tanstack/react-router';

import { recipeCards as baseRecipes } from '../components/pages/recipesPages';
import like from '../assets/corazonVacio.svg';
import ButtonCard from '../components/ui/ButtonCard';
import Container from '../components/ui/Container';

const buttonPropsCards = {
  heart: like,
  style: ""
};

const recipeCards = baseRecipes.map(recipe => ({
  ...recipe,
  button: <ButtonCard {...buttonPropsCards} />
}));

const headerProps = { title: 'Swapchef' };

export const Route = createFileRoute('/')({
  component: () => <Container header={headerProps} cards={recipeCards} />
});