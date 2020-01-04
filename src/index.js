import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './mrOwl.css';
import mrOwl from './components';


const MainSlider = () => {

  const config = {
    id: 'demo',
    options: {
      loop: true,
      margin: 10,
      nav: true,
      rtl: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      },
      onDragged: () => console.log('onDragged'),
      onInitialize: () => console.log('initialize'),
      onInitialized: () => console.log('initialized'),
      onResize: () => console.log('onResize'),
      onTranslate: () => console.log('onTranslate'),
      onTranslated: () => console.log('onTranslated'),
    },
  };

  const { Slider, next, prev, changed,refresh,remove, add} = mrOwl(config);

  useEffect(()=>{
    changed((e)=> console.log(e.item.index))
  },[changed])

  return (
    <div>
      <Slider>
        <div className="item"><h4>1</h4></div>
        <div className="item"><h4>2</h4></div>
        <div className="item"><h4>3</h4></div>
        <div className="item"><h4>4</h4></div>
        <div className="item"><h4>5</h4></div>
        <div className="item"><h4>6</h4></div>
        <div className="item"><h4>7</h4></div>
        <div className="item"><h4>8</h4></div>
        <div className="item"><h4>9</h4></div>
        <div className="item"><h4>10</h4></div>
        <div className="item"><h4>11</h4></div>
        <div className="item"><h4>12</h4></div>
      </Slider>
      <button onClick={() =>{add('<div class="item"><h4>222</h4></div>',1)}} className="customNextBtn">custom next</button>
      <button onClick={() => prev(1000)} className="customNextBtn salam">custon prev</button>
    </div>
  )
}

ReactDOM.render(<MainSlider />, document.getElementById('root'));
