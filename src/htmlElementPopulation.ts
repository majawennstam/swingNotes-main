import * as api from './api'
import { apiNote} from '../interface/apiNote'

import * as htmlEl from './htmlElements'
import * as func from './functions'

//skapar hela anteckningen
export function fillNotes(note:apiNote){

    console.log('tom')
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

         const noteText =document.createElement('p')
         noteText.id= note.id 
         noteText.innerText = note.note.toString()
         noteCard.appendChild(noteText)

         const userName = document.createElement('p')
         userName.innerText ='- ' + note.username.toString()
         userName.classList.add('name')
         noteCard.appendChild(userName)

         const deletebtn = document.createElement('button')
         deletebtn.id = "delete_noteID_" + note.id
         deletebtn.classList.add('delete')
         deletebtn.innerText= 'Ta bort'
         noteCard.appendChild(deletebtn)

            const updatebtn = document.createElement('button')
         updatebtn.id = 'update_noteID_'+ note.id
         updatebtn.classList.add('update', 'button')
         updatebtn.innerText = 'Uppdatera'


         deletebtn.addEventListener('click', () => {
            const idDeleteText = updatebtn.id.split('_noteID_')
            const noteDeleteId = idDeleteText[1]
            
            console.log(idDeleteText)
            
            
                        
            api.deleteNotes(noteDeleteId, note.username.toString(),noteDeleteId)
            // func.seeNotes()
        })
         updatebtn.addEventListener('click', () => {
            const idText = updatebtn.id.split('_noteID_')
            const noteId = idText[1]
            htmlEl.noteTextArea.value =noteText.innerText
            console.log(noteId)
            
            updateNote(noteId,note.username.toString())
         })
         noteCard.appendChild(updatebtn)


         htmlEl.noteCardHolder.appendChild(noteCard)


    
}


export function updateNote(id:string,userName:string){
    
func.update()
    
    console.log('provar uppdatera')
    htmlEl.publishUpdate.addEventListener('click', () => {
    const textArea = htmlEl.noteTextArea
    console.log(textArea)
    const updatedNote = textArea.value.toString()
    
        console.log(updatedNote)
        console.log(textArea)
        if(textArea){
            api.updateNote(id,updatedNote, userName)
        }
    })
}



