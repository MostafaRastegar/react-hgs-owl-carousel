import React from 'react';
import ReactDOM from 'react-dom';
import './mrOwl.css';
import mrOwl from './mrOwl';


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
    },
  };

  const { Slider, next, prev } = mrOwl(config);

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
      <button onClick={() => next(1000)} className="customNextBtn salam">custom next</button>
      <button onClick={() => prev(1000)} className="customNextBtn salam">custon prev</button>
    </div>
  )
}

ReactDOM.render(<MainSlider />, document.getElementById('root'));
