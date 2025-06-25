import * as React from 'react'
import { useLocation, useNavigate } from '@tanstack/react-router'

export default function BarNavigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  const [loggedIn] = React.useState<boolean>(false); // Cambiar a true si está logueado
  const hideFooter = ['/register', '/login', '/password', '/delete'].includes(currentPath)

  const handleProfileClick = () => {
    if (loggedIn) {
      if (currentPath === '/profile') {
        navigate({ to: '/delete' })
      } else {
        navigate({ to: '/profile' })
      }
    } else {
      navigate({ to: '/profile' })
    }
  }

  if (hideFooter) return null

  const perfilIcon = !loggedIn
    ? currentPath === '/profile'
      ? '/src/assets/PerfilA.svg'
      : '/src/assets/Perfil.svg'
    : currentPath === '/profile'
    ? '/src/assets/salir.svg'
    : '/src/assets/imagenPerfil.png'

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#4E1F00] px-[50px] py-3 z-50">
      <div className="flex justify-between items-center">
        <a href="/">
          <img
            src={currentPath === '/' ? '/src/assets/hogarA.svg' : '/src/assets/hogar.svg'}
            alt="hogar"
            className="w-7 h-7"
          />
        </a>
        <a href="/forum">
          <img
            src={currentPath === '/forum' ? '/src/assets/foroA.svg' : '/src/assets/foro.svg'}
            alt="foro"
            className="w-7 h-7"
          />
        </a>
        <a href="/favorites">
          <img
            src={currentPath === '/favorites' ? '/src/assets/favoritoA.svg' : '/src/assets/favorito.svg'}
            alt="favoritos"
            className="w-7 h-7"
          />
        </a>
        <button onClick={handleProfileClick}>
          <img
            src={perfilIcon}
            alt="perfil"
            className="w-7 h-7 object-cover"
          />
        </button>
      </div>
    </footer>
  )
}