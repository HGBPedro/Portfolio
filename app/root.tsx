import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import shared from './shared.css'
import largeScreen from './styles/largeScreen.css'
import normalScreen from './styles/normalScreen.css'

export function links() {
  return [
    { rel: "stylesheet", href: shared },
    { rel: "stylesheet", href: largeScreen },
    { rel: "stylesheet", href: normalScreen }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
