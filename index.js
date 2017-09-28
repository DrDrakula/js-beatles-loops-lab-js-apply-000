function theBeatlesPlay(musician, instrument){
  var array = []
  for(let i = 0; i < musician.length; i++){
    array.push(musician[i] + " plays " + instrument[i])
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  while facts === true{
    array.push(facts[0] + "!!!")
    facts.shift()
  }
  return array
}
