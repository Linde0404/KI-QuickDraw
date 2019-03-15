const width = 280;
const height = 280;

function onloaded(ev) {
  const canvasNode = document.getElementById('canvas');
  const canvas = canvasNode.getContext('2d');
  clearCanvas();


  function clearCanvas(){
    canvas.fillStyle = "white";
    canvas.fillRect(0, 0, width, height);
  }
}

document.addEventListener("DOMContentLoaded", onloaded);
