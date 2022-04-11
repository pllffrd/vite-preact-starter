import {h} from 'preact'
import {createRouter} from '@nanostores/router'
import {useStore} from '@nanostores/preact'
// Pages
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

const router = createRouter({
  home: '/',
  about: '/about',
})

export default function Router() {
  const page = useStore(router)

  if (!page) {
    return 'No page at that url'
  }

  switch (page.route) {
    case 'about':
      return <About />
    default:
      return <Home />
  }
}
