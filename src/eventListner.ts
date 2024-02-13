import * as api from './api'
import * as htmlEL from './htmlElements'
import * as func from './functions'
export let userNotes: string | any | undefined = ''


let username = ""

export function eventListButtons() {


    htmlEL.usernameBtn.addEventListener('click', () => {
        username = htmlEL.inputUsername.value


        if (username) {

            userNotes = api.getNotes(username)
            if (!userNotes) {
                func.writeNew()

            } else {
                func.seeNotes()
            }

        } else {
            console.log('test')


        }



        console.log(userNotes)
    })


}




//går från pennan till skriva anteckningssidan

htmlEL.writeNew.addEventListener('click', () => {

    htmlEL.noteTextArea.value = ''
    func.writeNew()


})


htmlEL.publishUpdate.addEventListener('click', () => {

})

htmlEL.addNote.addEventListener('click', () => {
    if (htmlEL.title.value.length < 5) {
        alert('Title måste vara minst 5 bokstäver!')
    } else {
        const Note = {
            username: username.toString(),
            title: htmlEL.title.value.toString(),
            note: htmlEL.noteTextArea.value.toString()


        }
        const newNoteElement = JSON.stringify(Note)

        api.createNote(newNoteElement)
    }

})