function checkObj(obj, checkProp) {
  // Altere apenas o código abaixo desta linha
  
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp]
    } else {
      return "Not Found"
  }
  ;
  // Altere apenas o código acima desta linha
}

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))