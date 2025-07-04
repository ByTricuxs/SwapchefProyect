import { createFileRoute } from '@tanstack/react-router'

import VerifyAccount from '../components/pages/verifyAccount'
import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'

import pandaImg from '../assets/Panda rojo.svg'

const headerProps = {
  img: pandaImg,
}

export const Route = createFileRoute('/verifyAccount')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header {...headerProps} />
        <VerifyAccount onVerify={() => {}} />
      </div>
       <Footer />   
    </div>
  )
}
