import { logger } from './common'

type Video = {
  element: HTMLVideoElement
  width: number
  height: number
  pixels: number
}

const sortByPixelsDesc = (videos: Video[]) => {
  return videos.sort((video1, video2) => {
    return video2.pixels - video1.pixels
  })
}

/**
 * @throws if no video element exists
 */
const findLargestVideoElement = () => {
  const videoElements = document.getElementsByTagName('video')

  if (videoElements.length === 0) {
    throw new Error('Did not find any video element to take screenshot of')
  }

  let videos: Video[] = Array.from(videoElements).map(element => {
    const width = element.clientWidth
    const height = element.clientHeight

    return {
      element,
      width,
      height,
      pixels: width * height,
    }
  })

  videos = sortByPixelsDesc(videos)

  const sizes = videos.map(video => `${video.width}x${video.height}`).join(', ')
  const largestVideo = videos[0]

  logger.info(`Found ${videos.length} video elements of sizes${sizes}. `
    + `Taking the largest one ${largestVideo.width}x${largestVideo.height})`, videos)

  return largestVideo.element
}

const findVideoElement = () => {
  return findLargestVideoElement()
}

const downloadImage = (canvas: HTMLCanvasElement, filename: string) => {
  const link = document.createElement('a')
  link.download = filename
  link.href = canvas.toDataURL()
  link.click()
}

/**
 * @throws if it fails to draw to canvas
 */
const drawCurrentVideoFrameOnCanvas = (videoElement: HTMLVideoElement) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    throw new Error('Failed to capture image. Failed to obtain 2D drawing canvas context')
  }

  const width = videoElement.videoWidth
  const height = videoElement.videoHeight

  canvas.width = width
  canvas.height = height

  context.fillRect(0, 0, width, height)
  context.drawImage(videoElement, 0, 0, width, height)

  return canvas
}

const showPreview = (canvas: HTMLCanvasElement) => {
  const width = canvas.width
  const height = canvas.height
  const resolution = `${width}x${height}`

  canvas.className = 'epic_screenshot_preview'

  const parent = document.fullscreenElement ?? document.body
  parent.appendChild(canvas)

  setTimeout(function () {
    document.body.removeChild(canvas)
  }, 1500)
}

const takeScreenshot = () => {
  logger.info('Taking screenshot...')

  const videoElement = findVideoElement()
  const canvas = drawCurrentVideoFrameOnCanvas(videoElement)

  downloadImage(canvas, 'Screenshot.png')

  logger.info('Screenshot saved successfully')

  showPreview(canvas)
}

export { takeScreenshot }
