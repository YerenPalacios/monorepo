const songs = [{
    title: 'Moonlight_Sonata',
    subtitle: 'Beethoven',
    url: 'Beethoven_-_Moonlight_Sonata_(FULL).mp3',
    image: 'https://images3.alphacoders.com/100/thumbbig-100519.webp'
},
{
    title: 'Moonlight_Sonata_3rd_Movement',
    subtitle: 'Beethoven',
    url: 'Beethoven_–_Moonlight_Sonata_3rd_Movement.mp3',
    image: 'https://images8.alphacoders.com/793/thumbbig-793713.webp'
},
{
    title: 'Random 0',
    subtitle: 'Added0',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://picsum.photos/800/800'
},

{
    title: 'Random 1',
    subtitle: 'Added1',
    url: 'https://www.soundhelix.com//examples/mp3/SoundHelix-Song-14.mp3',
    image: 'https://picsum.photos/800/810'
}]


class SongInterface {
    constructor() {
        this.song_id = 0
        this.songs = []

        this.playButton = play
        this.nextButton = next
        this.previousButton = previous
        this.timeControl = timeControl
        this.allTime = allTime
        this.currentTime = currentTime
        this.image = image
        this.title = title
        this.subTitle = subtitle
    }

    loadSongs(songs_dict) {
        this.songs = songs_dict.map(i => ({ ...i, audio: new Audio(i.url) }))

        this.audio = songs[0].audio
        this.setAudio()
        this.loadButtonEvents()
    }

    loadButtonEvents() {
        this.timeControl.addEventListener('input', (e) => this.handleTimeMove(e, this.audio))
        this.playButton.addEventListener('click', () => {
            this.audio.paused ? this.audio.play() : this.audio.pause()
        })
        this.nextButton.addEventListener('click', () => this.next())
        this.previousButton.addEventListener('click', () => this.previous())
    }

    handleTimeMove(e, audio) {
        audio.currentTime = (e.target.value * audio.duration / 100)
    }

    setTitle(title) {
        this.title.innerHTML = title
    }
    setSubtitle(subtitle) {
        this.subTitle.innerHTML = subtitle
    }
    setCurrentTime(current, duration) {
        this.timeControl.value = current * 100 / duration
        this.currentTime.innerHTML = secondsToTime(this.audio.currentTime)
    }
    setPlaying() {
        let summary = document.getElementById('song_summary-' + this.song_id)
        summary.innerHTML = '<img alt="..." src="sound-wave.gif"/>'
        this.image.parentElement.style.animationPlayState = 'running'
        this.playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
    }
    setPaused() {
        let summary = document.getElementById('song_summary-' + this.song_id)
        summary.innerHTML = ''
        this.image.parentElement.style.animationPlayState = 'paused'
        this.playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
    }

    setAudio() {
        let song = this.songs[this.song_id]
        this.audio = this.songs[this.song_id].audio
        addAudioEvents(song, this)
        this.allTime.innerHTML = secondsToTime(song.audio.duration)
        this.image.src = song.image
        this.title.innerHTML = song.title
        this.subTitle.innerHTML = song.subtitle
        this.timeControl.addEventListener('input', (e) => this.handleTimeMove(e, this.audio))
    }

    next() {
        let summary = document.getElementById('song_summary-' + this.song_id)
        summary && (summary.innerHTML = '')

        this.audio.pause()
        this.audio.currentTime = 0
        if (this.song_id !== this.songs.length) {
            this.song_id++
            this.setAudio()
        }
    }

    previous() {
        let summary = document.getElementById('song_summary-' + this.song_id)
        summary && (summary.innerHTML = '')

        this.audio.pause()
        this.audio.currentTime = 0
        if (this.song_id !== 0) {
            this.song_id--
            this.setAudio()
        }
    }
}

const audioInterface = new SongInterface()
audioInterface.loadSongs(songs)

//audio Events
function addAudioEvents(song, interface) {
    song.audio.addEventListener('loadeddata', () => {
        interface.allTime.innerHTML = secondsToTime(song.audio.duration)
        interface.image.src = song.image
        interface.title.innerHTML = song.title
        interface.subTitle.innerHTML = song.subtitle
    })

    song.audio.addEventListener("play", () => interface.setPlaying());
    song.audio.addEventListener("pause", () => interface.setPaused());

    song.audio.ontimeupdate = () => {
        interface.setCurrentTime(song.audio.currentTime, song.audio.duration)
    }
}

