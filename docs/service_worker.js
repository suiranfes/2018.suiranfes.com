self.importScripts('/workbox-sw.js')

const workboxSW = new WorkboxSW()
workboxSW.precache([
  {
    "url": "assets/main.js",
    "revision": "d54aed18ebcfed7a724a8b7924a883e2"
  },
  {
    "url": "assets/main.min.js",
    "revision": "2c7815c1ccbfc1b461dc86815bac1f59"
  },
  {
    "url": "assets/pjax-api.js",
    "revision": "d37e2acde95fd4b351b5601739e2ebd3"
  },
  {
    "url": "assets/pjax-api.min.js",
    "revision": "612567015eac48767c30612a497aca3a"
  },
  {
    "url": "assets/style.min.css",
    "revision": "020cf0c45a89d821d49aa91c30e616f9"
  },
  {
    "url": "info.json",
    "revision": "6df35393e0ccc79170ee1013dfb7283c"
  },
  {
    "url": "manifest.json",
    "revision": "3a9b843ad4eb52464a5e0628d9d82372"
  },
  {
    "url": "workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])
