import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/common/Header';
import FeelSpecial from '../components/FeelSpecial';
// import CredSecurity from '../components/CredSecurity';
import WindowPeak from '../components/WindowPeak';
import MobileScroll from '../components/MobileScroll';
import CredStory from '../components/CredStory';
import AppRating from '../components/AppRating';
import Footer from '../components/common/Footer';
import MuzicPlayer from '../components/Player';
import WindowPeak2 from '../components/WindowPeak2';
import WindowPeak3 from '../components/WindowPeak3';
// import VidPlayer2 from '../components/VidPlayer2';
// import VidPlayer from '../components/VidPlayer';


const homePage = () => {
  return (
    <>
      <Header />
      <MuzicPlayer />
      <WindowPeak2 />
      <HeroSection />
      <FeelSpecial />
      <MobileScroll />
      <WindowPeak /> 
      <CredStory />
      // <VidPlayer2 />
      <WindowPeak3 /> 
      <AppRating />
      <Footer />
    </>
  )
}

export default homePage;
