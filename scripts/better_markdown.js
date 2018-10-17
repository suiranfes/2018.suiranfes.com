module.exports = (htm, urlprefix) => {
  const fontawesome = require("@fortawesome/fontawesome-svg-core")
  fontawesome.library.add(require("@fortawesome/free-solid-svg-icons").fas, require("@fortawesome/free-regular-svg-icons").far, require("@fortawesome/free-brands-svg-icons").fab)

  let $ = require('cheerio').load(htm, {decodeEntities: false})

  $('body > h2, body > h3, body > h4, body > h5, body > h6').addClass('blogstyle')
  $('h2, h3, h4, h5, h6').each((i, el) => { const text = encodeURIComponent($(el).text()); $(this).attr('id', text )})
  $('img').addClass('img-fluid')
  $('img[src^="/"]').attr( 'src', function(i, el){ return `${urlprefix}${$(this).attr('src')}` })
  $('img[src^="files/"]').attr( 'src', function(i, el){ return `${urlprefix}/${$(this).attr('src')}` })
  $('table').addClass('table table-sm table-bordered')
  $(':not(.mfm) > blockquote').addClass('blockquote rounded px-3 px-md-4 py-3 font-weight-light')
  $(':not(.mfm) > a[href^="http"], :not(.mfm) > a[href^="//"]').append(fontawesome.icon({ prefix: "fas", iconName: "external-link-alt" },{classes:['fa-fw', 'fa-sm']}).html[0])
  $('a[href^="http"], a[href^="//"]').attr({target:'_blank', rel:'noopener'})

  return $('body').html()
}
