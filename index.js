document.getElementById("btn").addEventListener('click', ()=>{

  let s = document.getElementById("text").value;
  let arr = ['a','e','i','o','u'];
  let count = 0;
  for(let i=0;i<s.length;i++){
    if(arr.includes(s[i])){
      count++;
    }
  }
  document.getElementById("result").innerText = `Total Vowels: ${count}`;
})