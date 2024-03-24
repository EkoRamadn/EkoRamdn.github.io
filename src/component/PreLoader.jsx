import React from 'react'
import './preloader.css'
import { useEffect } from 'react'
import {preLoaderAnim} from './../animations/index.jsx'

function PreLoader() {

  useEffect(()=>{
    preLoaderAnim()
  },[])

  return(
    <>
  
      <div className="preloader">
        <div className="texts-container">
          <span>Developer Web</span><span>Creator</span><span>Design</span>
        </div>
      </div>
    </>
  )
}

export default PreLoader