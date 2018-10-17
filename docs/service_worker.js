importScripts('/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/fontawesome.min.css",
    "revision": "68ee62db13e0ab881b065e170e1ebbe1"
  },
  {
    "url": "assets/main.js",
    "revision": "5a9d040ec8861bac8e97b923c1918fe3"
  },
  {
    "url": "assets/main.min.js",
    "revision": "426ce0b456582a2629eb583d178b1b71"
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