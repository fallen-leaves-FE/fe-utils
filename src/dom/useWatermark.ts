
import { WatermarkOptions } from '../../types/index.d'

/**
 * @description 指定元素添加水印
 * @param options 配置参数
 * @returns 水印图片base64URL
 */
const useWatermark = ({
  text,
  el,
  canvasWidth = 300,
  canvasHeight = 150,
  font = '16px normal',
  color = 'rgba(180, 180, 180, 0.3)',
  textAlign = 'left',
  textBaseline = 'middle',
  rotate = -20,
  translate: [translateX, translateY] = [0, 0]
}: WatermarkOptions) => {
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  const ctx = canvas.getContext('2d') as unknown as CanvasRenderingContext2D

  ctx.translate(translateX, translateY)
  ctx.rotate((rotate * Math.PI) / 180)

  ctx.font = font
  ctx.fillStyle = color
  ctx.textAlign = textAlign
  ctx.textBaseline = textBaseline

  ctx.fillText(text, canvas.width / 2, canvas.height / 2)

  const bgImageUrl = canvas.toDataURL('image/png')

  el?.style.setProperty('background-image', `url(${bgImageUrl})`)
  el?.style.setProperty('background-repeat', 'repeat')

  return bgImageUrl
}

export default useWatermark
