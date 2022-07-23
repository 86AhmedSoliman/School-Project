import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import './sass/style.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.min.css';





$(function(){
    $("#account").click(function(){
        $(".sign-up-form").addClass("remove-sign-up");
        $(".sign-in-form").addClass("show-sign-in");
        $(".sign-in-form").removeClass("remove-sign-in");
    });
    $("#back").click(function(){
        $(".sign-up-form").addClass("show-sign-up");
        $(".sign-in-form").addClass("remove-sign-in");
        $(".sign-up-form").removeClass("remove-sign-up");
        $(".sign-in-form").removeClass("show-sign-in");
    });
    $("#overlay").click(function(){
        $(".overlay-form").addClass("show-overlay");
        $("body.main").css("overflow-y", "hidden");
        $(".overlay-form").css("overflow-y", "scroll");
    });
    $("#close").click(function(){
        $(".overlay-form").removeClass("show-overlay");
        $("body.main").css("overflow-y", "scroll");
    })
});

(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})();
let myForm = document.querySelector("form.sign-up-form");
let myButton = myForm.querySelector("button[type=submit]");
myButton.addEventListener("click", function(){
    let yearSelect = document.getElementById("year-dropdown");
    let year = yearSelect.value;
    if(year >= 2012){
        yearSelect.setCustomValidity('any error!!');
    }
});

document.getElementById('fullYear').innerHTML = new Date().getFullYear();


let dateDropdown = document.getElementById('year-dropdown'); 

let currentYear = new Date().getFullYear();    
let earliestYear = 1970;     
while (currentYear >= earliestYear) {      
    let dateOption = document.createElement('option');          
    dateOption.text = currentYear;      
    dateOption.value = currentYear;        
    dateDropdown.add(dateOption);      
    currentYear -= 1;    
}


