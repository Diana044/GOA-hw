// 2)გვერდზე გაქვს ღილაკი "Toggle Theme"

// დავალება:

// დაჭერისას იცვლება background
// შეინახე არჩეული theme
// refresh-ის შემდეგ იგივე theme დარჩეს

// მინიშნება:

// შეინახე "dark" ან "light"
const body = document.body
const dark = document.getElementById("dark")
const light = document.getElementById("light")

const savedTheme = localStorage.getItem("theme")
if (savedTheme === "dark") {
  body.style.backgroundColor = "black"
} else if (savedTheme === "light") {
  body.style.backgroundColor = "white"
}

dark.addEventListener("click", () => {
  body.style.backgroundColor = "black"
  localStorage.setItem("theme", "dark")
})

light.addEventListener("click", () => {
  body.style.backgroundColor = "white"
  localStorage.setItem("theme", "light")
})
