import { createFileRoute } from '@tanstack/react-router'

import Header from '../components/ui/Header'
import Forum from '../components/pages/forum'
import Footer from '../components/ui/footer'

const headerProps = {
  title:  'Swapchef'
}

export const Route = createFileRoute('/forum')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header {...headerProps} />
          <Forum />
        </div>
        <Footer />
      </div>);
}
