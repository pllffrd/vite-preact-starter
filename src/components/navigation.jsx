import {h} from 'preact'

export function Navigation() {
  return (
    <nav tw="inline-flex space-x-4 px-4">
      <a href="/" tw="text-gray-700 text-xl hover:underline">
        Home
      </a>
      <a href="/about" tw="text-gray-700 text-xl hover:underline">
        About
      </a>
    </nav>
  )
}
