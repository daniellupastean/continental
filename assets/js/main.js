const menuBtn = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        sidebar.classList.add('shown');
        content.style.filter = "brightness(40%)";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('shown');
        content.style.filter = "brightness(100%)";
        menuOpen = false;
    }
});

document.addEventListener('click', function (event) {
    var isClickInside = sidebar.contains(event.target) || menuBtn.contains(event.target);

    if (!isClickInside) {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('shown');
        content.style.filter = "brightness(100%)";
        menuOpen = false;
    }
});

// // SETTINGS FORM MODAL

const settings_form = document.querySelector('.settings_form');
const settingsBtn = document.querySelector('.settings');
const cancelBtn = document.querySelector('.cancelBtn');


settingsBtn.addEventListener('click', openSettings);
cancelBtn.addEventListener('click', cancelSettings);
window.addEventListener('click', clickOutsideSettings)

function openSettings() {
    settings_form.style.display = 'block';
}

function cancelSettings() {
    settings_form.style.display = 'none';
}

function clickOutsideSettings(e) {
    if (e.target == settings_form) {
        settings_form.style.display = 'none';
    }
}


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
