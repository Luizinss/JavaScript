// const f=new function(...valores){
//     let res=0
//     for(v of valores){
//         res+=v
//     }
//     return res
// }


// console.log(f(10,5))

const f = new Function("v1", "v2=0", "v3=0", "return v1+v2+v3") //Função construtor anonima

console.log(f(10))