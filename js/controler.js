'use strict'

var gImg;
var gCurrtMeme;
var gCanvas;
var gCtx;
var dataURL;

function onInit() {
    renderGallery()
    renderCanvas()
    gCanvas.width = 450
    gCanvas.height = 450
    // shareToExternalSorce()
}


function renderGallery() {
    var images = getImgs()
    var strHtmls = images.map(function (img) {
        return `  
        <img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">
       `
    })
    document.querySelector('.img-container').innerHTML = strHtmls.join('');
}



function onCreateMeme(imgId) {
    setPage()
    getSelectedImg(imgId)
    var currImgId = getCurrImgId()
    onDisplayMeme(currImgId)
    renderCanvas()
    
}


function onAddLine() {
    setLine()
    onDisplayMeme()
}


function onChangeStokeColor() {

}


function renderCanvas() {
    gCanvas = document.querySelector('#meme-canvas')
    gCtx = gCanvas.getContext('2d')
    renderImg()
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function onDisplayMeme(imgId) {
    var meme = getMeme()
    var idx = returnIdx()
    var txt = meme.lines[idx].txt
    var meme = new Image()
    meme.src = onGetMemeUrl(imgId)
    meme.onload = function () {
        gCtx.drawImage(meme, 0, 0, gCanvas.width, gCanvas.height)
        drawText(txt, 10, 50)
    }
}


function onsendInput(elTxt) {
    var meme = getMeme()
    var idx = returnIdx()
    meme.lines[idx].txt = elTxt.value
    console.log(elTxt.value)

    drawText(elTxt.value, 30, 50)
    onDisplayMeme()
}


function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px IMPACT'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}

// function onChangeStokeColor(color) {
//     setStroke(color)
//     onDisplayMeme()
// }

// function onChangeTextColor(color){
//   setTxtColor(color)
//   onDisplayMeme()
// }

function onGetMemeUrl(id) {
    return getImgById(id).url
}


function onClearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}


function setPage() {
    document.querySelector('.img-container').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'block'
    document.querySelector('.canvas-editors').style.display = 'block'
}



//To keep track of the link we are on
const activePage = window.location.pathname
const navLinks = document.querySelectorAll('a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})

//TO DO - FILTER
function onFilterMemes(val) {
    if (val === 'Funny') console.log('Funny')
    if (val === 'Animal') console.log('Animal')
    if (val === 'Bad') console.log('Bad')
    if (val === 'Funny') console.log('Funny')
    if (val === 'Funny') console.log('Funny')

}

//TO DO - SET-lANG
function onSetLang(lang) {
    if (lang === 'HE') console.log('he')
    if (lang === 'EN') console.log('en')
    if (lang === 'AR') console.log('ar')
    if (lang === 'FR') console.log('fr')
}



function OnGetEmailLink() {
    var userEmailInput = document.querySelector('[name="user-email"]').value
    var userSubInput = document.querySelector('[name="user-subject"]').value
    var userMsgInput = document.querySelector('[name="massage"]').value
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmailInput}.com&su=${userSubInput}&body=${userMsgInput}`)
}




function toggleMenu() {
    document.body.classList.toggle('menu-open')
}


function onDisplayInputFile(){
    document.querySelector('.file-input').style.display = 'block'
}