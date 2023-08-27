
const input1 = document.getElementById('inp1')
const btn = document.getElementById('btn')
const btn1 = document.getElementById('btn1')

const change =()=>{
    let res = input1.value = Number(input1.value)+1
    document.getElementById('inp1').value = res
    console.log(res);
}
const change1=()=>{
    if(Number(input1.value)>0){
        let rest = input1.value = Number(input1.value)-1
        document.getElementById('inp1').value = rest
        console.log(rest);
    }
   
}