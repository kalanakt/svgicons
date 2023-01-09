import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const PerformanceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <g fill='#010101'>
      <path d='M20 24.956a2.2 2.2 0 0 1-2.193-2.351l-7.476-3.081a.702.702 0 0 1-.38-.915.695.695 0 0 1 .913-.38l7.478 3.083A2.226 2.226 0 0 1 20 20.559a.7.7 0 0 1 0 1.397.804.804 0 0 0-.708.427.674.674 0 0 1-.076.184c-.007.04-.018.119-.018.191a.801.801 0 0 0 1.603 0 .7.7 0 0 1 1.398 0A2.2 2.2 0 0 1 20 24.956z' />
      <path d='M32.961 31.957a.705.705 0 0 1-.687-.557.687.687 0 0 1 .103-.527 15.11 15.11 0 0 0 1.015-1.812l-1.187-.489a.698.698 0 0 1-.377-.917.691.691 0 0 1 .646-.431.71.71 0 0 1 .265.052l1.189.493c.499-1.388.786-2.838.854-4.313H33.5a.699.699 0 0 1 0-1.397h1.283a14.672 14.672 0 0 0-.852-4.314l-1.19.493a.696.696 0 0 1-.915-.379.699.699 0 0 1 .379-.914l1.193-.495a14.805 14.805 0 0 0-2.451-3.65l-.907.906a.69.69 0 0 1-.493.204.694.694 0 0 1-.7-.699c0-.187.073-.363.206-.495l.906-.906a14.84 14.84 0 0 0-3.651-2.449l-.494 1.193a.698.698 0 0 1-.914.379.694.694 0 0 1-.38-.38.708.708 0 0 1-.001-.535l.495-1.192a14.786 14.786 0 0 0-4.314-.85v1.283a.699.699 0 0 1-1.397 0V7.975a14.69 14.69 0 0 0-4.315.85l.496 1.192a.706.706 0 0 1-.382.915.725.725 0 0 1-.268.051.698.698 0 0 1-.645-.428l-.496-1.195a14.785 14.785 0 0 0-3.651 2.449l.907.908a.694.694 0 0 1 0 .988.688.688 0 0 1-.495.204.688.688 0 0 1-.495-.204l-.908-.906a14.767 14.767 0 0 0-2.448 3.65l1.192.494a.69.69 0 0 1 .378.378.69.69 0 0 1 0 .537.695.695 0 0 1-.917.377l-1.189-.492a14.755 14.755 0 0 0-.851 4.315H6.5a.7.7 0 1 1 0 1.397H5.216c.069 1.48.357 2.93.856 4.313l1.187-.493a.698.698 0 0 1 .915.915.697.697 0 0 1-.378.38l-1.187.49c.294.623.636 1.232 1.017 1.813a.69.69 0 0 1 .1.525.693.693 0 0 1-.301.442.698.698 0 0 1-.969-.201A16.112 16.112 0 0 1 3.8 22.758a16.09 16.09 0 0 1 4.745-11.455A16.09 16.09 0 0 1 20 6.559c4.33 0 8.398 1.685 11.455 4.744a16.09 16.09 0 0 1 4.744 11.455c0 3.169-.917 6.24-2.653 8.883a.698.698 0 0 1-.585.316z' />
      <path d='M15.494 33.441a1.7 1.7 0 0 1-1.699-1.698v-1.998a1.7 1.7 0 0 1 1.699-1.699h8.994a1.7 1.7 0 0 1 1.698 1.699v1.998a1.7 1.7 0 0 1-1.698 1.698h-8.994zm0-3.997a.301.301 0 0 0-.301.301v1.998c0 .166.135.301.301.301h8.994a.301.301 0 0 0 .301-.301v-1.998a.301.301 0 0 0-.301-.301h-8.994z' />
      <path d='M19.491 31.442a.699.699 0 1 1 0-1.397h1a.699.699 0 0 1 0 1.397h-1zM16.992 31.442a.699.699 0 1 1 0-1.397h1a.7.7 0 0 1 0 1.397h-1zM21.99 31.442a.699.699 0 1 1 0-1.397h.999a.7.7 0 0 1 0 1.397h-.999z' />
    </g>
  </svg>
)

const ForwardRef = forwardRef(PerformanceIcon)
export default ForwardRef