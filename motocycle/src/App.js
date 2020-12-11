import React, { useEffect, useState } from 'react';
import Tweenful, { elastic } from '../node_modules/react-tweenful';
import Observer from './Observer';
import styled from 'styled-components';
import ves from `./images/ves.jpg`;
import Login from './login';

const Side = styled.div`
  float: left;
`

function App (){
 
  const [shouldRender, setShouldRender] = useState(true);
  useEffect(() => {
    setTimeout(() => setShouldRender(false), 3000);
  }, []);

  const props = {
    delay: 1000,
    render: true,
    duration: 1600,
    easing: elastic(2, 0.1),
    loop: false,
    animate: { translateX: '400px' }
  };

  
  return (
    <Observer>
      <Side>
        <Tweenful.div {...props}>
         <img src="ves.jpg"></img>
        </Tweenful.div>
      </Side>
    </Observer>
    <Login/>

  );
}

export default App;
