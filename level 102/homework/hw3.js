// 3)ფუნქციამ მიიღოს პაროლი (პარამეტრი).
// while loop-ში მომხმარებელს (prompt) მოსთხოვოს პაროლი.
// სანამ შეყვანილი პაროლი არ დაემთხვევა სწორ პარამეტრს, მოსთხოვე თავიდან.
// თუ დაემთხვა → "წარმატებით!".

function passw(password){
    let userAnswer=prompt('enter correct passowrd!!!!!!!')
    while (userAnswer!=password){
          userAnswer=prompt('enter correct passowrd!!!!!!!')
    }
    alert('წარმატებით')
}

passw('diana123')