(this["webpackJsonpreact-hgs-owl-carousel"]=this["webpackJsonpreact-hgs-owl-carousel"]||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var l=r(0),o=r.n(l),a=r(3),n=r.n(a),s=(r(9),r(1)),c=r.n(s);r(10),r(11),r(12);var i=function(e){const{id:t="demo",options:r=null}=e,a=e=>c()(`#${e}`);let n=null;Object(l.useEffect)(()=>{n=a(t).owlCarousel(r)},[t,r]);const s=(e,r)=>{if(!a(t))throw new Error("OwlCarousel is not created");"undefined"!=typeof e&&"number"==typeof r?a(t).trigger("refresh.owl.carousel",[e,r]):a(t).trigger("refresh.owl.carousel")};return{next:e=>{if(!a(t))throw new Error("OwlCarousel is not created");"number"==typeof e?a(t).trigger("next.owl.carousel",[e]):a(t).trigger("next.owl.carousel",e)},prev:e=>{if(!a(t))throw new Error("OwlCarousel is not created");"number"==typeof e?a(t).trigger("prev.owl.carousel",[e]):a(t).trigger("prev.owl.carousel",e)},to:(e,r)=>{if(!a(t))throw new Error("OwlCarousel is not created");"number"==typeof e&&"number"==typeof r?a(t).trigger("to.owl.carousel",[e,r]):a(t).trigger("to.owl.carousel")},destroy:()=>{if(!a(t))throw new Error("OwlCarousel is not created");a(t).trigger("destroy.owl.carousel")},play:(e,r)=>{if(!a(t))throw new Error("OwlCarousel is not created");"number"==typeof e&&"number"==typeof r?a(t).trigger("play.owl.autoplay",[e,r]):a(t).trigger("play.owl.autoplay")},stop:()=>{if(!a(t))throw new Error("OwlCarousel is not created");a(t).trigger("stop.owl.autoplay")},changed:e=>{if(!a(t))throw new Error("OwlCarousel is not created");null!==n&&n.on("changed.owl.carousel",e)},change:e=>{if(!a(t))throw new Error("OwlCarousel is not created");null!==n&&n.on("change.owl.carousel",e)},refresh:s,replace:e=>{if(!a(t))throw new Error("OwlCarousel is not created");"string"==typeof e?(a(t).trigger("replace.owl.carousel",e),s()):console.log("string html not found")},add:(e,r)=>{if(!a(t))throw new Error("OwlCarousel is not created");"string"==typeof e&&"number"==typeof r?(a(t).trigger("add.owl.carousel",[e,r]),s()):console.log("string html not found")},remove:e=>{if(!a(t))throw new Error("OwlCarousel is not created");"number"==typeof e?(a(t).trigger("remove.owl.carousel",e),s()):console.log("string html not found")},Slider:e=>{const{className:r="owl-carousel owl-theme"}=e;return o.a.createElement("div",{className:"main-slider"},o.a.createElement("div",{id:t,className:r},e.children))}}};n.a.render(o.a.createElement(()=>{const{Slider:e,next:t,prev:r,changed:a,refresh:n,remove:s,add:c}=i({id:"demo",options:{loop:!0,margin:10,nav:!0,rtl:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5}},onDragged:()=>console.log("onDragged"),onInitialize:()=>console.log("initialize"),onInitialized:()=>console.log("initialized"),onResize:()=>console.log("onResize"),onTranslate:()=>console.log("onTranslate"),onTranslated:()=>console.log("onTranslated")}});return Object(l.useEffect)(()=>{a(e=>console.log(e.item.index))},[a]),o.a.createElement("div",null,o.a.createElement(e,null,o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"1")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"2")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"3")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"4")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"5")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"6")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"7")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"8")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"9")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"10")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"11")),o.a.createElement("div",{className:"item"},o.a.createElement("h4",null,"12"))),o.a.createElement("button",{onClick:()=>{c('<div class="item"><h4>222</h4></div>',1)},className:"customNextBtn"},"custom next"),o.a.createElement("button",{onClick:()=>r(1e3),className:"customNextBtn salam"},"custon prev"))},null),document.getElementById("root"))},4:function(e,t,r){e.exports=r(13)},9:function(e,t,r){}},[[4,1,2]]]);
//# sourceMappingURL=main.23ba9ab2.chunk.js.map