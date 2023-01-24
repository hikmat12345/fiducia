import React from 'react';
import './index.scss';
import CTSliderCard from './CTSliderCard';
import { getFileSrcFromPublicFolder } from '../../../utils';
import {MdChevronLeft, MdChevronRight } from "react-icons/md";


function ChooseTrainerCard() {
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollRight = slider.scrollLeft - 600;
      };

      const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 600;
      };
  return (
    <>
        <div className='w-full shadow-lg bg-white text-darkgray rounded-lg mt-4 p-4'>
            <h4>Choose Trainer</h4>
            <div className='flex flex-row '>
                <div className='mt-auto mb-auto'>
                      <MdChevronLeft
                        size={40}
                        className="slider-icon-left left cursor-pointer"
                        onClick={slideLeft}
                        />
                </div>
                <div className='flex w-3/3 gap-3 px-3 overflow-hidden slider' id="slider">
                    <CTSliderCard src = {getFileSrcFromPublicFolder("SLIM-S~2.PNG")} name = 'Walaa Waly'/>
                    <CTSliderCard src = {getFileSrcFromPublicFolder("Claire-Barnett@2x.PNG")} name = 'Ghada Osman'/>
                    <CTSliderCard src = {getFileSrcFromPublicFolder("SLIM-S~2.PNG")} name = 'Mo. Ahmed'/>
                </div>
                <div className='mt-auto mb-auto ml-auto hidden'>
                <MdChevronRight
                    size={40}
                    className="slider-icon-right right"
                    onClick={slideRight}
                />
                </div>
            </div>
        </div>
    </>
  )
}

export default ChooseTrainerCard
