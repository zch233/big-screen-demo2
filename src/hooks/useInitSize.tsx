import React, { ReactChild, useRef } from 'react';
import { useEffect } from 'react';

const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight
export const appWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth
export const appHeight = appWidth / ( 16/ 9)

export const useInitSize = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.documentElement.style.fontSize = appWidth / 100 +  'px'
    contentRef.current!.style.width = appWidth + 'px'
    contentRef.current!.style.height = appHeight + 'px'
    contentRef.current!.style.marginTop = (clientHeight - appHeight) / 2 + 'px'
  })
  return (props: {children: ReactChild}) => <div className={ 'contentWrapper' } ref={contentRef}>{props.children}</div>
}