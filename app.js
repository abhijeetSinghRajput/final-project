fetch('http://localhost/final%20project/backend/api/notes.php')
    .then(res => res.json())
    .then(data => {
        if (!data || data.length === 0) {
            console.log('No data found');
            document.querySelector('.empty-state').classList.add('active');
        } else {
            renderNotes(data);
        }
    })
    .catch(error => console.error('Error fetching data:', error));



function renderNotes(notes) {
    const notesElement = document.querySelector('.notes');
    notes.forEach(({ s_no, title, description }) => {
        notesElement.innerHTML += getNoteElement(s_no, title, description)
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
            deleteNote(id);
        })
    })
}


function deleteNote(id) {
    const formData = new FormData();
    formData.append('id', id);

    fetch('http://localhost/final%20project/backend/api/delete.php', {
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
                <img src="./dot-menu.svg" alt="menu-icon">
                <ul class="menu">
                    <li class="edit-note">
                        <img class="icon" src="./pencil.svg" alt="">
                        edit
                    </li>
                    <li class="delete-note">
                        <img class="icon" src="./bin.svg" alt="">
                        delete
                    </li>
                </ul>
            </div>
        </header>        
        <pre>${description}</pre>
    </div>`
}