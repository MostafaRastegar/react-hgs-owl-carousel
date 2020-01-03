import React, { useEffect } from 'react';
import $ from "jquery";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

function App(props) {
  const {
    id = 'demo',
    options = null,
  } = props;

  const owl = (id) => $(`#${id}`);

  useEffect(() => {
    owl(id).owlCarousel(options);
  }, [id, options]);

  const next = (speed) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    if (typeof speed === 'number') {
      owl(id).trigger('next.owl.carousel', [speed]);
    }
    else {
      owl(id).trigger('next.owl.carousel', speed);
    }
  }

  const prev = (speed) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof speed === 'number') {
      owl(id).trigger('prev.owl.carousel', [speed]);
    }
    else {
      owl(id).trigger('prev.owl.carousel', speed);
    }
  }

  const to = (position, speed) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof position === 'number' && typeof speed === 'number') {
      owl(id).trigger('to.owl.carousel', [position, speed]);
    }
    else {
      owl(id).trigger('to.owl.carousel');
    }
  }

  const destroy = () => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    owl(id).trigger('destroy.owl.carousel');
  }

  const play = (timeout, speed) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof timeout === 'number' && typeof speed === 'number') {
      owl(id).trigger('play.owl.autoplay', [timeout, speed]);
    }
    else {
      owl(id).trigger('play.owl.autoplay');
    }
  }

  const stop = () => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    owl(id).trigger('stop.owl.autoplay');
  }

  const Slider = (props) => {
    const {
      className = 'owl-carousel owl-theme',
    } = props;
    return <div className="App">
      <div id={id} className={className}>
        {props.children}
      </div>
    </div>
  }

  return {
    Slider,
    next,
    prev,
    to,
    destroy,
    play,
    stop
  };
}

export default App;