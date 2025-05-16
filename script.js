let myLeads = []

let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let l = 0; l < myLeads.length; l++) {
        listItems += `<li> <a target='_blank' href = ${myLeads[l]}> ${myLeads[l]} </a> </li>`
    }
    ulEl.innerHTML = listItems
}
