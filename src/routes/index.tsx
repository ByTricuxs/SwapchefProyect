import { createFileRoute } from '@tanstack/react-router';

import {useQuery} from '@tanstack/react-query';

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
  component: RouteComponent,    
});



function RouteComponent(){
    const{data, isLoading, error} = useQuery({
      queryKey: ['recipes'],
      queryFn: async () => {
        const response = await fetch('http://swapchef.test/api/v1/recetas/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;



  return(
    <Container header={headerProps} cards={recipeCards} values={data}/>
  )
}
