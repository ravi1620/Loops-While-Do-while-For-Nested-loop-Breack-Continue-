
import './App.css';

function App() {
  return (
    <div className="App">
<button onClick={()=>{
  let marks=99;
  while(marks>=35){
    console.log(`${marks}`)
    marks--;
  }
//   if(marks>=35){
// console.log("student passed in tenth")
//   }else{
//     console.log("student failed in tenth")
//   }
}}
  >While Loop</button>
<br></br>
<button on onClick={(ele,i)=>{
  let alpha = "A";
  do{
console.log(`These are the alphabets after A`);

  }while(alpha <"G");

}}>Do While</button>

<button
onClick={()=>{
for(let a=0;a<=100;a++){
  console.log(a);
}
}}>for</button>
<button 
onClick={()=>{
  for(let a=0 ; a <=90; a++){
    for(let b=0 ; b<=10; b++){
console.log(`${a}*${b} = ${a*b}`);
    }
  }
}}>Nested Loop</button>
<button
onClick={()=>{
for(let i = 0; i<=10000; i++){
  console.log(i);
  if(i == 9900){
break;
  }}
}}>Break</button>


<button
onClick={()=>{
for(let i=1; i<=1000;i++){
if(i>100 && i<900){
continue;
}
console.log(i);
}
}}>Continue</button>

    </div>
  );
}

export default App;
