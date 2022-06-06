function scuberGreetingForFeet(feetValue){
  // Write your code here!
  if(feetValue<=400){
    return 'This one is on me!'
  }
  else if(feetValue>=2001 && feetValue<=2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if(feetValue>=2501){
    return 'No can do.'
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
   return cityName==='NYC'?'Ok, sounds good.':'No go.';
  
}

function switchOnCharmFromTip(thankNote){
  // Write your code here!
  switch(thankNote){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return'Thank you.'
    default:
      return 'Bye.'
  }

}