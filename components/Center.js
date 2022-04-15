import React from 'react'
import Typewriter from 'typewriter-effect';
import { Wrapper } from './Center.Styles';
function Center() {
  return (
    <div>
      <Wrapper>
        <div className="center-container">
          <div className="center-text">
            <h1>
              <Typewriter 
                options={{ 
                    wrapperClassName: "main-text" }}
                onInit={(typewriter) => {
                  typewriter.typeString('Hey,')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .start();
                }} />
            </h1>
            <h1>
              <Typewriter 
               options={{  wrapperClassName: "main-text", cursorClassName: "cursor" }}
                onInit={(typewriter) => {
                  typewriter.typeString('This is Para')
                    .callFunction(() => {
                      console.log('String typed out!');
                    })
                    .pauseFor(3500)
                    .start();
                }} />
            </h1>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Center