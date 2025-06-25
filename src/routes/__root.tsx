import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import BarNavigation from '../components/ui/barNavegation'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen">
      <Outlet />
      <BarNavigation />
    </div>
  )
}
