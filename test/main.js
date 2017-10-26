let { join } = require('path')
let test = require('tape-promise/tape')
let proxyquire = require('proxyquire')
let { newTempDir } = require('./common.js')

let home = newTempDir()
console.error(`ui home: ${home}`)

Object.assign(process.env, {
  COSMOS_TEST: 'true',
  COSMOS_HOME: home,
  COSMOS_NETWORK: join(__dirname, 'localtestnet')
})

test('main', async function (t) {
  let main = proxyquire('../app/dist/main', {
    electron: {
      app: {
        on: () => {},
        quit: () => {}
      }
    }
  }).default

  main
  .then(() => {
    t.ok(true, 'main function is running')
    main.shutdown()
    t.end()
  })
  .catch(e => {
    main.shutdown()
    t.fail(e)
  })
})
