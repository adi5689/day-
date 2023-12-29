import React from 'react';
import './appRating.css';


const AppRating = () => {
  return (
    <div className='rating-container'> 
        <div className='flex app-rating'>
        <div className='rating-block flex flex-col'>
            <div className='flex'>
                {/* <div className='rating-value flex flex-col'>4.8
                </div> */}
                <div className='rating-platform non-mobile'>
                You got a surprise!
                </div>
            </div>
            <div className='non-mobile'>
            <div className="home-btn3">
              <a href="/coupons">Click me</a>
            </div>
            </div>
        </div>
        <div className='rating-block flex flex-col'>
            <div className='flex'>
                {/* <div className='rating-value flex flex-col'>4.7
                </div> */}
                <div className='rating-platform non-mobile'>
                    You got a surprise!
                </div>
            </div>
            <div className='non-mobile'>
            <div className="home-btn3">
              <a href="/playlist">Click me</a>
            </div>
            </div>
        </div>
        <div className='rating-block flex flex-col'>
            <div className='flex'>
                {/* <div className='rating-value flex flex-col'>4.7
                </div> */}
                <div className='rating-platform'>
                    You got a surprise!
                </div>
            </div>
            <div className='non-mobile'>
            <div className="home-btn3">
              <a href="/vid">Click me</a>
            </div>
            </div>
        </div>
        
        <div className='only-mobile rating-mobile-button'>
        <div className="home-btn3">
              <a href="/coupons">Click me</a>
            </div>
            <div className="home-btn3">
              <a href="/playlist">Click me</a>
            </div>
            <div className="home-btn3">
              <a href="/vid">Click me</a>
            </div>
        </div>
        </div>
        <div className='banner'>
            <div className='banner-text'>
                Once again,<br /> Happy Birthday Baccha!💕
            </div>
        </div>
    </div>
  )
}

export default AppRating;