import * as element from './htmlElements'


export function seeNotes() {
    //dölj sektion chooseUser,newNote

    element.chooseUser.classList.add('hidden')
    element.newNote.classList.add('hidden')

    element.noteCardList.classList.remove('hidden')
}

export function update() {
    //dölj notecardlist, choose user och knappen punlishnew
    element.noteCardList.classList.add('hidden')
    element.chooseUser.classList.add('hidden')
    element.addNote.classList.add('hidden')
    element.title.classList.add('hidden')


    element.publishUpdate.classList.remove('hidden')
    element.newNote.classList.remove('hidden')
}

export function writeNew() {
    //dölj notecardlist, chooseuser och knappen publishupdate
    element.noteCardList.classList.add('hidden')
    element.chooseUser.classList.add('hidden')
    element.publishUpdate.classList.add('hidden')

    element.title.value = ""

    element.title.classList.remove('hidden')
    element.newNote.classList.remove('hidden')
    element.addNote.classList.remove('hidden')

}

export function addNewBtn() {
    element.chooseUser.classList.add('hidden')
    element.newNote.classList.add('hidden')

    element.noteCardList.classList.add('hidden')
}


