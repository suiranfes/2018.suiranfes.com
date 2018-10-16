importScripts('/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/fontawesome.min.css",
    "revision": "68ee62db13e0ab881b065e170e1ebbe1"
  },
  {
    "url": "assets/main.js",
    "revision": "24ad7da94b983a4171a0c461d02337bc"
  },
  {
    "url": "assets/main.min.js",
    "revision": "618f28498efd98b8068c7d87c5e4ceef"
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