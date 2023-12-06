import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import React from 'react'
import '../components2/styles.css';
import SwiperCore from 'swiper';
import img1 from '../components/pic/1.jpg'
import img2 from '../components/pic/2.jpg'
import img4 from '../components/pic/4.jpg'
import img3 from '../components/pic/3.jpg'
import img7 from '../components/pic/7.jpg'
import img8 from '../components/pic/8.jpg'
import img9 from '../components/pic/9.jpg'
import img10 from '../components/pic/10.jpg'
import Modal from 'react-modal';
import { useState } from 'react';
SwiperCore.use([Autoplay]);

export default function Slide() {
  const [isOpen, setIsOpen] = useState(0);
  const [text,settext]=useState('');
  const [wth,setwth]=useState('');
  const handleImageClick = (value) => {
    if(value===1)
    {
      settext('Winter, a season of enchanting beauty and captivating serenity, brings forth a magical transformation in the natural world. As the days grow shorter and temperatures plummet, landscapes undergo draped in a shimmering cloak of snow and ice.')
      setwth('Winter')
    }
    else if(value===2)
    {
      settext(' It is that magical time of the year when the sun warm embrace kisses our skin, and the world seems to come alive with vibrant colors and laughter. As the days get longer and the nights grow balmy, there is an unmistakable sense of freedom in the air.');
      setwth('Summer');
    }
    else if(value===3)
    {
      settext('the enchanting season that wraps the world in a breathtaking tapestry of colors. As the warm, golden days of summer gradually give way to the crisp and cool embrace of fall, theren is an undeniable sense of transformation in the air.');
      setwth('Autumn');
    }
    else 
    {
      setwth('Spring');
      settext(' The season that brings warmth to our hearts and smiles to our faces. It is like a gentle whisper of hope after the long, cold slumber of winter. As the days grow longer, I feel a renewed sense of energy and vitality coursing through my veins.');
    }
    if(isOpen===value)
    {
      setIsOpen(0);
    }
    else{
      setIsOpen(value);
    }
  };

  const closeModal = () => {
    setIsOpen(0);
  };
  return (
    <div >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          loop:true,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        autoplay={{ delay: 2000 }} 
        speed={3500}
      >
        
        <SwiperSlide>
          <img onClick={() => handleImageClick(1)}  src={img2}alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(1)} src={img7}alt="error"  />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(2)}src={img1} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} onClick={() => handleImageClick(2)}alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(3)}src={img3}alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(3)}src={img9} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(4)}src={img4} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={() => handleImageClick(4)}src={img10} alt="error" />
        </SwiperSlide>
      </Swiper>
      <Modal ariaHideApp={false} style={{ content: {
            maxWidth: '600px',
            position:'relative',
            top:'60%',
            margin: 'auto',
            padding: '20px',
            backgroundColor: 'rgb(243 235 255)', 
            boxShadow:'0 1.5rem 3rem grey'
          }}}isOpen={!(isOpen===0)} onRequestClose={closeModal}>
        <h1>{wth}</h1>
        <button className="btn btn-primary"onClick={closeModal}>Close</button>
        <p>{text} </p>
      </Modal>
    </div>
    
  )
}
