const container = document.querySelector('.Common-container');

let colorList = [
  '#FF0000', '#FF0D00', '#FF1A00', '#FF2600', '#FF3300', '#FF4000', '#FF4D00', '#FF5900', '#FF6600', '#FF7300', '#FF8000', '#FF8C00', '#FF9900', '#FFA600', '#FFB200', '#FFBF00', '#FFCC00', '#FFD900', '#FFE500', '#FFF200', '#FFFF00', '#F2FF00', '#E5FF00', '#D9FF00', '#CCFF00', '#BFFF00', '#B2FF00', '#A6FF00', '#99FF00', '#8CFF00', '#80FF00', '#73FF00', '#66FF00', '#59FF00', '#4DFF00', '#40FF00', '#33FF00', '#26FF00', '#1AFF00', '#0DFF00', '#00FF00', '#00FF0D', '#00FF1A', '#00FF26', '#00FF33', '#00FF40', '#00FF4D', '#00FF59', '#00FF66', '#00FF73', '#00FF80', '#00FF8C', '#00FF99', '#00FFA6', '#00FFB2', '#00FFBF', '#00FFCC', '#00FFD9', '#00FFE5', '#00FFF2', '#00FFFF', '#00F2FF', '#00E5FF', '#00D9FF', '#00CCFF', '#00BFFF', '#00B2FF', '#00A6FF', '#0099FF', '#008CFF', '#0080FF', '#0073FF', '#0066FF', '#0059FF', '#004DFF', '#0040FF', '#0033FF', '#0026FF', '#001AFF', '#000DFF', '#0000FF', '#0D00FF', '#1A00FF', '#2600FF', '#3300FF', '#4000FF', '#4D00FF', '#5900FF', '#6600FF', '#7300FF', '#8000FF', '#8C00FF', '#9900FF', '#A600FF', '#B200FF', '#BF00FF', '#CC00FF', '#D900FF', '#E500FF'
];

let index = 0;
let forward = true;

function changeColor() {
  const currentColor = colorList[index];
  const nextColorIndex = forward ? index + 1 : index - 1;
  const nextColor = colorList[nextColorIndex];

  const gradient = `radial-gradient(50% 100% at 50% 100%, ${colorList[index]} 0%, rgba(0, 0, 0, 0.95) 100%)`;
  container.style.background = gradient;

  if (forward && index === colorList.length - 2) {
    forward = false;
  } else if (!forward && index === 1) {
    forward = true;
  }

  index = forward ? index + 1 : index - 1;
}

setInterval(changeColor, 1000);
