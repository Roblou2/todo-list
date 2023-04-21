import save from './save.js'
import todoItem from './make-item.js'
import select from './onchange.js'
import showItems from './items.js'
import remove from './remove.js'
import makeNewProj from './new-project.js'
import refresh from './refresh.js'
import deleteProj from './delete-project.js'
import addToFavs from './favs.js'
import dueNow from './due-now.js'
import seven from './due-in-seven.js'
import makeTable from './make-table.js'
import showFavs from './show-favs.js'
import editItemAlt from './edit-alt.js'
import allTasks from './show-all.js'
import changeTitle from './project-titles.js'
import isMobAll from './is-mob-show-all.js'
import isDeskAll from './is-desk-show-all.js'
import navOff from './nav-off.js'
import './style.css';
import './MaterialDesign-Webfont-master/css/materialdesignicons.css'
import store from './local-storage.js'
import getLocalData from './use-local.js'
import onClose from './on-close.js'

window.getTest = store

//global inputs
window.itemName = document.getElementById('title')
window.des = document.getElementById('des')
window.dueDate = document.getElementById('date')
window.priority = document.getElementById('priority')
window.project = document.getElementById('project')

window.homeMenu = document.querySelector('.home-menu')
window.favsDisplay = document.querySelector('.favs-display')
window.dueToday = document.querySelector('.today')
window.dueInSeven = document.querySelector('.seven')
window.showAll = document.querySelector('.all-tasks')
window.mDevice = window.matchMedia('(max-width: 799px)')
window.deskDevice = window.matchMedia('(min-width: 800px)')

window.projMenu = document.querySelector('.projects') // var for project menu
window.deleteProject = document.querySelector('button.delete-proj')
window.itemsMenu = document.querySelector('.list-display .items-display')
window.dash = document.querySelector('button.update')
window.tableTitle = document.querySelector('.table-title')
window.burgerMenu = document.querySelector('.burger-menu')
window.makeProj = document.querySelector('.project-menu')


window.newProj = document.querySelector('.new-project-field') //var for all new project divs
window.newProjForm = document.getElementById('new-project') //var for new project form
window.newProjInput = document.querySelector('.proj-input-text')
window.newItemFields = document.querySelector('.form-items') //var for new to-do item creation fields
window.todoFields = document.getElementById('to-do-fields')
window.newProjButton = document.querySelector('button.add-new-proj')
window.saveSession = document.querySelector('button.save-session')
window.wipe = document.querySelector('button.wipe-storage')



//global variables

window.itemsArr = [] //array of to-do objects. Can organise items by project name property

window.favsArr = []

//table for displaying items
window.table = document.querySelector('table.item-list')

window.addToList = document.querySelector('button.save-item')
const nav = document.querySelector('#nav')



//DOM functions


//disable default form behaviour for new project form and add input to project menu

window.newProjForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let newOption = document.createElement('option')
    let newOptionTwo = document.createElement('option')


    //for the todo table display
    newOptionTwo.value = window.newProjInput.value
    newOptionTwo.textContent=`${window.newProjInput.value}`
    window.itemsMenu.appendChild(newOptionTwo)

    newOption.value = window.newProjInput.value
    newOption.textContent=`${window.newProjInput.value}`
    window.projMenu.appendChild(newOption)


projMenu.selectedIndex = 0;
    window.newProj.setAttribute('style', 'display: none;')

  })
  
//prevent default for to-do form
window.todoFields.addEventListener('submit', (e) => {
  e.preventDefault()
})


addToList.addEventListener('click', save)



  //toggles display on nav for whatever project is selected
window.projMenu.addEventListener('change', select)

//display project selected 


window.deleteProject.addEventListener('click', deleteProj)

window.itemsMenu.addEventListener('change', showItems)


window.dash.addEventListener('click', refresh)

window.favsDisplay.addEventListener('click', showFavs)

window.dueToday.addEventListener('click', dueNow)

window.dueInSeven.addEventListener('click', seven)

window.showAll.addEventListener('click', allTasks)

window.burgerMenu.addEventListener('click', navOff)


window.onload = isDeskAll()
window.onload = getLocalData()

window.saveSession.addEventListener('click', store)
window.wipe.addEventListener('click', function () {
  localStorage.clear()
  return location.reload()
})

