var modalOpenButtons = document.querySelectorAll('.show__modal');
modalOpenButtons.forEach(function(button) {
button.addEventListener('click', function(event) {
event.preventDefault();
var modal = document.querySelector('.modal');
modal.style.display = 'block';
document.documentElement.classList.toggle('lock1');
});
});

var modalCloseButtons = document.querySelectorAll('.close__modal');
modalCloseButtons.forEach(function(button) {
button.addEventListener('click', function(event) {
event.preventDefault();
closeModal();
});
});

function closeModal() {
var modal = document.querySelector('.modal');
modal.style.display = 'none';
document.documentElement.classList.remove('lock1');
}
