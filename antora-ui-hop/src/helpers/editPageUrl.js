'use strict'

module.exports = (page) => {
  if (page.attributes !== undefined && page.attributes.alternativeediturl !== undefined) {
    return page.attributes.alternativeediturl
  }
  return null
}
