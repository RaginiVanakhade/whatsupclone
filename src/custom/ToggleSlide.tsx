import React from 'react'

const ToggleSlide = ({
  title= "",
  width = "100%",
  height = "500%",
  bgColor = "#f87171",
}) => {
  return (
    <div style={{ width, height, backgroundColor: bgColor }} className='w-full h-full'>{title}</div>
  )
}

export default ToggleSlide