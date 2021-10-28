'use strict'

var gImg;
var gCurrtMeme;
const gCanvas = document.querySelector('#meme-canvas')
const gCtx = gCanvas.getContext('2d')
var gFont = 'IMPACT'
gCanvas.width = 450
gCanvas.height = 450



function onInit() {
    renderGallery()
    renderCanvas()
    gCanvas.width = 450
    gCanvas.height = 450

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
    getSelectedImg(imgId)
    renderCanvas()
    setPage()
}


function onChangeStokeColor(color) {
    editMeme('strColor', color)
    renderCanvas()
}


function onChangeTextSize(num) {
    changeSize(num)
    renderCanvas()

}


function editMeme(key, value) {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx][key] = value
}

function onChangeTextColor(color) {
    editMeme('innerColor', color)
    renderCanvas()
}

function onAlignText(pos) {
    alignText(pos)
    renderCanvas()
}


function onChangeFont(value) {

}

function renderCanvas() {
    onDisplayMeme()
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function onDisplayMeme() {
    var meme = new Image()
    meme.src = getMemeUrl()
    meme.onload = function () {
        gCtx.drawImage(meme, 0, 0, gCanvas.width, gCanvas.height)
        drawText()
    }
}

function onChangeFont(value) {

}

function onsendInput(elTxt) {
    var meme = getMeme()
    var idx = returnIdx()
    meme.lines[idx].txt = elTxt.value
    renderCanvas()
}


function drawText() {
    var meme = getMeme()
    var idx = getLineIdx()
    var currLine = meme.lines[idx]
    gCtx.lineWidth = 2
    gCtx.fillStyle = currLine.innerColor
    gCtx.font = `${currLine.size}px ${gFont}`
    gCtx.textAlign = currLine.align
    gCtx.strokeStyle = currLine.strColor
    gCtx.save()

    var positionX = currLine.positionX
    var positionY = currLine.positionY

    gCtx.beginPath()
    gCtx.rect(10, positionY - currLine.size, gCanvas.width - 50, currLine.size + 10)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()

    gCtx.fillText(currLine.txt, positionX, positionY)
    gCtx.restore()
    gCtx.strokeText(currLine.txt, positionX, positionY)
}



function onRemoveText() {
    removeLine()
    renderCanvas()

}


function onClearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}


function setPage() {
    document.querySelector('.img-container').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'block'
    document.querySelector('.canvas-editors').style.display = 'block'
    document.querySelector('.search-sec').style.display = 'none'
}



//To keep track of the link we are on
const activePage = window.location.pathname
const navLinks = document.querySelectorAll('a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})


//TO DO - SET-lANG
function onSetLang(lang) {
    if (lang === 'HE') console.log('he')
    if (lang === 'EN') console.log('en')
}


//to Do update e-mail
function OnGetEmailLink() {
    var userEmailInput = document.querySelector('[name="user-email"]').value
    var userSubInput = document.querySelector('[name="user-subject"]').value
    var userMsgInput = document.querySelector('[name="massage"]').value
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userEmailInput}.com&su=${userSubInput}&body=${userMsgInput}`)
}




function toggleMenu() {
    document.body.classList.toggle('menu-open')
}


function onDisplayInputFile() {
    document.querySelector('.file-input').style.display = 'block'
}


//filter by box filter
function onFilterMemes(theme) {
    var strHtml = ``
    var imgs = getImgs()
    var newImgs = imgs.filter((img) => {
        var keyWords = img.keyWords
        return keyWords.find(keyword => keyword.startsWith(theme.toLowerCase()))
    })

    newImgs.forEach(img => {
        strHtml += `<img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">`
    })
    document.querySelector('.img-container').innerHTML = strHtml

}








