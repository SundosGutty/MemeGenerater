'use strict'

var gImg;
var gCurrtMeme;
var gCanvas;
var gCtx;
var gFont = 'IMPACT'


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
    setPage()
    getSelectedImg(imgId)
    var currImgId = getCurrImgId()
    onDisplayMeme(currImgId)
    renderCanvas()

}

function onChangeStokeColor(color) {
    editMeme('strColor', color)
    onDisplayMeme()
}


function onChangeTextSize(num) {
    changeSize(num)
    onDisplayMeme()

}


function editMeme(key, value) {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx][key] = value
}

function onChangeTextColor(color) {
    editMeme('innerColor', color)
    onDisplayMeme()
}

function onAlignText(pos) {
    alignText(pos)
}

function renderCanvas() {
    gCanvas = document.querySelector('#meme-canvas')
    gCtx = gCanvas.getContext('2d')
    // renderImg()
    onDisplayMeme()
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function onDisplayMeme(imgId) {
    var meme = new Image()
    meme.src = onGetMemeUrl(imgId)
    meme.onload = function () {
        gCtx.drawImage(meme, 0, 0, gCanvas.width, gCanvas.height)
        drawText()
    }
}


function onsendInput(elTxt) {
    var meme = getMeme()
    var idx = returnIdx()
    meme.lines[idx].txt = elTxt.value

    drawText(elTxt.value, 30, 50)
    onDisplayMeme()
}


function drawText() {
    for (var i = 0; i < gMeme.lines.length; i++) {
        var textFromMeme = getMemeText(i)
        gCtx.lineWidth = 2
        gCtx.strokeStyle = gMeme.lines[i].strColor
        gCtx.fillStyle = gMeme.lines[i].innerColor
        gCtx.font = `${gMeme.lines[i].size}px ${gFont}`;
        gCtx.textAlign = gMeme.lines[i].align
        var positionX = gMeme.lines[i].positionX
        var positionY = gMeme.lines[i].positionY
    }
    gCtx.fillText(textFromMeme, positionX, positionY)
    gCtx.strokeText(textFromMeme, positionX, positionY)
}





function onGetMemeUrl(id) {
    return getImgById(id).url
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
function onFilterMemes(txt) {
    var imgs = getImgs()
    var newImgs = imgs.filter(function (img) {
        var keyWords = img.keyWords
        console.log(keyWords)
        var isInclude = keyWords.find(keyword => keyword.startsWith(txt.toLowerCase()))
        if (isInclude) return img
    })

    var strHtml = ``
    newImgs.forEach(img => {
        strHtml += `<img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">`
    })
    document.querySelector('.img-container').innerHTML = strHtml
}



