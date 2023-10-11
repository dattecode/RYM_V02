import React from 'react'
import "../styles/aloneCss.css"
import imgBg from "../img/bgAlone.png"

const Alone = () => {

  return (

    <div className='alone'>
      <img src={imgBg} className='aloneImg' />
      <h2 className='infoAlone'>This dimension is empty</h2>
    </div>
  )
}

export default Alone