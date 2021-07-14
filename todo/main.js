const allTab = document.querySelector('#all')
const activeTab = document.querySelector('#active')
const completedTab = document.querySelector('#completed')

const allPage = document.querySelector('#allPage')
const activePage = document.querySelector('#activePage')
const completedPage = document.querySelector('#completedPage')

const delButton =  document.querySelector('.deleteAll')

var current = 'all'

const form = document.querySelector('.form')

var items = []

var listaTareas = []
if(localStorage.getItem('lista')!==null)
    listaTareas = JSON.parse(localStorage.getItem('lista'))


function loadPage(){
    switch (current) {
        case 'all':
            allTab.classList.add('selected')
            activeTab.classList.remove('selected')
            completedTab.classList.remove('selected')

            allPage.classList.remove('hidden')
            activePage.classList.remove('hidden')
            completedPage.classList.add('hidden')
            form.classList.remove('hidden')

            break;
        case 'active':
            allTab.classList.remove('selected')
            activeTab.classList.add('selected')
            completedTab.classList.remove('selected')

            allPage.classList.add('hidden')
            activePage.classList.remove('hidden')
            completedPage.classList.add('hidden')
            form.classList.remove('hidden')
            break;
        case 'completed':
            allTab.classList.remove('selected')
            activeTab.classList.remove('selected')
            completedTab.classList.add('selected')

            allPage.classList.add('hidden')
            activePage.classList.add('hidden')
            completedPage.classList.remove('hidden')
            form.classList.add('hidden')
            break
    
        default:
            break;
    }
    current=='completed'?delButton.style.display="flex":delButton.style.display="none"

    activePage.innerHTML=""
    allPage.innerHTML=""
    completedPage.innerHTML=""
    listaTareas.forEach(e=>{
        if(e!==null){
            e.done?
            allPage.innerHTML+=`
            <div class="list">
                <div class="item item${e.id}">
                    <input checked id="item${e.id}" type="checkbox">
                    <label for="item${e.id}">
                        <div class="check"><img src="icons/done.svg" alt=""></div>
                    </label>
                    <p>${e.desc}</p> 
                </div>
            </div>  
            `:
            activePage.innerHTML+=`
            <div class="list">
                <div class="item item${e.id}">
                    <input  id="item${e.id}" type="checkbox">
                    <label for="item${e.id}">
                        <div class="check"><img src="icons/done.svg" alt=""></div>
                    </label>
                    <p>${e.desc}</p> 
                </div>
            </div>  
            ` 
            e.done?
            completedPage.innerHTML+=`
            <div class="list">
                <div class="item item${e.id}">
                    <input checked id="item${e.id}" type="checkbox">
                    <label for="item${e.id}">
                        <div class="check"><img src="icons/done.svg" alt=""></div>
                    </label>
                    <p>${e.desc}</p>
                </div>
                <p class="trash item${e.id}"><img  src="icons/trash.svg"></p>
            </div>  
            `: null

        }
        
    })
    items = document.querySelectorAll('.item')
    items.forEach(e=>{
        e.querySelector('input').addEventListener('change',e=>{
            
            let item = parseInt(e.target.parentElement.classList[1].substring(4))-1
            e.target.checked?
            listaTareas[item].done = true : listaTareas[item].done = false
                        
            localStorage.setItem('lista',JSON.stringify(listaTareas))
            loadPage() 
        })

        let trash = e.parentElement.querySelector('.trash')

        if(trash!==null){
            trash.addEventListener('click',e=>{
                let item = parseInt(e.target.parentElement.classList[1].substring(4))-1
                listaTareas[item] = null
                localStorage.setItem('lista',JSON.stringify(listaTareas))
                loadPage()
            })
        }
    
        
    })
}


allTab.addEventListener('click',()=>{
    current='all'
    loadPage()
})

activeTab.addEventListener('click',()=>{
    current='active'
    loadPage()
})

completedTab.addEventListener('click',()=>{
    current='completed'
    loadPage()
})

loadPage()
          
const input = form.querySelector('input')
const button = form.querySelector('button')

button.addEventListener('click',()=>{
    if(input.value!=="")
        listaTareas.push({
            id:listaTareas.length+1,
            desc:input.value,
            done:false
        })
    localStorage.setItem('lista',JSON.stringify(listaTareas))
    input.value=""
    loadPage()
})

delButton.addEventListener('click',()=>{
    localStorage.removeItem('lista')
    listaTareas=[]
    loadPage()
})


