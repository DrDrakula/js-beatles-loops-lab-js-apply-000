function theBeatlesPlay(musician, instrument){
  var array = []
  for(let i = 0; i < musician.length; i++){
    array.push(musician[i] + " plays " + instrument[i])
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  while (facts.length != 0){
    array.push(facts[0] + "!!!")
    facts.shift()
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
    number++
  }while(number < 15);
  return array
}
