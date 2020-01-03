import React, { useEffect } from 'react';
import $ from "jquery";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

function MrOwl(props) {
  const {
    id = 'demo',
    options = null,
  } = props;

  const owl = (id) => $(`#${id}`);
  let owlContainer = null;
  
  useEffect(() => {
    owlContainer = owl(id).owlCarousel(options);
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

  const changed = (func) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    if (owlContainer !== null) {
      owlContainer.on('changed.owl.carousel', func);
    }
  }

  const change = (func) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    if (owlContainer !== null) {
      owlContainer.on('change.owl.carousel', func);
    }
  }

  const refresh = (event, speed) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    if (typeof event !== 'undefined' && typeof speed === 'number') {
      owl(id).trigger('refresh.owl.carousel', [event, speed]);
    }
    else {
      owl(id).trigger('refresh.owl.carousel');
    }
  }

  const replace = (data) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    if (typeof data === 'string') {
      owl(id).trigger('replace.owl.carousel', data);
      refresh();
    }
    else {
      console.log('string html not found')
    }
  }

  const add = (data, position) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    if (typeof data === 'string' && typeof position === 'number') {
      owl(id).trigger('add.owl.carousel', [data, position]);
      refresh();
    }
    else {
      console.log('string html not found')
    }
  }

  const remove = (position) => {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    if (typeof position === 'number') {
      owl(id).trigger('remove.owl.carousel', position);
      refresh();
    }
    else {
      console.log('string html not found')
    }
  }

  const Slider = (props) => {
    const {
      className = 'owl-carousel owl-theme',
    } = props;
    return <div className="main-slider">
      <div id={id} className={className}>
        {props.children}
      </div>
    </div>
  }

  return {
    next,
    prev,
    to,
    destroy,
    play,
    stop,
    changed,
    change,
    refresh,
    replace,
    add,
    remove,
    Slider,
  };
}

export default MrOwl;