let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
    // ulEl.textContent = ""
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let l = 0; l < myLeads.length; l++) {
        listItems += `<li> <a target='_blank' href = ${myLeads[l]}> ${myLeads[l]} </a> </li>`
    }
    ulEl.innerHTML = listItems
}
