var cal;
function Calif(cal){
  if (cal==100 && cal>=90){
    return "Tienes una A";
  }
  else if (cal<=89 && cal>=80) {
    return "Tienes una B";
  }
  else if(cal<=79 && cal>=70){
    return "Tienes un C";
  }
  else if(cal<=69 && cal>=60){
    return "Tienes un D";
  }
  else{
    return "Tienes un F";
  }
}
