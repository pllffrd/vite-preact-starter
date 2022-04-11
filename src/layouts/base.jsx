import {h} from 'preact'
import {css, tw} from 'twind/css' // eslint-disable-line node/file-extension-in-import

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
    border-bottom: 1px solid #44475a;
  }
  main {
    grid-area: 'Main';
  }
  footer {
    grid-area: 'Footer';
    border-top: 1px solid #44475a;
  }
`
// eslint-disable-next-line react/prop-types
export default function BaseLayout({children}) {
  return (
    <div class={tw`${layout}`}>
      <header>Navigation</header>

      <main>{children}</main>

      <footer>Footer</footer>
    </div>
  )
}
