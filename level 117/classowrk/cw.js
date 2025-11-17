// 1)შექმენით ერთი დივი,მიეცით ზომები 150px სიგანე 300px სიმაღლე/მიეცით წითელი ბორდერი

// ამ დივში ჩააშენეთ 1 ფოტო(ინტერნეტშ მოძებნეთ ნებისმიერი ფოტო)

// ამ დივშ ფოტოს ქვემოთ ჩააშენეთ 1 სათაური , ამ სათაურს ქონდეს class --> "heading" და css ში გასტილეთ

// სათაურის ქვემოთ ჩააშენეთ 1 პარაგრაფი რომელსაც კლასი ექნება paragraph და css იდან გასტილეთ

// და ამ სათაურის ქვევით იყოს button რომელსაც გასტილავთ css იდან

let content = document.body

document.body.innerHTML = `
  <div style="width:300px; height:300px; border:1px solid red;display:flex; justify-content:center;align-items:center; flex-direction:column; padding:30px;"><img 
      src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" 
      style="width:100%; height:auto;"/>
    <h1 class="heading">text</h1>
    <button>gilaki</button>
  </div>
`
