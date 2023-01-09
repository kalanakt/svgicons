import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const AtIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M20.01 5.5C12.008 5.5 5.5 12.005 5.5 20c0 7.997 6.508 14.5 14.51 14.5 2.701 0 5.34-.75 7.633-2.166a.904.904 0 0 0 .408-.568.918.918 0 0 0-.894-1.127.91.91 0 0 0-.477.138 12.656 12.656 0 0 1-6.67 1.895c-6.99 0-12.677-5.687-12.677-12.67 0-6.984 5.687-12.667 12.677-12.667a12.674 12.674 0 0 1 12.619 11.444c.047.494.152 2.249-.475 4.098-.588 1.732-2.268 2.978-3.943 2.903-1.047-.038-1.807-.407-2.326-1.126-1.666-2.338-.511-7.771.074-9.666a.914.914 0 0 0-.571-1.134c-.199-.069-2.062-.694-4.348-.694-1.554 0-2.929.292-4.088.863-1.801.888-3.064 2.42-3.755 4.554-.87 2.684-.403 5.274 1.249 6.928a5.19 5.19 0 0 0 3.696 1.537c.549 0 1.096-.086 1.624-.258 1.015-.323 1.929-.933 2.718-1.811l.923-1.025.649 1.216c.101.189.213.371.332.54.846 1.189 2.148 1.846 3.767 1.904.063.002.124.002.186.002 2.401 0 4.737-1.742 5.552-4.148.723-2.141.635-4.112.563-4.858a14.506 14.506 0 0 0-2.396-6.688A14.52 14.52 0 0 0 20.01 5.5zm-1.871 19.714a3.365 3.365 0 0 1-2.397-1.003c-1.173-1.176-1.466-3.023-.804-5.069.538-1.658 1.456-2.794 2.808-3.473.922-.459 2.026-.69 3.285-.69.688 0 1.834.153 1.883.158l.981.133-.156.979c-.013.078-.317 1.959-.844 4.058-.604 2.413-1.983 4.186-3.69 4.737-.352.113-.71.17-1.066.17z' />
  </svg>
)

const ForwardRef = forwardRef(AtIcon)
export default ForwardRef