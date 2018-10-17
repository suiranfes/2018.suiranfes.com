importScripts('/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/fontawesome.min.css",
    "revision": "68ee62db13e0ab881b065e170e1ebbe1"
  },
  {
    "url": "assets/main.js",
    "revision": "e2b6d0bf8444cd6152749c90ebf54657"
  },
  {
    "url": "assets/main.min.js",
    "revision": "4b4412259296ba74ea2e6ade02d375e3"
  },
  {
    "url": "assets/style.min.css",
    "revision": "46f59a4b828a6c62b749f6902fa1622f"
  },
  {
    "url": "workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])