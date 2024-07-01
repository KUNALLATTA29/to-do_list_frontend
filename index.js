let t_alpha_c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let t_alpha_s = "abcdefghijklmnopqrstuvwxyz";
let t_sym = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";
let t_num = "1234567890";

let length = document.getElementById("length");
let low = document.getElementById("lowercase");
let upp = document.getElementById("uppercase");
let num = document.getElementById("number");
let sam = document.getElementById("symbols");

document.getElementById("btn").addEventListener('click',() =>{

  let char = "";
  let zoom = "";
  let total_length = parseInt(length.value);

  if(low.checked){
    char +=t_alpha_s;
  }
  if(upp.checked){
    char += t_alpha_c;
  }
  if(num.checked){
    char +=t_num;
  }
  if(sam.checked){
    char += t_sym;
  }

  for(let i=0;i<total_length;i++){
    zoom += char.charAt(Math.floor(Math.random()*char.length));
  }

  document.getElementById("result").value = zoom;
})