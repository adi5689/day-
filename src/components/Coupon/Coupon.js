import React, { useState } from 'react';
import './coupon.css';

const Coupon = ({couponContent}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCouponClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`coupon-wrapper ${isFlipped ? 'flipped' : ''}`} onClick={handleCouponClick}>
      <div className={`coupon-mockup ${isFlipped ? 'flipped' : ''}`}>
        <div className='coupon-mockup-screen'>
          <div className={`coupon-display ${isFlipped ? 'flipped' : ''}`}>
            {isFlipped ? (
              <div className='coupon-back'>
                <h1>{couponContent.title}</h1>
                <p>{couponContent.description}</p>
                <p>Coupon Code - {couponContent.code}</p>
                {/* Add back-face content here */}
              </div>
            ) : (
              <div className='coupon-front'>
                <h1>{couponContent.frontTitle}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
