import React from 'react'
import Slide from './Slide';
import Abt1 from './inner/Abt1';
export default function Abt(props) {
  const a=props.mode;
  return (
    <>
    <div style={{background:a,height:'100vh',
    width:'100vw'}}>
      <Slide/>
      <Abt1/>
    </div>
    <div>
    </div>
    </>
  )
}
