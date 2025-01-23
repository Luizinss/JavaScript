// let num=[10,20,30,40,50]

// for (let i=0; i<num.length; i++){
//     console.log(num[i])
// }


// let num=[10,20,30,40,50]

// percorre a posição do Array
// for (n in num){
//     console.log(n)
// }

// vai direto na coleção que esta interando
// for (n of num){
//     console.log(n)
// }

const objs = document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50]

for(let i=0; i<num.length; i++){
    console.log(num[i])
    
}

for (o of objs) {
    console.log(o.innerHtml="Cursos")
}

for (o in objs) {
    // console.log(objs[o].innerHTML)
    console.log(o)
}
