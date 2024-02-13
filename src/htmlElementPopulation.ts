import * as api from './api'
import { apiNote } from '../interface/apiNote'

import * as htmlEl from './htmlElements'
import * as func from './functions'

//skapar hela anteckningen
export function fillNotes(note: apiNote) {


    const noteCard = document.createElement('div')
    noteCard.id = note.id
    noteCard.classList.add('noteCard')

    const createdAt = document.createElement('span')
    createdAt.classList.add('date')
    createdAt.innerText = note.createdAt.toString()
    noteCard.appendChild(createdAt)

    const title = document.createElement('h2')
    title.innerText = note.title.toString()
    noteCard.appendChild(title)

    const noteText = document.createElement('p')
    noteText.id = note.id
    noteText.innerText = note.note.toString()
    noteCard.appendChild(noteText)

    const userName = document.createElement('p')
    userName.innerText = '- ' + note.username.toString()
    userName.classList.add('name')
    noteCard.appendChild(userName)

    const deletebtn = document.createElement('button')
    deletebtn.id = "delete_noteID_" + note.id
    deletebtn.classList.add('delete')
    deletebtn.innerText = 'Ta bort'
    noteCard.appendChild(deletebtn)

    const updatebtn = document.createElement('button')
    updatebtn.id = 'update_noteID_' + note.id
    updatebtn.classList.add('update', 'button')
    updatebtn.innerText = 'Uppdatera'


    deletebtn.addEventListener('click', () => {
        const idDeleteText = updatebtn.id.split('_noteID_')
        const noteDeleteId = idDeleteText[1]

        console.log(idDeleteText)



        api.deleteNotes(noteDeleteId, note.username.toString(), noteDeleteId)

    })
    updatebtn.addEventListener('click', () => {
        const idText = updatebtn.id.split('_noteID_')
        const noteId = idText[1]
        const text = noteText.innerText
        console.log(noteId)

        updateNote(noteId, note.username.toString(), text)

    })
    noteCard.appendChild(updatebtn)


    htmlEl.noteCardHolder.appendChild(noteCard)



}


export function updateNote(id: string, userName: string, noteText: string) {

    func.update()


    htmlEl.noteTextArea.value = noteText
    htmlEl.publishUpdate.addEventListener('click', () => {

        const updatedNote = htmlEl.noteTextArea.value

        console.log(updatedNote)


        api.updateNote(id, updatedNote, userName)


    })
}



