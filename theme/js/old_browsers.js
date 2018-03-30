var UAparser = require('ua-parser-js')
var $ = require('jquery')

var agent = UAparser(window.navigator.userAgent)

function chkandro(){
  var isOldAndroidBrowser = false
  var ua = window.navigator.userAgent
  if (/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua)) {
    isOldAndroidBrowser = true
  }

  return isOldAndroidBrowser
}

$(function(){
  nosupport = false

  if(chkandro()){
    nosupport = true
    alert('この画面では正しく表示されない可能性があります。Chrome等の新しいブラウザアプリでご覧ください。')
    throw new Error('古いアンドロイド標準ブラウザを検出しました。')
    return false
  } else if (agent.browser.name == 'IE') {
    nosupport = true
    alert('Internet Explorerでは、このサイトは正しく表示されない場合があります。EdgeやChrome等の新しいブラウザでご覧ください。')
    throw new Error('Internet Explorerを検出しました。')
    return false
  }
});