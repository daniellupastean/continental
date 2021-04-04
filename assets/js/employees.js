// ADD EMPLOYEE FORM MODAL

const add_employee_form = document.querySelector('.add_employee_form');
const addEmployeeBtn = document.querySelector('.addEmployeeBtn');
const cancelBtn2 = document.querySelector('.cancelBtn2');


addEmployeeBtn.addEventListener('click', openAddEmployee);
cancelBtn2.addEventListener('click', cancelAddEmployee);
window.addEventListener('click', clickOutsideAddEmployee)

function openAddEmployee() {
    add_employee_form.style.display = 'block';
}

function cancelAddEmployee() {
    add_employee_form.style.display = 'none';
}

function clickOutsideAddEmployee(e) {
    if (e.target == add_employee_form) {
        add_employee_form.style.display = 'none';
    }
}