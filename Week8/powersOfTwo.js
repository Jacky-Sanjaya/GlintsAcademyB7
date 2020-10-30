function powersOfTwo(num){
    let strKosong= ""

    const number = num.toString()

    for(let i = 0 ; i < number.length ; i++){
       strKosong += number[i]
    }  
    if(strKosong[0] === strKosong[1]){
        console.log(false)
    }else{
        console.log(true)
    }
    
}
(powersOfTwo(22))