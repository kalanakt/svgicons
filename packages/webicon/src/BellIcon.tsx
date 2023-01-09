import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const BellIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <title>{'bell'}</title>
    <path d='M29.531 25.471a11.549 11.549 0 0 1-3.781-8.466V17c0-8.295-4.532-12.307-9-12.71V2a.75.75 0 0 0-1.5 0v2.29c-4.469.403-9 4.415-9 12.71a11.706 11.706 0 0 1-3.771 8.462l-.008.007A.75.75 0 0 0 3 26.751h8.327c.366 2.28 2.319 4 4.674 4s4.308-1.72 4.671-3.973l.004-.027h8.327a.75.75 0 0 0 .531-1.28zM16 29.25a3.25 3.25 0 0 1-3.149-2.478l-.005-.022h6.308A3.255 3.255 0 0 1 16 29.25zm-11.306-4a12.681 12.681 0 0 0 3.056-8.248V17c0-7.729 4.276-11.25 8.25-11.25a7.294 7.294 0 0 1 5.604 2.72l.011.014a12.933 12.933 0 0 1 2.633 8.537l.001-.031v.072c0 3.14 1.158 6.009 3.07 8.204l-.013-.015z' />
  </svg>
)

const ForwardRef = forwardRef(BellIcon)
export default ForwardRef
