import React from 'react'
import './inn.css';
import search from '../../components/icon/search.png'
import time from '../../components/icon/time.png'
import plant from '../../components/icon/plant.png'
import thunder from '../../components/icon/thunder.png'
import winter from '../../components/icon/winter.png'
import snows from '../../components/icon/snows.png'
import greek from '../../components/icon/greek.png'
import eiffel from '../../components/icon/eiffel.png'
import clear from '../../components/icon/clear.png'
import happy from '../../components/icon/happy.png'
import globe from '../../components/icon/globe.png'
export default function Abt1() {
  const handlePictureClick = () => {
    
    const currentPosition = window.pageYOffset;
    const targetPosition = 650;
    window.scrollTo({
      top: currentPosition + targetPosition,
      behavior: 'smooth',
    });
  };
  return (
    <>
    <div className="one mx-5">
      Hey! looking for something interesting
      <img src={search}onClick={handlePictureClick} alt="pic" className="vibrating-image" />
    </div>
    <div className='zero' >
    <div className="two">
      <h1>Fun facts</h1>
    </div >
    <div className="mx-3 my-3"style={{ display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap' }}>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">The word ‘summer’ comes from the Old English term ‘somer.’ Somer described the time of the year when summer arrived.<img src={clear}className="vibrating-image" alt="pic" /> </p>
        </div>
      </div>

      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">When there is summer in the north, people in the south enjoy winter and vice versa.<img src={globe} className="vibrating-image"alt="pic" /> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text"> Civilizations like the Greek civilization celebrated the summer solstice as a time of agriculture by worshiping the god Cronus.<img src={greek} className="vibrating-image"alt="pic" /> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">The word ‘season’ has its roots in the Old French word ‘seison.’ ‘Seison’ means sowing or planting.<img src={plant} alt="pic" className="vibrating-image"/> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">The term ‘Dog days of Summer’ has its origins in astronomy. It has a relation to the Dog Star’ Sirius’. This star is a part of a constellation known as the Greater Dog.</p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">The most number of thunderstorms in a year occur during summer. <img src={thunder} className="vibrating-image" alt="pic" /> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text"> Watermelons are one of the most popular food items during the summer months. There are a total of 30 different types of watermelons. </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">In literary works, spring is often used to represent birth, a revival, and the start of happy and better times. <img src={happy} alt="pic" className="vibrating-image"/></p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text"> During the summers, children are likely to gain weight. This phenomenon results from changes in appetite and eating habits and irregular sleeping schedules. </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">When rain reaches freezing point, 32 degrees Fahrenheit, it turns into snow.<img src={snows} alt="pic" className="vibrating-image"/>  </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">Deciduous trees lose their leaves during the winter, while most evergreen trees do not drop their needles – even in the extreme cold. </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">During the winter season, the North Pole has an average temperature of minus 40 degrees Fahrenheit. <img src={winter} alt="pic" className="vibrating-image"/> </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">The heat during the summer season expands the iron of the Eiffel Tower in France. It makes the tower grow a remarkable 6 inches during the summer.<img src={eiffel} alt="pic" className="vibrating-image"/>  </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">You can see your breath when it’s below 45 degrees Fahrenheit. You breathe in oxygen, and your exhale has water vapor, which allows the visual in the cold temperatures. </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">This year’s Daylight Savings Time happens on Sunday, March 12, meaning we’ll “spring forward” one hour that day.<img src={time} alt="pic" className="vibrating-image"/>  </p>
        </div>
      </div>
      <div className="card mx-2 my-2" style={{ width: '18rem' }}>
        <div className="card-body">
          <p className="card-text">The reason why we have spring (and other seasons) is because of the Earth’s tilt. If the Earth was perfectly perpendicular to the sun there would be no change in seasons or hours of daylight. </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
