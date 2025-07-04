import { createFileRoute } from '@tanstack/react-router';

import Filtros from '../components/pages/Filtros';
import Header from '../components/ui/Header';
import Footer from '../components/ui/footer';

import pandaImg from '../assets/Panda rojo.svg';

const headerProps = {
  img: pandaImg,
};

export const Route = createFileRoute('/filtros')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header {...headerProps} />
        <Filtros />
      </div>
      <Footer />
    </div>
  );
}
