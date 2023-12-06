import React, { useEffect } from 'react';
import "./css/style.css";
import { useState } from 'react';
import cld from '../components/icon/cld.png';
import clear from'../components/icon/clear.png';
import haze from '../components/icon/haze.png'
import drizzle from '../components/icon/drizzle.png'
import snow from '../components/icon/snow.png'
import rain from '../components/icon/rain.png'
import windy from '../components/icon/windy.png'
const Tempapp=() =>{
    const[city,setCity]=useState(null);
    const[wth,setwth]=useState('');
    const[image,setimage]=useState(cld);
    const[search,setSearch]=useState("dehradun");
    useEffect(()=>{
        const fetchApi=async()=>{
           const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cc38e5156fd425c4637acce00d78f5af&units=metric`;
           const response=await fetch(url);
           const resJson= await response.json();
           setCity(resJson.main);
           if(resJson.main!==undefined)
           {
            setwth(resJson.weather[0].main);
              if(resJson.weather[0].main==="Clear")
              {
                setimage(clear);
              }
              else if(resJson.weather[0].main==="Rain")
              {
                setimage(rain);
              }
              else if(resJson.weather[0].main==="Drizzle")
              {
                setimage(drizzle);
              }
              else if(resJson.weather[0].main==="Snow")
              {
                setimage(snow);
              }
              else if(resJson.weather[0].main==="Windy")
              {
                setimage(windy);
              }
              else if(resJson.weather[0].main==="Haze")
              {
                setimage(haze);
              }
              else{
                setimage(cld);
              }
           }
        }
        fetchApi();
    },[search] )
  return (
    <>
      <div className="box" >
        <div className='inputData'>
            <input type="search" className='inputFeild'onChange={(event)=>{
                setSearch(event.target.value);
            }}/>
        </div>
      {!city ?(
        <div className='temp2'>
          <p><i className="fas fa-street-view"></i>{search}</p>
        <p >Unable to Load</p>
        </div>
      ):(
        <>
      <div className='info'>
      
        <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>
        
        <img src={image} alt="error"/>
        <h2 className='temp'>{city.temp}°Cel</h2>
        <h3 className='tempmin_max'>{wth}</h3>
        <h3 className='tempmin_max'>Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel</h3>
        <h3 className='tempmin_max'>Humidity:{city.humidity} | Pressure:{city.pressure}</h3>
      </div>
      <div className="wave -one"></div>
      <div className='wave -two'></div>
      <div className='wave -three'></div>
      </>)}
      </div>
    </>
  )
}
export default Tempapp;