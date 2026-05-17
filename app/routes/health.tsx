// Resource route: no default export → loader Response is returned verbatim.
// React Router v7 framework mode treats routes without a default export as
// "resource routes" that bypass SSR rendering and proxy the loader response.
export function loader() {
  return new Response('ok', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
