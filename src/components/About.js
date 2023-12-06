import React from 'react'

export default function About(props) {
  let myStyle={
    color:props.mode==='white'?'black':'white',
    backgroundColor:props.mode==='white'?'white':'black',
    border:'1px solid',
    boarderColor:'black',
    
  }
  
  return (
    <div style={{background:props.mode,height:'100vh',
    width:'100vw'}}>
      <h1 className='mx-4'>About us</h1>
      <div className="accordion my-3" id="accordionExample"style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button style={myStyle}className="accordion-button" type="button"data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        WeatherRpt
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This site help you find the temperature of the city you want if it is found in the data base.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle}className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Function
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        used to tell the temp of different city
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Us
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        you can contact us on our phone no:9999999999 for more information visit www.nbwork.com
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
