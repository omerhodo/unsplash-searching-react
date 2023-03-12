import React from 'react'
import './style.scss'

const ImageItem = ({ image }) => {
  return (
    <div className='imageItem'>
      <img className='imageItem--item' src={image.urls.small} alt={image.alt_description} />
      <hr />
      <span className='imageItem--title'>{ image.alt_description }</span>
    </div>
  )
}

export default ImageItem