import React from 'react'
import ImageItem from '../ImageItem'

const ImageList = ({ imagesPlaceholder }) => {
  return (
    <div>
      {
        imagesPlaceholder.map((image, index) => {
          return <ImageItem image={image} key={index} />;
        })
      }
    </div>
  )
}

export default ImageList;
