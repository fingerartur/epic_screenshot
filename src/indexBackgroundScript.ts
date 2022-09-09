/**
 * This script is executed in background when browser opens
 */

import { logger } from './common'

logger.info('Background script')

// To activate this script, add the following to
// manifest.json:
//
// "permissions": [ "activeTab" ],
// "background": {
//   "service_worker": "background_script.min.js"
// },
//
// More info: https://developer.chrome.com/docs/extensions/mv3/content_scripts/
