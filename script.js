'use strict';

//element toggle funcction
const elementTogggleFunc = function(elem){elem.classList.toggle("active");}

// sidebar variables

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

//sidebarToggle Functionality for mobile
sidebarBtn.addEventListener("click", function () {elementToggleFunc(sidebar); });


//contact form variables
const form = document.querySelector(".form");
const formInputs = document.querySelector("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

//Event on all input field
for (let i = 0; i < formInputs.length; i++){
    formInputs[i].addEventListener("input", function(){

        //checking validity
        if (form.checkValidity()){
            formBtn.removeAttribute("disabled")
        }else {
            formBtn.setAttribute("disabled", "")
        }
    });
}

//page navigation variable
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages= document.querySelectorAll("[data-page]");

//add event to all

for(let i = 0; i< navigationLinks.length; i++){
    navigationLinks[i].addEventListener("click", function(){
        for (let i = 0; i< pages.length; i++){
            if (this.innerHTML.toLowerCase()===pages){
            pages[i].classList.add("active");
            window.scrollTo(0,0)  
            }else{
                page[i].claassList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}