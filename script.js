const period = document.getElementById('period')
const len = document.getElementById('length')
let result = document.getElementById('result')
const note = document.getElementById('note')
const indicator = document.getElementById('indicator')

const pi = Math.PI

period.addEventListener('change', calculate)
len.addEventListener('change', calculate)

function calculate() {
    if (period.value == "" || len.value == "") {
        console.log('asu')
    }
    else {
        const T = parseFloat(period.value)
        const l = parseFloat(len.value)
        const res = 4*pi**2*l/T**2
        result.value = res.toFixed(5)

        if (result.value < 9.2) {
            indicator.style.backgroundColor = "royalblue"
            note.textContent = "The result is too low"
        }
        else if (result.value < 9.7) {
            indicator.style.backgroundColor = "turquoise"
            note.textContent = "The result is a little low, but ok"
        }
        else if (result.value < 9.9) {
            indicator.style.backgroundColor = "greenyellow"
            note.textContent = "Excellent!"
        }
        else if (result.value < 10.3) {
            indicator.style.backgroundColor = "orange"
            note.textContent = "The result is a little high, but ok"
        }
        else if (result.value > 10.3) {
            indicator.style.backgroundColor = "crimson"
            note.textContent = "The result is too high"
        }
    }
}