import { createFileRoute } from '@tanstack/react-router'

import Register from '../components/pages/register'
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'

import mapacheImg from '../assets/Mapache.svg';

const headerProps = {
  img: mapacheImg
}

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header {...headerProps} />
        <Register />
      </div>
      <Footer />
    </div>
  );
}
