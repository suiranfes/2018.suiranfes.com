self.importScripts('/workbox-sw.js')

const workboxSW = new self.WorkboxSW()
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
    "revision": "f043e0f2e6a017fd489b64e0c4ad83de"
  },
  {
    "url": "files/images/icons/manifest.json",
    "revision": "1aa32197cd997823573ea9f3bac73d26"
  },
  {
    "url": "info.json",
    "revision": "0f3bcdeaa0607126fa15eba674e6fc43"
  },
  {
    "url": "manifest.json",
    "revision": "d6fc5a630411d68fbd850c2278e99f5b"
  },
  {
    "url": "workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])
