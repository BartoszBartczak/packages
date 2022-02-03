var phoneNumber = document.querySelector('#phnoneNumber');
var packageNumber = document.querySelector('#packageNumber');
const button = document.querySelector('.button');
var modal = document.getElementById("myModal");

function checkNumber () {
    if (document.querySelector('.input').value.length == "") {
        alert("wpisz numer telefonu i numer paczki");
}
      
      else {
        modal.style.display = "block";
      }
}
