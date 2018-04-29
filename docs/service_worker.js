self.importScripts('/workbox-sw.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "assets/main.js",
    "revision": "17cc7b17db94bcb036d6bbfb97242634"
  },
  {
    "url": "assets/main.min.js",
    "revision": "553e34fa004b160256875e073ffb93bb"
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
    "revision": "c8730a9048959c699fc78b8652132357"
  },
  {
    "url": "files/images/icons/manifest.json",
    "revision": "1aa32197cd997823573ea9f3bac73d26"
  },
  {
    "url": "info.json",
    "revision": "d598d90ae15b8501f0c3dda40027cc79"
  },
  {
    "url": "manifest.json",
    "revision": "fadd35a9439174a62a9f99217e98f28a"
  },
  {
    "url": "workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
])
