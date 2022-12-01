
//query document

const langSelect =  document.querySelector(".btn-default");
const textSpan =  langSelect.querySelector(".text");
const modal = document.querySelector(".modal");
const options = modal.querySelectorAll(".modal-control");
const saveBtn = modal.querySelector(".savebtn");
const cancelBtn = modal.querySelector(".cancelbtn");


//all global variable
let prevOption = null;
//show modal 
const showModal = (modal)=>{
    modal.classList.add("show");
}
//hide modal 
const hideModal = (modal)=>{
    modal.classList.remove("show");
}
//selectdOption function value add selected class in option list.
const selectedOption = (text)=>{
    options.forEach(option=>{
        if(option.getAttribute('data-value').toLowerCase()===text.toLowerCase()){
            option.classList.add("selected");
            prevOption = option;
        }
    })
}
//show modal if box clicked and pass value of selectedOption function
langSelect.addEventListener("click",(event)=>{
    event.preventDefault();
    showModal(modal);
    
    let text = textSpan.getAttribute("data-value");
    selectedOption(text);
    
})
//iterate over all option in modal and add selected class if the option is clicked
//remove selected class from the prevoption
options.forEach(option=>{
    option.addEventListener("click",(event)=>{
        event.preventDefault()
        option.classList.add("selected");
        prevOption.classList.remove("selected");
        prevOption = option;
    })
})
//hide modal if the cancelbtn clicked and do nothing
cancelBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    //hide modal
    hideModal(modal);

    //remove selected class from previously selected option which is not saved.
    prevOption.classList.remove("selected");
})
//hide modal and update ui in the select box
saveBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    //hide modal
    hideModal(modal);
    //update ui
    textSpan.setAttribute("data-value",prevOption.getAttribute("data-value"));
    textSpan.textContent = prevOption.textContent;
})