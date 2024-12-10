const createBtn = document.querySelector('button.create');
const backdrop = document.querySelector('.backdrop');
const creationForm = document.getElementById('creation-form');
const updationForm = document.getElementById('updation-form');
const creationHeadingInput = document.querySelector('#creation-form input');
const creationDescriptionInput = document.querySelector('#creation-form textarea');

function openForm(form){
    backdrop.classList.add('active');
    form.classList.add('active');
}

function closeForm(form){
    backdrop.classList.remove('active');
    form.classList.remove('active');
}

createBtn.addEventListener('click', ()=>openForm(creationForm));
backdrop.addEventListener('click', ()=>{
    closeForm(creationForm);
    closeForm(updationForm);
});

function validateForm(form){
    if(form.querySelector('.title-input').value.trime().length == 0){
        return false;
    }
    if(form.querySelector('textarea').value.trime().length == 0){
        return false;
    }
    return true;
}

creationForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!validateForm(creationForm)) {
        alert("All fields required");
        return;
    }
    creationForm.submit();
    closeForm(creationForm);
})

updationForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(!validateForm(updationForm)) {
        alert("All fields required");
        return;
    }
    updationForm.submit();
    closeForm(updationForm);
})


