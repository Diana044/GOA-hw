// 13)მოცემულია მასივი სტუდენტების სახელებით:
// გამოიყენე reduce, რათა შექმნა ერთი სტრინგი, სადაც 
// ყველა სახელი იქნება ხაზით -.
// შედეგი უნდა იყოს: "ანა-ლაშა-გიორგი-ნინო".


const students = ["ანა", "ლაშა", "გიორგი", "ნინო"];


const  wholeStr=  students.reduce((accumulator, currentValue,index)=>{
    if(index<students.length-1){
        return  accumulator+currentValue+'-'
    }else{
        return accumulator+currentValue
    }
},"")

console.log(wholeStr)