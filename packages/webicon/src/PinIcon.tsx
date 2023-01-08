import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const PinIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M25.033 14.427v-5.28a4.565 4.565 0 0 0 3.324-4.388.76.76 0 0 0-.76-.76H12.402a.76.76 0 0 0-.76.76 4.568 4.568 0 0 0 3.324 4.388v5.28a4.566 4.566 0 0 0-3.324 4.389v1.899c0 .419.34.759.76.759h5.01c.125 3.184.419 6.59.821 9.459.186 1.328.384 2.461.572 3.277.204.88.413 1.79 1.195 1.79.781 0 .991-.91 1.195-1.789.188-.816.386-1.949.572-3.277.402-2.869.697-6.275.822-9.459h5.008c.42 0 .76-.34.76-.759v-1.899a4.565 4.565 0 0 0-3.324-4.39zM20 32.434c-.412-2.4-.888-6.395-1.068-10.959h2.137c-.178 4.564-.655 8.558-1.069 10.959zm6.838-12.478H13.163v-1.14a3.041 3.041 0 0 1 2.659-3.015.76.76 0 0 0 .665-.754v-6.52a.758.758 0 0 0-.665-.753 3.04 3.04 0 0 1-2.563-2.254h13.482a3.039 3.039 0 0 1-2.561 2.254.76.76 0 0 0-.667.753v6.521c0 .383.287.707.667.754a3.038 3.038 0 0 1 2.657 3.015v1.139z' />
  </svg>
)

const ForwardRef = forwardRef(PinIcon)
export default ForwardRef
