import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const MusicIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path
      fill='#010101'
      d='M33.037 27.186V5.778c0-.227-.1-.44-.271-.592a.788.788 0 0 0-.627-.178L17.334 7.261a.781.781 0 0 0-.664.771v18.703c-.763-.502-1.757-.784-2.876-.784a7.62 7.62 0 0 0-2.777.549c-1.395.556-2.564 1.465-3.291 2.562-.785 1.184-.974 2.449-.53 3.563C7.779 34.089 9.391 35 11.401 35c.912 0 1.872-.188 2.777-.55 1.395-.554 2.564-1.465 3.291-2.56.534-.806.791-1.646.762-2.453V13.384l13.244-2.014v13.113c-.763-.503-1.757-.786-2.875-.786-.911 0-1.871.19-2.776.55-1.396.556-2.564 1.464-3.291 2.562-.785 1.183-.973 2.448-.531 3.562.584 1.467 2.194 2.377 4.205 2.377.911 0 1.871-.188 2.776-.55 1.396-.554 2.565-1.464 3.291-2.559.534-.807.79-1.648.763-2.453zm-16.87 3.842c-.552.832-1.463 1.532-2.566 1.972a6.044 6.044 0 0 1-2.2.439c-1.357 0-2.413-.534-2.754-1.395-.248-.623-.113-1.378.381-2.124.553-.832 1.463-1.532 2.566-1.97a6.02 6.02 0 0 1 2.2-.44c1.358 0 2.413.535 2.754 1.394.249.624.113 1.378-.381 2.124zm2.064-19.222V8.703l13.244-2.014v3.103l-13.244 2.014zm12.742 16.97c-.552.834-1.463 1.534-2.565 1.971a6.044 6.044 0 0 1-2.2.439c-1.358 0-2.414-.533-2.755-1.394-.247-.624-.112-1.378.382-2.122.552-.834 1.463-1.534 2.565-1.972a6.007 6.007 0 0 1 2.201-.441c1.356 0 2.412.536 2.755 1.395.248.623.111 1.378-.383 2.124z'
    />
  </svg>
)

const ForwardRef = forwardRef(MusicIcon)
export default ForwardRef