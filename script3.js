let a1= 1000
let b2= 200
let c= '/'

operaiton(a1,b2,c)

function operaiton(a1,b2,c ) {
    if(typeof a1 != 'number' || typeof b2 != 'number'){
        console.log('false')
    }else if (c == "/"){
        console.log(a1/b2)
    }else if (c == "_"){
        console.log(a1-b2)
    }else if(c == '*'){
        console.log(a1*b2)
    }else if (c == "+"){
        console.log(a1+b2)
    }
}