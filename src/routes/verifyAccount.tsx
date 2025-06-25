import { createFileRoute } from '@tanstack/react-router'

import VerifyAccount from '../components/pages/verifyAccount'
import Header from '../components/ui/Header'


const headerProps = {
  title:"Swapchef"
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
            <div>
            </div>
          </div>
        );
}
