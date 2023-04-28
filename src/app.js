const doc = {
    tbody: document.querySelector('#tbody')
}

const state = {
    employees: [],
    host: 'http://localhost:8000/api/'
}

window.addEventListener('load', () => {
    init()
})



function init() {
    getEmployees()
    
}

function getEmployees() {
    let endpoint = 'employees'
    let url = state.host + endpoint;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        state.employees = res;
        renderTable()
    });
}

function renderTable() {
    var rows = '';
    state.employees.forEach(emp => {
        rows += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.city}</td>
                <td>${emp.salary}</td>
            </tr>
        `
    });
    doc.tbody.innerHTML = rows;
}