

function scuberGreetingForFeet(distance){
 
let result
  if (distance <= 400){
result = `This one is on me!`;
  }else if(distance > 2000 && distance < 2500){
result ='I will gladly take your thirty bucks.';
}else if (distance > 2500){
result = `No can do.`
}

  return result
}

function ternaryCheckCity(city){
let ans
  if (city == 'NYC'){
    ans = "Ok, sounds good."
  }else {
    ans = "No go."
  }
  // Write your code here!
  return ans
}

function switchOnCharmFromTip(tip){
let ans

if (tip == 'generous'){

  ans = 'Thank you so much.'
}else if (tip == 'not as generous' ){

ans = "Thank you."

}else{

  ans = 'Bye.'
}
return ans
}
  // Write your code here!


