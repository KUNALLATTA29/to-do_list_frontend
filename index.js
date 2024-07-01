function sol(){
  let prin = parseFloat(document.getElementById('i1').value);
  let int = parseFloat(document.getElementById('i2').value);
  let ten = parseFloat(document.getElementById('i3').value);

  let solution = prin + (prin*int*ten)/100;

  document.getElementById('result').innerText= `Maturity Amount: ${solution.toFixed(2)}`;
}

document.getElementById('btn').addEventListener('click',sol);