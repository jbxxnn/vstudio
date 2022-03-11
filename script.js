









const workOneTextH1 = document.querySelector('.work-one-text-h1')
const workTwoTextH1 = document.querySelector('.work-two-text-h1')
const workThreeTextH1 = document.querySelector('.work-three-text-h1')
const workFourTextH1 = document.querySelector('.work-four-text-h1')
const workFiveTextH1 = document.querySelector('.work-five-text-h1')
const gradiantOne = document.querySelector('.gradient-one')
const gradiantTwo = document.querySelector('.gradient-two')
const gradiantThree = document.querySelector('.gradient-three')
const gradiantFour = document.querySelector('.gradient-four')
const gradiantFive = document.querySelector('.gradient-five')
const damselInDior = document.querySelector('.damsel-in-dior')
const sosFood = document.querySelector('.sos-food')
const caseFurniture = document.querySelector('.case-furniture')
const dryFarmWines = document.querySelector('.dry-farm-wines')
const reserveBar = document.querySelector('.reserve-bar')


workOneTextH1.addEventListener("mouseover", work1MouseOverEffect, true)
workOneTextH1.addEventListener("mouseout", work1MouseOutEffect, true)


function work1MouseOverEffect() {
    workOneTextH1.classList.add('work-h1-style');
    gradiantOne.classList.remove('hide-scroll-text');
    damselInDior.classList.remove('hide-scroll-text');
}

function work1MouseOutEffect() {
    workOneTextH1.classList.remove('work-h1-style');
    gradiantOne.classList.add('hide-scroll-text');
    damselInDior.classList.add('hide-scroll-text');
}

workTwoTextH1.addEventListener("mouseover", work2MouseOverEffect, true)
workTwoTextH1.addEventListener("mouseout", work2MouseOutEffect, true)


function work2MouseOverEffect() {
    workTwoTextH1.classList.add('work-h1-style');
    gradiantTwo.classList.remove('hide-scroll-text');
    sosFood.classList.remove('hide-scroll-text');
}

function work2MouseOutEffect() {
    workTwoTextH1.classList.remove('work-h1-style');
    gradiantTwo.classList.add('hide-scroll-text');
    sosFood.classList.add('hide-scroll-text');
}


workThreeTextH1.addEventListener("mouseover", work3MouseOverEffect, true)
workThreeTextH1.addEventListener("mouseout", work3MouseOutEffect, true)


function work3MouseOverEffect() {
    workThreeTextH1.classList.add('work-h1-style');
    gradiantThree.classList.remove('hide-scroll-text');
    caseFurniture.classList.remove('hide-scroll-text');
}

function work3MouseOutEffect() {
    workThreeTextH1.classList.remove('work-h1-style');
    gradiantThree.classList.add('hide-scroll-text');
    caseFurniture.classList.add('hide-scroll-text');
}


workFourTextH1.addEventListener("mouseover", work4MouseOverEffect, true)
workFourTextH1.addEventListener("mouseout", work4MouseOutEffect, true)


function work4MouseOverEffect() {
    workFourTextH1.classList.add('work-h1-style');
    gradiantFour.classList.remove('hide-scroll-text');
    dryFarmWines.classList.remove('hide-scroll-text');
}

function work4MouseOutEffect() {
    workFourTextH1.classList.remove('work-h1-style');
    gradiantFour.classList.add('hide-scroll-text');
    dryFarmWines.classList.add('hide-scroll-text');
}



workFiveTextH1.addEventListener("mouseover", work5MouseOverEffect, true)
workFiveTextH1.addEventListener("mouseout", work5MouseOutEffect, true)


function work5MouseOverEffect() {
    workFiveTextH1.classList.add('work-h1-style');
    gradiantFive.classList.remove('hide-scroll-text');
    reserveBar.classList.remove('hide-scroll-text');
}

function work5MouseOutEffect() {
    workFiveTextH1.classList.remove('work-h1-style');
    gradiantFive.classList.add('hide-scroll-text');
    reserveBar.classList.add('hide-scroll-text');
}







// Custom Cursor

let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();



let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
    const canvas = document.querySelector(".cursor--canvas");
    const shapeBounds = {
      width: 75,
      height: 75
    };
    paper.setup(canvas);
    const strokeColor = "#d90a2c";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;

    const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      );

      polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;

  const noiseObjects = polygon.segments.map(() => new SimplexNoise());
  let bigCoordinates = [];

  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  paper.view.onFrame = event => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.1);
    lastY = lerp(lastY, clientY, 0.05);
    group.position = new paper.Point(lastX, lastY);
  }


}
initCanvas();


const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
  });
