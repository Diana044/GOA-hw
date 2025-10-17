
let newstr=''
let word='juuice'
let i=0

while(i<word.length){
    if(word[i]!='c' && word[i]!= 'u'){
        newstr+=word[i]
    }
    i++
}
 console.log(newstr)
