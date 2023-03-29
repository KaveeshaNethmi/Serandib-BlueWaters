import React from 'react'
import "./MainTitle.scss"

const MainTitle = ({mainTitle, subTitle}) => {
  return (
    <div className='title-box'>
      <h1 className='main-title'>{mainTitle}</h1>
      <h1 className='sub-title'>{subTitle}</h1>
    </div>
  )
}

export default MainTitle
