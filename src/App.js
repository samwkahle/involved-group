
import React, { Component } from 'react';

class App extends Component {

  render() {

  const label = [];
  const artists = [];

  console.log(window.config.label)

  window.config.label.forEach((data) => {
    label.push( <p><a target="_blank" rel="noreferrer" href={data.url}>{data.name}</a></p>)
  })

  window.config.artist.forEach((data) => {
    artists.push( <p><a target="_blank" rel="noreferrer" href={data.url}>{data.name}</a></p>)
  })

    return (
      <div className="App">
      <div id="bg">
        <div className="slant"></div>
        <div className="slant"></div>
        <div className="slant"></div>
        <div className="slant"></div>
      </div>
      <div id="content">
        <div className="group">
          {/* <h1>Involved Group</h1> */}
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="370" height="170" viewBox="160 390 567 170">
            <path d="M167.95,347h27.24v104.57h-27.24v-104.57Z"/>
            <path d="M204.57,375.56h24.17v10.4h.29c4.69-7.76,14.79-12.6,23.87-12.6,25.34,0,27.39,18.45,27.39,29.44v48.77h-24.9v-44.38c0-7.32-2.49-13.33-12.45-13.33-9.37,0-13.47,8.06-13.47,16.26v41.45h-24.9v-76.01Z"/>
            <path d="M334.92,451.57h-28.71l-25.34-76.01h25.92l13.91,50.24h.29l14.06-50.24h25.34l-25.48,76.01Z"/>
            <path d="M396.87,373.36c23.58,0,40.13,17.43,40.13,40.28s-16.55,40.13-40.13,40.13-39.98-17.28-39.98-40.13,16.4-40.28,39.98-40.28Zm0,61.37c11.72,0,15.23-11.28,15.23-21.09s-3.52-21.24-15.23-21.24-15.09,11.57-15.09,21.24,3.52,21.09,15.09,21.09Z"/>
            <path d="M443.3,347h24.9v104.57h-24.9v-104.57Z"/>
            <path d="M528.25,451.57h-28.71l-25.34-76.01h25.92l13.91,50.24h.29l14.06-50.24h25.34l-25.48,76.01Z"/>
            <path d="M574.83,419.65c.44,10.55,6.44,17.28,16.99,17.28,6,0,11.86-2.64,14.21-8.35h23.29c-4.69,17.58-20.8,25.19-37.79,25.19-24.75,0-41.6-14.94-41.6-40.42,0-23.29,18.6-39.98,41.01-39.98,27.24,0,40.86,20.5,39.69,46.28h-55.8Zm30.9-13.91c-.44-8.64-6.44-15.53-14.79-15.53-8.79,0-14.5,6.15-16.11,15.53h30.9Z"/>
            <path d="M714.7,451.57h-23.73v-8.79h-.29c-4.98,7.32-12.01,10.98-20.94,10.98-23.87,0-33.98-20.36-33.98-41.89,0-19.77,10.54-38.52,32.08-38.52,9.23,0,16.55,3.52,21.68,10.4h.29v-36.76h24.9v104.57Zm-54.04-38.81c0,10.4,3.95,21.97,15.23,21.97,12.16,0,14.79-11.57,14.79-21.24,0-10.98-3.95-21.09-14.79-21.09s-15.23,10.69-15.23,20.36Z"/>
            <path d="M264.47,569.56h-17.58l-1.61-11.42c-7.03,10.11-19.77,13.62-29.15,13.62-31.78,0-52.14-24.17-52.14-54.48s20.36-54.48,52.14-54.48c21.68,0,44.96,11.42,47.31,37.79h-27.24c-1.03-8.93-9.52-14.35-20.65-14.35-17.58,0-24.31,15.38-24.31,31.05s6.74,31.05,24.31,31.05c13.47,0,22.41-6.3,24.02-15.82h-19.04v-20.21h43.94v57.27Z"/>
            <path d="M274.44,493.55h24.17v13.33h.29c3.66-9.81,12.16-14.79,22.85-14.79,1.9,0,3.95,.15,5.86,.59v22.7c-3.37-1.03-6.15-1.46-9.52-1.46-12.3,0-18.75,8.49-18.75,18.01v37.64h-24.9v-76.01Z"/>
            <path d="M368.17,491.35c23.58,0,40.13,17.43,40.13,40.28s-16.55,40.13-40.13,40.13-39.98-17.28-39.98-40.13,16.4-40.28,39.98-40.28Zm0,61.37c11.72,0,15.23-11.28,15.23-21.09s-3.52-21.24-15.23-21.24-15.09,11.57-15.09,21.24,3.52,21.09,15.09,21.09Z"/>
            <path d="M489.59,569.56h-24.17v-10.4h-.29c-4.69,7.76-14.35,12.6-23.14,12.6-21.82,0-28.12-12.6-28.12-32.52v-45.7h24.9v44.09c0,10.11,4.25,13.62,12.3,13.62,5.27,0,13.62-3.52,13.62-16.99v-40.72h24.9v76.01Z"/>
            <path d="M498.96,493.55h23.73v8.79h.29c4.98-7.32,12.01-10.98,20.94-10.98,23.87,0,33.98,20.36,33.98,41.89,0,19.77-10.55,38.52-32.08,38.52-9.23,0-16.55-3.52-21.68-10.4h-.29v33.69h-24.9v-101.5Zm24.02,37.2c0,13.33,3.81,21.97,15.09,21.97s14.94-11.57,14.94-21.97c0-9.67-3.66-20.36-14.79-20.36-6.59,0-15.23,4.54-15.23,20.36Z"/>
          </svg>
        </div>
        <div className="group">
          <p><b>Label Management</b></p>
          {label}
        </div>
        <div className="group">
          <p><b>Artist Management</b></p>
          {artists}
        </div>
        <div className="group">
          <p><b><a target="_blank" rel="noreferrer" href={window.config.publishing.url}>Publishing <img src="arrow.png" alt="Publishing" /></a></b></p>
          <br></br><br></br>
          <p><b><a target="_blank" rel="noreferrer" href={window.config.design.url}>Design <img src="arrow.png" alt="Design" /></a></b></p>
        </div>
        <div className="group contact">
          <p><b>Contact</b></p>
          <p><a href="mailto:contact@involved-group.com">contact@involved-group.com</a></p>
          <p>65 Decima St., London, U.K.</p>
        </div>
      </div>
    </div>
    );
  }
}

export default App;


