import React from 'react';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

export default function Star(stars) {
    const ratingStar = Array.from({length:5},(_,index) => {
        const number = index + 0.5;
        return <span key={index} className="h-5 w-5">
            {stars >=index + 1 ? <FaStar/> : stars >= number ? <FaStarHalfAlt/> : <AiOutlineStar/>}
        </span>
    })
  return (
    <div className="flex">
        {ratingStar}
    </div>
  )
}
