canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "red";
LineWide = 2;
radius = 40;
mouse = "no";


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color = document.getElementById("colorText").value;
  lineWidth = document.getElementById("lineWidth").value;
  radius = document.getElementById("radiusText").value;
  mouse = "down";
  console.log(mouse);
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
  CurrentPosX = e.clientX - canvas.offsetLeft;
  CurrentPosY = e.clientY - canvas.offsetTop;

  if (mouse == "down") {
    console.log("X = " + CurrentPosX + "Y = " + CurrentPosY);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = LineWide;
    ctx.arc(CurrentPosX, CurrentPosY, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

canvas.addEventListener("mouseup", my_mouseleave);

function my_mouseleave(){
    mouse="up";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(){
    mouse="leave";
}

function clearAll() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
