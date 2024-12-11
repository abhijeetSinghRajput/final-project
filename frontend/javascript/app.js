const deleteConfirmation = document.querySelector('.confirmation');
const deleteNoteBtn = document.querySelector('.confirmation button.primary');
const keepNoteBtn = document.querySelector('.confirmation button.secondary');

fetch('http://localhost/final-project/backend/api/notes.php')
    .then(res => res.json())
    .then(data => {
        if (!data || data.length === 0) {
            console.log('No data found');
            document.querySelector('.empty-state').classList.add('active');
        } else {
            data.sort((a,b)=>a.s_no - b.s_no);
            console.log(data);
            renderNotes(data);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

const colors = ["#d7e4fd", "#f7fcd4", "#d9fbf0", "#fdf5bd", "#cfd2f7", "#fce6d9"];

function renderNotes(notes) {
    const notesElement = document.querySelector('.notes');
    notes.forEach(({ s_no, title, description }, index) => {
        notesElement.innerHTML += getNoteElement(s_no, title, description)
    })

    document.querySelectorAll('.note').forEach((note, index) => {
        note.style.backgroundColor = colors[index % colors.length];
    })
    const menuToggles = document.querySelectorAll('.menu-toggle');

    menuToggles.forEach(toggler => {
        toggler.addEventListener('click', () => {
            menuToggles.forEach(e => e.classList.remove('active'));
            toggler.classList.toggle('active');
        })
    })

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('menu-toggle') ||
            event.target.parentElement?.classList.contains('menu-toggle')
        ) {
            return;
        }
        menuToggles.forEach(toggler => {
            toggler.classList.remove('active');
        })
    });

    document.querySelectorAll('.edit-note').forEach(btn => {
        btn.addEventListener('click', () => {
            const note = btn.closest('.note');
            const id = note.id;
            const headingText = note.querySelector('h3').textContent;
            const descriptionText = note.querySelector('pre').textContent;
            updationForm.children[1].value = id;
            updationForm.children[2].value = headingText.trim();
            updationForm.children[3].value = descriptionText;
            openForm(updationForm);
        })
    })
    document.querySelectorAll('.delete-note').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.closest('.note').id;
            deleteConfirmation.setAttribute('note-id', id);
            deleteConfirmation.classList.add('active');
            // deleteNote(id);
        })
    })
}
keepNoteBtn.addEventListener('click', ()=>{
    deleteConfirmation.classList.remove('active');
})
deleteNoteBtn.addEventListener('click', ()=>{
    deleteNote(+deleteConfirmation.getAttribute('note-id'));
})



function deleteNote(id) {
    const formData = new FormData();
    formData.append('id', id);

    fetch('http://localhost/final-project/backend/api/delete.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            location.reload();
        })
        .catch(error => console.error('Error:', error))
}

const getNoteElement = function (id, title, description) {
    return `
    <div class="note" id=${id}>
        <header>
            <h3 class="title">${title}</h3>
            <div class="menu-toggle icon">
                <img src="./assets/icons/dot-menu.svg" alt="menu-icon">
                <ul class="menu">
                    <li class="edit-note">
                        <img class="icon" src="./assets/icons/pencil.svg" alt="">
                        edit
                    </li>
                    <li class="delete-note">
                        <img class="icon" src="./assets/icons/bin.svg" alt="">
                        delete
                    </li>
                </ul>
            </div>
        </header>        
        <pre>${description}</pre>
    </div>`
}