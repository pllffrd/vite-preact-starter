import {
  getAssetFromKV,
  mapRequestToAsset, // eslint-disable-line no-unused-vars
  serveSinglePageApp,
} from '@cloudflare/kv-asset-handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {mapRequestToAsset: serveSinglePageApp})
  } catch {
    const pathname = new URL(event.request.url).pathname
    return new Response(`"${pathname}" not found`, {
      status: 404,
      statusText: 'not found',
    })
  }
}
