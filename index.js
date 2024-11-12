const con0 = document.querySelector(".container-0")
const click1 = document.querySelector(".click-1")
const click2 = document.querySelector(".click-2")
const click3 = document.querySelector(".click-3")
const click4 = document.querySelector(".click-4")
const click5 = document.querySelector(".click-5")
const con1 = document.querySelector(".container-1")
const y1 = document.querySelector(".yes-1");
const n1 = document.querySelector(".no-1");
const alt1 = document.querySelector(".alternative-1")
const alt2 = document.querySelector(".alternative-2")
const alt3 = document.querySelector(".alternative-3")
const con2 = document.querySelector(".container-2")
const y2 = document.querySelector(".yes-2");
const n2 = document.querySelector(".no-2");
const con3 = document.querySelector(".container-3")
const alt4 = document.querySelector(".alternative-4")
const alt5 = document.querySelector(".alternative-5")
const alt6 = document.querySelector(".alternative-6")

click1.addEventListener('click', () => {
    click2.style.display = "block";
})
click2.addEventListener('click', () => {
    click3.style.display = "block";
})
click3.addEventListener('click', () => {
    click4.style.display = "block";
})
click4.addEventListener('click', () => {
    click5.style.display = "block";
})
click5.addEventListener('click', () => {
    con1.style.display = "flex";
    con0.style.display = "none";
})
y1.addEventListener('click', () => {
    con2.style.display = "flex";
    con1.style.display = "none";
})
n1.addEventListener('click', () => {
    alt1.style.display = "block";
})
alt1.addEventListener('click', () => {
    alt2.style.display = "block";
})
alt2.addEventListener('click', () => {
    alt3.style.display = "block";
})
alt3.addEventListener('click', () => {
    alt1.style.display = "none";
    alt2.style.display = "none";
    alt3.style.display = "none";
})

y2.addEventListener('click', () => {
    con3.style.display = "flex";
    con2.style.display = "none";
})
n2.addEventListener('click', () => {
    alt4.style.display = "block";
})
alt4.addEventListener('click', () => {
    alt5.style.display = "block";
})
alt5.addEventListener('click', () => {
    alt6.style.display = "block";
})
alt6.addEventListener('click', () => {
    alt4.style.display = "none";
    alt5.style.display = "none";
    alt6.style.display = "none";
})