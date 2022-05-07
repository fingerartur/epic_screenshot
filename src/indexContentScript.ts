/**
 * This script is executed on each page
 */

import { logger } from './common'
import { takeScreenshot } from './screenshot'

const listener = (event: KeyboardEvent) => {
  if (
    ['s', '.', ','].includes(event.key)
    && event.shiftKey
    && (event.altKey || event.metaKey || event.ctrlKey)
  ) {
    takeScreenshot()
  }

  logger.info('key pressed', event.key)
}

window.onload = () => {
  logger.info('Adding key listeners to Ctrl+Shift+S, Cmd+Shift+S, Alt+Shift+S...')

  window.addEventListener('keydown', listener)
}

window.onbeforeunload = () => {
  window.removeEventListener('keydown', listener)

  logger.info('Cleaned up')
}
