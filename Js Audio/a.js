const songs = [{
    title: '「カワキヲアメク」',
    subtitle: '美波「カワキヲアメク」MV',
    url: '美波「カワキヲアメク」MV.mp3',
    image: 'https://i.ytimg.com/vi/SzRlOJjssmc/maxresdefault.jpg'
},
{
    title: 'This_Game__by_Konomi_Suzuki',
    subtitle: 'No_Game_No_Life_OP_Full__This_Game__by_Konomi_Suzuki',
    url: 'No_Game_No_Life_OP_Full__This_Game__by_Konomi_Suzuki.mp3',
    image: 'https://i1.sndcdn.com/artworks-000095555186-xb2y41-t500x500.jpg'
},
{
    title: 'Added0',
    subtitle: 'Added0',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://picsum.photos/800/800'
},

{
    title: 'Added1',
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


color_input.oninput = e =>{
   let root = document.querySelector(':root')
   root.style.setProperty('--main', e.target.value)
}