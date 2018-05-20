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
    "revision": "4fc5dffbcf114bb1ddeaebf756c86774"
  },
  {
    "url": "files/images/icons/manifest.json",
    "revision": "1aa32197cd997823573ea9f3bac73d26"
  },
  {
    "url": "info.json",
    "revision": "ade26de017b36483c076f61d375ef071"
  },
  {
    "url": "manifest.json",
    "revision": "76dede07c9bf21affd7c963745ffd06a"
  },
  {
    "url": "workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])
