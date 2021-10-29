'use strict'

let gFont = 'Impact'
var gCanvas = document.querySelector('#meme-canvas')
var gCtx = gCanvas.getContext('2d')
var CurrLine


function onCreateMeme(imgId) {
    getSelectedImg(imgId)
    renderCanvas()
    setPage()
}

function onChangeOutlineColor(color) {
    changeOutlineColor(color)
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

function onChangeFillColor(color) {
    changeFillColor(color)
    renderCanvas()
}

function onAlignText(pos) {
    alignText(pos)
    renderCanvas()
}

function onMoveLineUp(num){
    moveLineUp(num)
    renderCanvas()
}


function onMoveLineDown(num){
    moveLineDown(num)
    renderCanvas()
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function renderCanvas() {
    var img = new Image()
    img.src = getImgUrl()
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
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


function drawRect(x, y, size) {
    gCtx.beginPath()
    gCtx.rect(10, y - size, gCanvas.width - 20, size + 10)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}


function onSwitchFocus() {
    switchFocus()
    renderCanvas()
}

function drawText(currLine) {
    gCtx.lineWidth = 1
    gCtx.fillStyle = currLine.innerColor
    gCtx.font = `${currLine.size}px ${gFont}`
    gCtx.textAlign = currLine.align
    gCtx.strokeStyle = currLine.strColor
    gCtx.save()
    var positionX = currLine.positionX
    var positionY = currLine.positionY

    var idx = getLineIdxById(currLine.id)
    if (currLine.txt && idx === gMeme.selectedLineIdx) {
        drawRect(positionX, positionY, currLine.size)
    }
    gCtx.fillText(currLine.txt, positionX, positionY)
    gCtx.restore()
    gCtx.strokeText(currLine.txt, positionX, positionY)

}

function onsendInput(userTxt) {
    sendInput(userTxt)
    renderCanvas()
}


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