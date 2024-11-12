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

y1.addEventListener('click', () => {
    con2.style.display = "block";
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