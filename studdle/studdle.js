console.log("Welcome to Studdle")

var topics = []

function add_topic(topic, weight){
  for(var i = 0; i < weight; i++)
    topics.push(topic)
}

function get_topic(){
  return topics[Math.floor(Math.random() * topics.length)]
}

function set_timer(minutes){
  setTimeout(function(){
    minutes = prompt("Timer done!\nSet a new timer? Enter number of minutes or enter 0 for no:")
    if(minutes > 0)
    set_timer(minutes)
    }, minutes * 60 * 1000)
}

function load_topics(topic_set){
  var toggle = false
  var topic = ""
  var weight = ""
  for(var i = 0; i < topic_set.length; i++){
    if(topic_set[i] == " "){
      toggle = !toggle
      if(!toggle){
        add_topic(topic, weight)
        topic = ""
        weight = ""
      }
    }
    else if(toggle)
      weight = weight + topic_set[i]
    else
      topic = topic + topic_set[i]
  }
  add_topic(topic, weight)
}

var ui = {
  add_topic: function(){
    console.log("ui.add_topic triggered")
    add_topic(document.getElementById("topic").value,document.getElementById("weight").value)
  },
  get_topic: function(){
    console.log("ui.get_topic triggered")
  },
  set_timer: function(){
    console.log("ui.set_timer triggered")
  }
}
