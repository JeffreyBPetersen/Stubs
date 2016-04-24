function add_node(x, y){
  nodes.push({x: x, y: y})
}

function draw(){
  view_context.clearRect(0, 0, view_element.width, view_element.height)
  draw_nodes()
  requestAnimationFrame(draw)
}

function draw_nodes(){
  for(i = 0; i < nodes.length; i++)
    draw_circle(nodes[i].x, nodes[i].y)
}

function draw_circle(x, y){
  view_context.beginPath()
  view_context.arc(x, y, 16, 0, 2*Math.PI)
  view_context.stroke()
  view_context.closePath()
}

function fullscreen(){
  view_element.height = screen.height
  view_element.width = screen.width
  view_element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
}

function handle_click(event){
  console.log(event)
  // get coordinates within canvas
  var x = event.layerX
  var y = event.layerY
  add_node(x,y)
}

function handle_keydown(event){
  console.log(event)
  if(event.keyCode == 68) // 'd'
    draw_nodes()
  if(event.keyCode == 70) // 'f'
    fullscreen()
}

function main(){
  console.log("Welcome to Quigliff!")
  view_element = document.getElementById("view")
  view_context = view_element.getContext("2d")
  view_element.addEventListener("click", function(){handle_click(event)})
  document.addEventListener("keydown", function(){handle_keydown(event)})
  nodes = []
  requestAnimationFrame(draw)
}
