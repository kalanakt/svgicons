import * as React from 'react'
import { SVGProps, Ref, forwardRef } from 'react'

const AttachmentIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' xmlSpace='preserve' ref={ref} {...props}>
    <path d='M33.286 18.322a.747.747 0 0 0-1.033 0L19.512 30.67c-1.263 1.223-2.952 1.905-4.756 1.918h-.054c-1.784 0-3.464-.657-4.732-1.848-1.279-1.202-1.992-2.81-2.006-4.523-.014-1.715.674-3.333 1.935-4.554L23.169 8.8a4.955 4.955 0 0 1 3.438-1.388h.039c1.287 0 2.503.473 3.421 1.336.925.871 1.438 2.03 1.45 3.268a4.507 4.507 0 0 1-1.399 3.288L16.846 28.168a3.048 3.048 0 0 1-2.12.856h-.024a3.072 3.072 0 0 1-2.111-.824 2.77 2.77 0 0 1-.892-2.013 2.77 2.77 0 0 1 .859-2.022l12.63-12.238a.693.693 0 0 0 0-1.003.747.747 0 0 0-1.031 0L11.524 23.165a4.151 4.151 0 0 0-1.287 3.034 4.163 4.163 0 0 0 1.334 3.017 4.55 4.55 0 0 0 3.129 1.221h.036a4.549 4.549 0 0 0 3.146-1.269l13.271-12.867c1.19-1.154 1.839-2.68 1.826-4.296-.013-1.62-.686-3.137-1.894-4.271C29.896 6.615 28.32 6 26.646 6h-.051c-1.691.013-3.277.651-4.463 1.799L8.861 20.663c-1.539 1.493-2.378 3.469-2.361 5.565.017 2.095.886 4.057 2.45 5.527C10.491 33.203 12.533 34 14.701 34h.066c2.192-.017 4.244-.845 5.778-2.33l12.743-12.349a.693.693 0 0 0-.002-.999z' />
  </svg>
)

const ForwardRef = forwardRef(AttachmentIcon)
export default ForwardRef