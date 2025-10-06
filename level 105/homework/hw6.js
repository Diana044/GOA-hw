// 6)დაწერე ფუნქცია, რომელიც იღებს სტუდენტების სახელების სიას და აბრუნებს(ითვლის) რამდენი სახელი იწყება ასო „გ“-ზე.
function func(stList){
    let i=0
    let sum=0
    let names=[]
    while(i<stList.length){
        if(stList[i][0]=== "გ" ){
            sum++
            names.push(stList[i])
        }
        i++
    }return  `„გ“-ze iwyeba ${sum} saxeli esenia:${names}`
}
list=['ანა','გოჩა','გერონტი','ლამარა','ლუიზა','ნაირა']
console.log(func(list))