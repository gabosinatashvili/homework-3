let p = 15

ftoc(p)
function ftoc(p){
    if(typeof p == 'number'){
        console.log((p-32)*5/9)
    }else{
        console.log("false")
    }
}