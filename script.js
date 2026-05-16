let notes = [];

function addNote() {
    let input = document.getElementById("noteInput");
    let text = input.value.trim();

    if (text === "") return;

    notes.push(text);
    input.value = "";

    render();
}

function deleteNote(index) {
    notes.splice(index, 1);
    render();
}

function render() {
    let container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, i) => {
        let div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${i})">Delete</button>
        `;

        container.appendChild(div);
    });
}