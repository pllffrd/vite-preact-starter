import {h} from 'preact'
import {css} from 'twind/css' // eslint-disable-line node/file-extension-in-import
import {Footer} from '../components/footer.jsx'
import {Navigation} from '../components/navigation.jsx'

const layout = css`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 40px;
  grid-template-areas:
    'Header'
    'Main'
    'Footer';
  header {
    grid-area: 'Header';
    display: grid;
    align-items: center;
    border-bottom: 1px solid #44475a;
  }
  main {
    grid-area: 'Main';
    padding: 0rem 1rem;
  }
  footer {
    grid-area: 'Footer';
    padding: 0rem 1rem;
    display: grid;
    align-items: center;
    border-top: 1px solid #44475a;
  }
`
// eslint-disable-next-line react/prop-types
export default function BaseLayout({children}) {
  return (
    <div tw={layout}>
      <header>
        <Navigation />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
