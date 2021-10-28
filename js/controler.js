'use strict'

var gImg;
// var gCurrtMeme;
const gCanvas = document.querySelector('#meme-canvas')
const gCtx = gCanvas.getContext('2d')
var gFont = 'Impact'
gCanvas.width = 450
gCanvas.height = 450
var CurrLine;




function onInit() {
    renderGallery()
    renderCanvas()
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

function onChangeFont(value) {
    changeFont(value)
    renderCanvas()
}

function onChangeTextSize(num) {
    changeSize(num)
    renderCanvas()

}

function onChangeTextColor(color) {
    editMeme('innerColor', color)
    renderCanvas()
}

function onAlignText(pos) {
    alignText(pos)
    renderCanvas()
}



function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function renderCanvas() {
    var meme = new Image()
    meme.src = getMemeUrl()
    meme.onload = function () {
        gCtx.drawImage(meme, 0, 0, gCanvas.width, gCanvas.height)
        renderText()
    }
}


function renderText() {
    var meme = getMeme()
    var idx = getLineIdx()
    var currLine = meme.lines[idx]
    var lines = meme.lines
    if (lines.length === 0) return
    meme.lines.forEach(line => drawText(line))
    document.querySelector('.userTxt').value = currLine.txt
}


// function drawRect() {
//     var heightText = currLine.size
//     var y = positionY
//     gCtx.beginPath()
//     gCtx.rect(10, y - heightText, gCanvas.width - 20, heightText + 10)
//     gCtx.strokeStyle = 'black'
//     gCtx.stroke()

// }

function drawText(currLine) {
    gCtx.lineWidth = 2
    gCtx.fillStyle = currLine.innerColor
    gCtx.font = `${currLine.size}px ${gFont}`
    gCtx.textAlign = currLine.align
    gCtx.strokeStyle = currLine.strColor
    gCtx.save()

    var positionX = currLine.positionX
    var positionY = currLine.positionY


    gCtx.fillText(currLine.txt, positionX, positionY)
    gCtx.restore()
    gCtx.strokeText(currLine.txt, positionX, positionY)

}

function onsendInput(elTxt) {
    var meme = getMeme()
    var idx = returnIdx()
    meme.lines[idx].txt = elTxt.value
    renderCanvas()
}

// function onSwitchLines() {


// }

function onAddLine() {
    document.querySelector('.userTxt').value = ''
    addLine()
    renderCanvas()
}


function onRemoveText() {
    document.querySelector('.userTxt').value = ''
    removeLine()
    renderCanvas()
}


//delete the input once I click enter
document.querySelector('#text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.userTxt').value = ''
    }
})




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








