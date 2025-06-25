import { createFileRoute } from '@tanstack/react-router'

import Header from '../components/ui/Header'
import Profile from '../components/ui/profileGuest'

const headerProps = {
  title:  'Swapchef'
}


export const Route = createFileRoute('/profileGuest')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
          <div>
            <Header {...headerProps} />
            <Profile />
          </div>
        </div>);
}
