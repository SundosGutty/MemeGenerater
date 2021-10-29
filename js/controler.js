'use strict'



function onInit() {
    gCanvas = document.querySelector('#meme-canvas')
    gCtx = gCanvas.getContext('2d')
    renderGallery()
    renderCanvas()
    renderKeyWords()
}


// function init(){

// }


function renderGallery() {
    const images = getImgs()
    let strHtmls = images.map(function (img) {
        return `  
        <img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">
       `
    })
    document.querySelector('.img-container').innerHTML = strHtmls.join('')
}



//delete the input once I click enter
document.querySelector('#text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.userTxt').value = ''
    }
})


//once a picture is clicked - our editor area appears 
function setPage() {
    document.querySelector('.img-container').style.display = 'none'
    document.querySelector('.canvas-editors').style.display = 'block'
    document.querySelector('.search-sec').style.display = 'none'
    document.querySelector('.editor-container ').style.display = 'flex'
}



//To keep track of the link we are on
const activePage = window.location.pathname
const navLinks = document.querySelectorAll('.navbar a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
})


//TO DO - SET-lANG
function onSetLang(lang) {
    if (lang === 'HE') console.log('he')
    if (lang === 'EN') console.log('en')
}

//upload img
//to fix
function onImgInput(ev) {
    clearCanvas()
    loadImageFromInput(ev, renderImg)
    gCtx.save()
    renderCanvas()
    gCtx.restore()
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

//once the upload btn is clicked - input area is shown
function onDisplayInputFile() {
    document.querySelector('.file-input').style.display = 'block'
}



function onclickFilter(theme) {
    onFilterMemes(theme)
    renderKeyWords()
}

//filter by box filter & keyword 
function onFilterMemes(theme) {
    let strHtml = ``
    const imgs = getImgs()
    var keyWords = getKeyWords()
    var keyWordIdx = getKeywordId(theme)
    if (keyWords[keyWordIdx].category === theme) modifyKeyWordSize(keyWordIdx)
    let newImgs = imgs.filter((img) => {
        const keyWords = img.keyWords
        return keyWords.find(keyword => keyword.startsWith(theme.toLowerCase()))
    })
    newImgs.forEach(img => {
        strHtml += `<img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">`
    })
    document.querySelector('.img-container').innerHTML = strHtml
    document.querySelector('.input-bar').value = ''
}


//render Keywords
function renderKeyWords() {
    var keyWords = getKeyWords()
    var btnHtml = ''

    keyWords.map(function (keyWord) {
        btnHtml += `<button class="filter-btn" style="font-size: ${keyWord.fontSize + 10}px;" onclick="onclickFilter(this.innerHTML)">${keyWord.category}</button>`
    })

    document.querySelector('.search-words').innerHTML = btnHtml
    var elBtn = document.querySelector('.filter-btn')

}








