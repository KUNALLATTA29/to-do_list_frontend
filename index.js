
document.getElementById("btn").addEventListener('click',() =>{
  
  let year = parseInt(document.getElementById("date").value);

  let current_year = new Date().getFullYear();

  let age = current_year-year;

  document.getElementById("result").innerText = `Your age is ${age}`;
})