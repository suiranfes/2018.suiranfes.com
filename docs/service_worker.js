importScripts('/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/main.js",
    "revision": "f08f6b57bad5229bf93a4ddc5fcde60f"
  },
  {
    "url": "assets/main.min.js",
    "revision": "ceafeef9fbfcd753a045a4ff7b84fc04"
  },
  {
    "url": "assets/pjax-api.js",
    "revision": "8e170c2081aec2bbf5ddabbcfdb510ec"
  },
  {
    "url": "assets/pjax-api.min.js",
    "revision": "d39316c1fa80d4b0e8b9ed6c239747e1"
  },
  {
    "url": "assets/style.min.css",
    "revision": "724f1a320bb3ea45d6b9e9bfc80806e4"
  },
  {
    "url": "files/fonts/mgenplus-c-bold.woff2",
    "revision": "76c65f1d539709a4c6ef83eeaa659810"
  },
  {
    "url": "files/fonts/mgenplus-c-light.woff2",
    "revision": "99d52e90e9c3638178409464a9525232"
  },
  {
    "url": "files/fonts/mgenplus-c-regular.woff2",
    "revision": "f5dcf7e68497eb249acd15114b6cadce"
  },
  {
    "url": "files/fonts/mgenplus-m-bold.woff2",
    "revision": "4c9c98e29eee23f2154f1d95bc46194a"
  },
  {
    "url": "files/fonts/mgenplus-m-light.woff2",
    "revision": "f398d95c9487eca11d0e78e3eb0b295a"
  },
  {
    "url": "files/fonts/mgenplus-m-regular.woff2",
    "revision": "8d0438ab08bffff32cb67279863f6554"
  },
  {
    "url": "files/fonts/mgenplus-p-bold.woff2",
    "revision": "4e20f27ea5480b43f7c8ee0803302efd"
  },
  {
    "url": "files/fonts/mgenplus-p-light.woff2",
    "revision": "e865da6261185aa3b7aeb181c43aab68"
  },
  {
    "url": "files/fonts/mgenplus-p-regular.woff2",
    "revision": "b0c5149e08370d41d300dca20f3d523c"
  },
  {
    "url": "info.json",
    "revision": "c9fc0906c0626ff0aa103cefe14484c6"
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