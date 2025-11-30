console.log(document.URL)
console.log(document.scripts)
document.title='new title'
let p=document.createElement('p')
let a=document.createElement('a')
a.href='https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_doc_url1'
a.style.fontSize='33px'
a.style.color='red'
a.style.textDecoration='none'
a.innerText='click here'
p.innerHTML='ghfg'
document.body.appendChild(p)
document.body.appendChild(a)


let img=document.getElemetnById('img')
