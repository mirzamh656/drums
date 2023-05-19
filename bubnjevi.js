window.addEventListener("keydown", (e) => { // "e" je objekt koji sadrži info o eventu koji je upravo urađen
    let code = e.keyCode;  //e.keyCode uzima property keyCode 
    let audio = document.querySelector(`audio[data-key="${code}"]`); //selektuje se audio tag 
    let keyElement = document.querySelector(`div[data-key="${code}"]`); //selektuje se audio tag

    if (!keyElement) {      
        return; // neće se ništa desit ako nije stisnuto odgovarajuce dugme
    }

    audio.currentTime = 0;
    audio.play(); // puštanje zvuka
})