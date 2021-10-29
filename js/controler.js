'use strict'


const gCanvas = document.querySelector('#meme-canvas')
const gCtx = gCanvas.getContext('2d')
var CurrLine



function onInit() {
    renderGallery()
    renderCanvas()
}


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


//once a picture is clicked - our editor erea appears 
function setPage() {
    document.querySelector('.img-container').style.display = 'none'
    document.querySelector('.canvas-editors').style.display = 'block'
    document.querySelector('.search-sec').style.display = 'none'
    document.querySelector('.editor-container ').style.display = 'flex'
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

//once the upload btn is clicked - input area is shown
function onDisplayInputFile() {
    document.querySelector('.file-input').style.display = 'block'
}


//filter by box filter
function onFilterMemes(theme) {
    let strHtml = ``
    const imgs = getImgs()
    let newImgs = imgs.filter((img) => {
        const keyWords = img.keyWords
        return keyWords.find(keyword => keyword.startsWith(theme.toLowerCase()))
    })

    newImgs.forEach(img => {
        strHtml += `<img class="meme-image" src="${img.url}" id="${img.id}" onclick="onCreateMeme('${img.id}')">`
    })
    document.querySelector('.img-container').innerHTML = strHtml
}








