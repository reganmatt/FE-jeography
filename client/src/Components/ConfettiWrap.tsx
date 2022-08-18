import Confetti from 'react-confetti';
import {useEffect, useState} from 'react';

const ConfettiWrap = () => {
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
  

  const showAnimation = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight})
  }
  
  useEffect(()=> {
    window.addEventListener('resize', showAnimation)
    return () => {
      window.removeEventListener('resize', showAnimation)
    }
  }, [windowSize])

  return (
    <>
      <Confetti 
      width={windowSize.width}
      height={windowSize.height}
      />
    </>  
  )
}

export default ConfettiWrap;