import Confetti from 'react-confetti';
import {useEffect, useState} from 'react';

const ConfettiWrap = () => {
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
  const detectSize = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight})
  }
  
  useEffect(()=> {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowSize])

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      tweenDuration={1000}
     
    />
  )
  }

export default ConfettiWrap;