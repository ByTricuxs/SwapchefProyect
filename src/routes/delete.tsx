import { createFileRoute } from '@tanstack/react-router'

import Delete from '../components/pages/signOut'
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'

import pandaImg from '../assets/Panda rojo.svg';

const headerProps = {
  img: pandaImg
}

export const Route = createFileRoute('/delete')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Header {...headerProps} />
            <Delete />
          </div>
          <Footer />
        </div>
      );
}
