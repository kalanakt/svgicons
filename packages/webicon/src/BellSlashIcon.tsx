import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const BellSlashIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' ref={ref} {...props}>
    <title>{'bell-slash'}</title>
    <path d='M21 25.25H4.694a12.681 12.681 0 0 0 3.056-8.248v-.112c0-1.317.149-2.6.43-3.832l-.022.115a.751.751 0 0 0-1.461-.342l-.001.005a18.218 18.218 0 0 0-.445 4.055v.114-.006a11.706 11.706 0 0 1-3.771 8.462l-.008.007a.75.75 0 0 0 .529 1.282h8.327c.366 2.28 2.319 4 4.674 4s4.308-1.72 4.671-3.973l.004-.027h.326a.75.75 0 0 0 0-1.5zm-5 4a3.25 3.25 0 0 1-3.149-2.478l-.005-.022h6.308A3.255 3.255 0 0 1 16 29.25zm14.531.219-2.719-2.719H29.001a.75.75 0 0 0 .531-1.28 11.549 11.549 0 0 1-3.781-8.466v-.005c0-7.527-3.799-11.341-7.354-12.399a8.076 8.076 0 0 0-1.615-.301l-.031-.002V2a.75.75 0 0 0-1.5 0v2.3a8.989 8.989 0 0 0-6.269 3.58l-.017.024L2.531 1.47a.75.75 0 0 0-1.06 1.061L29.47 30.532a.75.75 0 1 0 1.062-1.062zM17.968 6.038c3.036.904 6.282 4.259 6.282 10.951v.072a12.45 12.45 0 0 0 3.07 8.204l-.013-.015h-.994L10.032 8.97c1.319-1.939 3.515-3.195 6.004-3.195.688 0 1.353.096 1.984.275l-.051-.012z' />
  </svg>
)

const ForwardRef = forwardRef(BellSlashIcon)
export default ForwardRef