let user = document.getElementById("in").value
let a = 1
let b = -1
let c

for (let i = 1; i<=user ; i++) {
    c = a+b
    b = a 
    a = c
    console.log(c)
}