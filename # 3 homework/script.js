const calculateSum = (...args) => {
    let num = [0 , 1];

    num[0]= args[0]+args[1];

    for(let i=2; i<args.length; i++){
        num[1]= num[1] * args[1]
    }
    return num;
}

console.log(calculateSum(3,4,5,6,9));