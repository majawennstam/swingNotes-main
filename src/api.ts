import axios from 'axios'
import * as htmlElPop from './htmlElementPopulation'
import { apiNote } from '../interface/apiNote'
import * as htmlEl from './htmlElements'
import * as func from './functions'

axios.defaults.baseURL = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com';
axios.defaults.timeout = 5000;
axios.defaults.headers.common['Content-Type'] = 'application/json';







export function createNote(note: string) {

console.log(note)

  axios.post(`/api/notes`, note)
  .then(function (response) {
      console.log(response);
      
     getNotes(htmlEl.inputUsername.value.toString())
      func.addNewBtn()
    })
    .catch(function (response) {
      console.log(response);
    });


}
//ladda in notes i listan
export function getNotes(userName: string) {
  if(htmlEl.noteCardHolder.hasChildNodes()){
    htmlEl.noteCardHolder.innerHTML = ""
    console.log('tömmer')
}
  axios.get(`/api/notes/${userName}`)

    .then(function (response) {
      const data: apiNote[] = response.data.notes;
      // console.log(data);

      if (data) {

        
          data.forEach(note => {
          // console.log(note)
          // htmlEl.noteCardHolder.appendChild(htmlElPop.fillNotes(note))
          htmlElPop.fillNotes(note)
          func.seeNotes()
        });
        
      
      } else {
        func.writeNew()
      }
    })
    .catch(function (response) {
      console.log(response);
    });
    
}


//uppdatera en anteckning
export function updateNote(id: string, updatedNote: string, userName: string) {
  
  
  const noteToUpdate = {
    note: updatedNote.toString()

  }
  
  axios.put(`/api/notes/${id}`, JSON.stringify(noteToUpdate))
    .then(function (response) {
      const data = response.data
      
      if (data.success) {
        alert('Din Anteckning är uppdaterad!')

     
      
        getNotes(userName)
        
      }


    })
    .catch(function (response) {
      console.log(response);
    });


}


export function deleteNotes(id: string, userName:string,noteToDelete:string) {
  document.getElementById(noteToDelete)?.remove()
console.log('testar')
  axios.delete(`/api/notes/${id}`)
    .then(function (response) {
      const data = response?.data
      console.log(data)
      if (data.success) {
        console.log('nu tar vi vort')
        getNotes(userName)
        
      }
      
    })
    
    .catch(function (response) {
      console.log(response);
    });


}