import { createFileRoute } from '@tanstack/react-router'

import PostRecipe from '../components/pages/uploadRecipes'
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'


const headerProps = {
  title:"Swapchef"
}

export const Route = createFileRoute('/postRecipe')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              <Header {...headerProps} />
              <PostRecipe />
            </div>
            <Footer />
          </div>
        );
}
