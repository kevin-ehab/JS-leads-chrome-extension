let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const par = document.getElementById("par")
const storedLeads = JSON.parse(localStorage.getItem("myLeads"))
if (storedLeads) {
    myLeads = storedLeads
    renderLeads()
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    par.innerHTML = ""
    for (let i = 0; i < myLeads.length; i++) {
        par.innerHTML += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
            </li>
        `
    }
}
clearBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
    par.innerHTML = ""
})

