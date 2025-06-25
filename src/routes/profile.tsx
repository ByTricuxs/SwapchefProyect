import { createFileRoute } from '@tanstack/react-router'

import Header from '../components/ui/Header'
import Profile from '../components/pages/profile'

const headerProps = {
  title:  'Swapchef'
}

import perfilForoIcon from '../assets/perfilForo.svg';

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
          <div>
            <Header {...headerProps} />
            <Profile icon={perfilForoIcon} />
          </div>
        </div>);
}
