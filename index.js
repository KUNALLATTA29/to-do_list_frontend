
document.getElementById("btn").addEventListener('click',() =>{
  
  let a = parseFloat(document.getElementById("amount").value);

  let b = parseFloat(document.getElementById("tip").value);

  let final_tip = (b/100)*a;
  document.getElementById("show_tip").innerText = `Tip Amount is: ${final_tip}`;

  document.getElementById("result").innerText = `Total Amount is: ${final_tip+a}`
})