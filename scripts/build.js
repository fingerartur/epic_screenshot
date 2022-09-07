const childProcess = require('child_process')
const fs = require('fs')
const { assertMinNodeVersion, clearDirectory, copyFiles, log } = require('./utils.js')

assertMinNodeVersion(16)

const DIST_DIR = './dist'
const MANIFEST_FILE = 'manifest.json'

try {
  log.info('Building sources...')
  childProcess.execSync('npx webpack', { stdio: 'inherit' })
} catch (error) {
  log.error('Failed to build sources')
  throw error
}

try {
  log.info('Copying manifest.json...')
  fs.copyFileSync(`./src/${MANIFEST_FILE}`, `${DIST_DIR}/${MANIFEST_FILE}`)
} catch (error) {
  log.error(`Failed to copy ${MANIFEST_FILE}`)
  throw error
}

log.success('Success!')
log.success(`All files of the chrome extension are located in ${DIST_DIR}`)
