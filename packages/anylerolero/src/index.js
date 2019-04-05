const uppercase = require('matilda-antonia')

function helloWorld (name = 'anonymous') {
  return `Hello ${uppercase(name)}!!`
}

module.exports = helloWorld;