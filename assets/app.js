let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');

function calculateAge(){
  let birDate = new Date(userInput.value);

  let d1 = birDate.getDate();
  let m1 = birDate.getMonth()+ 1;
  let y1 = birDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;
  if(m2 >= m1){
    m3 = m2 - m1
  }else{
    y3--;
    m3 = 12 + m2 - m1;
  }

  if(d2 >= d1){
    d3 = d2 - d1
  }
  else{
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if(m3 < 0){
    m3 = 11
    y3--;
  }

  result.innerHTML = `Você tem ${y3} anos, ${m3} Meses ${d3} dias`
  
}

function getDaysInMonth(year, month){
  return new Date(year, month, 0).getDate()
}