console.log('jjkj')
const polzSum=document.querySelector('.sum')
const itogsum=document.querySelector('.itogsum')
const itog2=document.querySelector('.itog2')
itogsum.innerHTML=polzSum.value
// console.log(polzSum.value)

polzSum.addEventListener('input',sumChange)
let x
let y
function sumChange(){
        
    const value=polzSum.value
    const two=Number(value)
// console.log(two)

x=two*10/100
y=two+x
// console.log(y)
itogsum.innerHTML=polzSum.value
itog2.innerHTML=y
}
sumChange()

const polzTime=document.querySelector('.time');
const itogTime=document.querySelector('.itogTime')
itogTime.innerHTML=polzTime.value
// console.log(polzTime.value)
polzTime.addEventListener('input',timeChange)
function timeChange() {
    const value=polzTime.value
    const second=Number(value)
//  console.log(second)
 itogTime.innerHTML=polzTime.value
 let d=y-x
//  console.log(d)
if (second>6) {
    let c=d*9/100
    let v=d+c
    console.log(v);
    console.log(c);
    itog2.innerHTML=v
} 
else(
    itog2.innerHTML=y
)
// if (second>9) {
//     let w=d*7/100
//     let o=d+w
//     console.log(w);
//     console.log(o);
// }
// if (second>12) {
//     let l=d*5/100
//     let t=d+l
//     console.log(l);
//     console.log(t);
// }
}
timeChange()

const color={
    one:'blue',
    two:'red',
    three:'yellow'


}
console.log(color.three);








