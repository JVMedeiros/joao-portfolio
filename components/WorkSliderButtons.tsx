"use client";

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { useSwiper } from 'swiper/react';

interface WorkSliderButtonsProps {
  containerStyles: string 
  buttonStyles: string 
  iconStyles: string
}

export function WorkSliderButtons({containerStyles, buttonStyles, iconStyles}: WorkSliderButtonsProps) {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button className={buttonStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  )
}