module.exports = (htm, urlprefix) => {
  const fontawesome = require("@fortawesome/fontawesome")
  const faSolid = require("@fortawesome/fontawesome-free-solid")['default']
  const faRegular = require("@fortawesome/fontawesome-free-regular")['default']
  const faBrands = require("@fortawesome/fontawesome-free-brands")['default']
  fontawesome.library.add(faSolid, faRegular, faBrands)

  let $ = require('cheerio').load(htm, {decodeEntities: false})

  $('h2').addClass('mt-5 p-2 border border-left-0 border-right-0 border-primary')
  $('h3, h4').addClass('mt-4 p-1 border border-left-0 border-top-0 border-right-0 border-primary')
  $('h5, h6').addClass('mt-3 p-1 border border-left-0 border-top-0 border-right-0 border-primary')
  $('img[src^="/"]').attr( 'src', function(i, el){ return `${urlprefix}${$(this).attr('src')}` })
  $('img[src^="files/"]').attr( 'src', function(i, el){ return `${urlprefix}/${$(this).attr('src')}` })
  $('table').addClass('table table-sm table-bordered')
  $('blockquote').addClass('blockquote')
  $('a[href^="http"], a[href^="//"]').append(fontawesome.icon({ prefix: "fas", iconName: "external-link-alt" },{classes:['fa-fw']}).html[0]).attr({target:'_blank', rel:'noopener'})

  return $('body').html()
}
