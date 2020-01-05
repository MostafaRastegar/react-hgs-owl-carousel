"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

require("owl.carousel/dist/assets/owl.carousel.css");

require("owl.carousel/dist/assets/owl.theme.default.css");

require("owl.carousel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OwlCarousel(props) {
  var _props$id = props.id,
      id = _props$id === void 0 ? 'demo' : _props$id,
      _props$options = props.options,
      options = _props$options === void 0 ? null : _props$options;

  var owl = function owl(id) {
    return (0, _jquery["default"])("#".concat(id));
  };

  var owlContainer = null;
  (0, _react.useEffect)(function () {
    owlContainer = owl(id).owlCarousel(options);
  }, [id, options]);

  var next = function next(speed) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof speed === 'number') {
      owl(id).trigger('next.owl.carousel', [speed]);
    } else {
      owl(id).trigger('next.owl.carousel', speed);
    }
  };

  var prev = function prev(speed) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof speed === 'number') {
      owl(id).trigger('prev.owl.carousel', [speed]);
    } else {
      owl(id).trigger('prev.owl.carousel', speed);
    }
  };

  var to = function to(position, speed) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof position === 'number' && typeof speed === 'number') {
      owl(id).trigger('to.owl.carousel', [position, speed]);
    } else {
      owl(id).trigger('to.owl.carousel');
    }
  };

  var destroy = function destroy() {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    owl(id).trigger('destroy.owl.carousel');
  };

  var play = function play(timeout, speed) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof timeout === 'number' && typeof speed === 'number') {
      owl(id).trigger('play.owl.autoplay', [timeout, speed]);
    } else {
      owl(id).trigger('play.owl.autoplay');
    }
  };

  var stop = function stop() {
    if (!owl(id)) throw new Error('OwlCarousel is not created');
    owl(id).trigger('stop.owl.autoplay');
  };

  var changed = function changed(func) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (owlContainer !== null) {
      owlContainer.on('changed.owl.carousel', func);
    }
  };

  var change = function change(func) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (owlContainer !== null) {
      owlContainer.on('change.owl.carousel', func);
    }
  };

  var refresh = function refresh(event, speed) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof event !== 'undefined' && typeof speed === 'number') {
      owl(id).trigger('refresh.owl.carousel', [event, speed]);
    } else {
      owl(id).trigger('refresh.owl.carousel');
    }
  };

  var replace = function replace(data) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof data === 'string') {
      owl(id).trigger('replace.owl.carousel', data);
      refresh();
    } else {
      console.log('string html not found');
    }
  };

  var add = function add(data, position) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof data === 'string' && typeof position === 'number') {
      owl(id).trigger('add.owl.carousel', [data, position]);
      refresh();
    } else {
      console.log('string html not found');
    }
  };

  var remove = function remove(position) {
    if (!owl(id)) throw new Error('OwlCarousel is not created');

    if (typeof position === 'number') {
      owl(id).trigger('remove.owl.carousel', position);
      refresh();
    } else {
      console.log('string html not found');
    }
  };

  var Slider = function Slider(props) {
    var _props$className = props.className,
        className = _props$className === void 0 ? 'owl-carousel owl-theme' : _props$className;
    return _react["default"].createElement("div", {
      className: "main-slider"
    }, _react["default"].createElement("div", {
      id: id,
      className: className
    }, props.children));
  };

  return {
    next: next,
    prev: prev,
    to: to,
    destroy: destroy,
    play: play,
    stop: stop,
    changed: changed,
    change: change,
    refresh: refresh,
    replace: replace,
    add: add,
    remove: remove,
    Slider: Slider
  };
}

var _default = OwlCarousel;
exports["default"] = _default;
