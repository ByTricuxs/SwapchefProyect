import { createFileRoute } from '@tanstack/react-router'

import Password from '../components/pages/changePassword'
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'

import pandaImg from '../assets/Panda rojo.svg';

const headerProps = {
  img: pandaImg
}

export const Route = createFileRoute('/password')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Header {...headerProps} />
            <Password />
          </div>
          <Footer />
        </div>
      );
}
