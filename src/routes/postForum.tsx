import { createFileRoute } from '@tanstack/react-router'

import PostForum from '../components/pages/postForum'
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'


const headerProps = {
  title:"Swapchef"
}

export const Route = createFileRoute('/postForum')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Header {...headerProps} />
            <PostForum />
          </div>
          <Footer />
        </div>
      );
}
