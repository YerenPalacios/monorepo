const loading =  document.querySelector('#loading')


const search = document.querySelector('#searchBox')
const searchInput = search.querySelector('input')
const searchButton = search.querySelector('button')
const today = document.querySelector('#today')
const actualTemp = document.querySelector('#actualTemp')
const condition = document.querySelector('#condition')
const actualPlace =  document.querySelector('#actualPlace')
const actualIcon =  document.querySelector('#actualIcon')
const actualWind =  document.querySelector('#actualWind')
const actualHumidity =  document.querySelector('#actualHumidity')
const actualHumidityPer =  document.querySelector('#actualHumidityPer')
const actualPresure =  document.querySelector('#actualPresure')
const actualVis =  document.querySelector('#actualVis')
const actualWinDir =  document.querySelector('#actualWinDir')

const forecast = document.querySelector('#forecast')

const inputCelcius = document.querySelector('#celcius')

var celcius = inputCelcius.checked


var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

var dias = new Array ("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

const api = "https://api.weatherapi.com/v1/forecast.json?key=2a70bdbd05f74860a21204619211307&days=5&q="

const placesDiv = document.querySelector('#places') 

var wData = {}

const searchLocaition = async (url) =>{
    
    const req = await fetch(url)
   
    const json = await req.json()


    if(json.error){
        console.log(json.error.message)
    } else {
        cargarNombre(json)
        wData = json
    }
    
    // if(json.error === undefined){
    //     cargarTiempo(json)
    // }

}

const cargarNombre = (data)=>{

    console.log(data)
    placesDiv.innerHTML = `
        <div class="place">
            <p>${data.location.country} / ${data.location.name}</p>
            <img src="icons/more.svg">
        </div>`
    
    
}
placesDiv.addEventListener('click',()=>{
    cargarTiempo(wData)
    document.querySelector('#toggle-search').click()
})

const cargarTiempo = (data)=>{
    let hoy = new Date()
        
        let estado = data.current.condition.text
        condition.innerHTML=estado
        actualIcon.src=data.current.condition.icon


        
        celcius?
            actualTemp.innerHTML=`<span>${data.current.temp_c}</span>`+ "°C" :
            actualTemp.innerHTML=`<span>${data.current.temp_f}</span>`+"°F"
        
        actualPlace.innerHTML = data.location.name+" / "+ data.location.country
        actualWind.innerHTML = data.current.wind_mph
        actualHumidity.innerHTML = data.current.humidity
        actualVis.innerHTML = data.current.vis_km
        actualPresure.innerHTML = data.current.pressure_mb
        actualWinDir.innerHTML= data.current.wind_dir
        actualHumidityPer.style = "width:"+ data.current.humidity+"%"
        today.innerHTML="Hoy • "+dias[hoy.getDay()]+" "+hoy.getDate() +" de "+meses[hoy.getMonth()]+" de "+hoy.getFullYear()
        forecast.innerHTML=""
        data.forecast.forecastday.forEach(e=> {

            var date = new Date(e.date)

        celcius?

            forecast.innerHTML += `
                <div class="card">
                    <p>${date.getDate()} de ${meses[date.getMonth()]}</p>
                    <img src="${e.day.condition.icon}" alt="icono">
                    <p class="grados">
                        <span>${e.day.maxtemp_c}°C</span>
                        <span>${e.day.mintemp_c}°C</span>
                    </p>
                </div>
            ` : 
            forecast.innerHTML += `
                <div class="card">
                    <p>${date.getDate()} de ${meses[date.getMonth()]}</p>
                    <img src="${e.day.condition.icon}" alt="icono">
                    <p class="grados">
                        <span>${e.day.maxtemp_f}°F</span>
                        <span>${e.day.mintemp_f}°F</span>
                    </p>
                </div>
            `
        
        });
}


try {
    fetch(api+'bogota')
    .then(req => req.json())
    .then(data =>{
        setTimeout(() => {
            loading.style.display='none'
        }, 500);
        
        wData=data
        cargarTiempo(data)
    })
    
} catch (error) {
    loading.innerHTML = `
        <img src="icons/fail.svg">
        <p>Error al cargar datos</p>
    `
}



searchInput.addEventListener('input',e=>{
   searchLocaition(api+e.target.value)
})


const here = document.querySelector('#here')
here.addEventListener('click',()=>{
    const loadHere = async ()=>{
        const res = await fetch(api+"auto:ip")
        const json = await res.json()
        cargarTiempo(json)
    }
    loadHere()
    
})

const cambiarGrados = ()=>{
    celcius = !celcius
    cargarTiempo(wData)

    grados.querySelectorAll('label').forEach(e=>{
        if(e.classList[0] === 'actual'){
            e.classList.remove('actual')
        } else {
            e.classList.add('actual')
        }
    })

}

const grados = document.querySelector('#grados')


inputCelcius.addEventListener('click',()=>{
    cambiarGrados()
})