// utils
function secondsToTime(secs) {
    // var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    return zeroPad(minutes) + ":" + zeroPad(seconds);
}

function zeroPad(num, numZeros = 2) {
    var n = Math.abs(num);
    var zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
    var zeroString = Math.pow(10, zeros).toString().substr(1);
    if (num < 0) {
        zeroString = '-' + zeroString;
    }

    return zeroString + n;
}

const item = (i, k) => {
    return `
        <details><summary >${i.title}<div class="actual_song_icon" id='song_summary-${k}'></div></summary>
        <section class="content">
        <div>
            <p>${i.subtitle}</p>
            <p>${i.url}</p>
            <p>${i.image}</p>
        </div>
        </section>
        </details>
    `
}

function printlist() {
    songs_container.innerHTML = ''
    songs.forEach((i, k) => {
        songs_container.innerHTML += item(i, k)
    })
}

printlist()

songs_form.onsubmit = (e) => {
    e.preventDefault()
    let form = new FormData(e.target)

    const a = new Audio(form.get('song'))
    a.onerror = () => {
        e.target['song'].value = ''
        e.target['song'].classList.add('bad')
    }
    a.onloadeddata = () => {
        songs.push({
            title: form.get('title'),
            subtitle: form.get('subtitle'),
            url: form.get('song'),
            image: form.get('image')
        })
        audioInterface.songs = songs.map(i => ({ ...i, audio: new Audio(i.url) }))
        printlist()
    }
}


songslist.visible = true
songslist.hidde = () => {
    songslist.visible = false
    songslist.classList.add('showing')
    songslist.classList.remove('removing')
}
songslist.show = () => {
    songslist.visible = true
    songslist.classList.add('removing')
    songslist.classList.remove('showing')
}

menu_visible.onclick = () => {
    songslist.visible ? songslist.hidde() : songslist.show()
}

// set color with localstorage
const root = document.querySelector(':root')

const themes = {
    light: {
        '--main': '#255fff',
        '--bg': '#efefef',
        '--bg2': '#e8e8e8',
        '--input-bg': '#cfcfcf',
        '--main-shadow': '9px 8px 9px -5px #00000063, -7px -7px 16px -5px #fff',
        '--button-shadow': '6px 6px 9px -5px #00000063, -7px -7px 16px -5px #fff',
        '--input-shadow': '5px 5px 9px -6px #00000063 inset, -7px -7px 9px -5px #fff inset',
        '--icon-brightness': 'brightness(0.95)',
    },
    dark: {
        '--main': '#255fff',
        '--bg': '#121212',
        '--bg2': '#191919',
        '--input-bg': '#232323',
        '--main-shadow': '9px 8px 9px -5px #141414, -7px -7px 16px -5px #58585863',
        '--button-shadow': '6px 6px 9px -5px #141414, -7px -7px 16px -5px #58585863',
        '--input-shadow': '5px 5px 9px -6px #101010 inset, -7px -7px 9px -5px #58585863 inset',
        '--icon-brightness': 'brightness(0.93) invert(1)',
    }
}


const setMainColor = () => {
    let main_color = localStorage.getItem('main-color')
    main_color && main_color !== '' && (
        root.style.setProperty('--main', main_color),
        color_input.value = main_color
    )
}
setMainColor()

color_input.oninput = e => {
    localStorage.setItem('main-color', e.target.value)
    setMainColor()
}


const setTheme = ()=>{
    let theme = localStorage.getItem('theme')
    theme = theme && theme!==''? theme : 'light'

    root.style.setProperty('--bg', themes[theme]['--bg'])
    root.style.setProperty('--bg2', themes[theme]['--bg2'])
    root.style.setProperty('--input-bg', themes[theme]['--input-bg'])
    root.style.setProperty('--main-shadow', themes[theme]['--main-shadow'])
    root.style.setProperty('--button-shadow', themes[theme]['--button-shadow'])
    root.style.setProperty('--input-shadow', themes[theme]['--input-shadow'])
    root.style.setProperty('--button-shadow', themes[theme]['--button-shadow'])
    root.style.setProperty('--icon-brightness', themes[theme]['--icon-brightness'])
}
setTheme()

theme_input.onchange = e =>{
    localStorage.setItem('theme', e.target.checked?'dark':'light')
    setTheme()
}

