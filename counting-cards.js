let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  if(card == 2 || card == 3 || card == 4 || card == 5 ||card == 6){
    count++;
  }else if(card == 10 || card == 'J' || card == 'Q'|| card == 'K' || card == 'A'){
    count--;
  }

if(count > 0){
  return count + " Bet"
}else if(count <= 0){
  return count + " Hold"
}
  
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');