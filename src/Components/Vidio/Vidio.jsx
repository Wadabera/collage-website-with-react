import React, { useRef } from 'react'
import './Vidio.css'
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4'


function Vidio({playState, setplayState}) {
  const play = useRef(null);
  const closePlayer = (e) => {
    if (e.target === play.current) {
      setplayState(false);
    }
  }

  return (
    <div className={`vidio ${playState? '':'hide'}`} ref={play} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Vidio
