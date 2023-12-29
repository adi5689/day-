import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "Sher apne Sherni ke sath!☠️",
    desc: "Don't you ever think that you have to deal with anything alone, whatever the scenario maybe, I'm always gonna stand by you, no matter what.",
    mobile_image: "https://i.imgur.com/Q7mpaEQ.jpg",
  },
  {
    heading: "Mard apne pasandida aurat ke liye seflie pe smile karte hue!👀",
    desc: "You make me happy, but beyond that you make me laugh and thats something I don't feel like doing with others. So basically you are my 'MUSKAN'.",
    mobile_image: "https://i.imgur.com/vceqCF0.jpg",
  },
  {
    heading:
      "Hum soche the kahan ek mature ladki mili hai humko, par sala ye toh total bakchod nikli!😳",
    desc: "You know na what really drew me towards you was that we were at the same level when it came to bakchodi. Just know, no matter what, 'bakchodi chalti rehni chahiye!'",
    mobile_image: "https://i.imgur.com/6H95jzj.jpg",
  },
  {
    heading:
      "Sherni ke paas wo talent hai ki, Casual sher ko bhi serious karke 'joru ka gulaam' bana sakti hai!😶‍🌫️",
    desc: "The day I went on my knees for the first time in front of you, never even knew that its gonna end up like this!",
    mobile_image: "https://i.imgur.com/OP86N83.jpg",
  },
  {
    heading: "Sher apne sherni se pitte hue, kyu pata nhi BC.🫨",
    desc: "Yeah I know sometimes I drive you crazy, but that what my duty is, so now you gotta deal with it!",
    mobile_image: "https://i.imgur.com/0zekM9o.jpg",
  },
  {
    heading: "Sher apne sherni ka naam apne dil pe likwa chuka hai!🫡",
    desc: "I don't know if you know this or not, but I'm the kind of guy who can live alone, without the need for any one. and yeah I can live without you too, but honestly if I say, Damn I love you more.",
    mobile_image: "https://i.imgur.com/3eHtjjL.jpg",
  },
  {
    heading: "Yahan Sher apne sherni pe pehli baar dekhte hue.😍",
    desc: "You know right what really happened on the day of the trip, nothing. but see where we are now! cheer's to that.",
    mobile_image: "https://i.imgur.com/z2OyNcP.jpg",
  },
  {
    heading: "Sher ne apni sherni ko bhi bigaad diya hai.😜",
    desc: "Even though you may not accept it, but you've become naughty coz of me and I'm proud of it.",
    mobile_image: "https://i.imgur.com/uvw9EGY.jpg",
  }, 
  {
    heading: "All I wanna say is babe,🧿",
    desc: "'Hum to the ek banjara aashiq ghalib, jo apne gum ke nashe me tar-batar bhatak ta rehta.Hum to the ek banjara aashiq ghalib, jo apne gum ke nashe me tar-batar bhatak ta rehta.Par bhatak te bhatak te ek roz jo unke nashili nazron se nazrein mili,Kuch aisi dastan hui ghalib, Ke hum to apne saare gum bhula baithe, Aur ek unhe hum apna ghar bana baithe!💓'",
    mobile_image: "https://i.postimg.cc/8cJF3cWF/Whats-App-Image-2023-12-27-at-19-17-08-f3ae19fc.jpg",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
return (
  <div className="max-width flex mobile-scroll">
      <div className="scroll-full-screen-wrapper">
          {scrollData.map((screen, i) => (
              <div className="scroll-full-screen max-width">
                  <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg}/>
              </div>
          ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
              <div className="mobile-mockup">
                  <div className="mobile-mockup-screen flex absolute-center">
                      <img 
                          src={scrollData[currentImg].mobile_image}
                          alt=""
                          className="mobile-screen-img slide-left" 
                          key={scrollData[currentImg].mobile_image}  
                      />
                  </div>
              </div>
      </div>
  </div>
)
};

export default MobileScroll;
