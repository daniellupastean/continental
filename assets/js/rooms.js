// ADD ROOM FORM MODAL

const add_room_form = document.querySelector('.add_room_form');
const addRoomBtn = document.querySelector('.addRoomBtn');
const cancelBtn3 = document.querySelector('.cancelBtn3');


addRoomBtn.addEventListener('click', openAddRoom);
cancelBtn3.addEventListener('click', cancelAddRoom);
window.addEventListener('click', clickOutsideAddRoom)

function openAddRoom() {
    add_room_form.style.display = 'block';
}

function cancelAddRoom() {
    add_room_form.style.display = 'none';
}

function clickOutsideAddRoom(e) {
    if (e.target == add_room_form) {
        add_room_form.style.display = 'none';
    }
}
