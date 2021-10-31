'use strict'

var gCanvas = document.querySelector('#meme-canvas')
var gCtx = gCanvas.getContext('2d')


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

function onMoveLineUp(num) {
    moveLineUp(num)
    renderCanvas()
}


function onMoveLineDown(num) {
    moveLineDown(num)
    renderCanvas()
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function renderCanvas() {
    const img = new Image()
    img.src = getImgUrl()
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderText()
    }
}


function renderText() {
    const meme = getMeme()
    const idx = getLineIdx()
    const currLine = meme.lines[idx]
    const lines = meme.lines
    if (lines.length === 0) return
    meme.lines.forEach(line => drawText(line))
    document.querySelector('.userTxt').value = currLine.txt
}


function drawRect(txtStartPos, txtEndPos, txtSize , txtBottom) {
    let startX = gCanvas.width / 2 - txtStartPos - 10
    let endX = txtEndPos + gCanvas.width / 2
    let startY = txtSize - 30
    let endY = txtBottom + 10

    gCtx.beginPath()
    gCtx.rect(startX, startY, endX, endY)
    gCtx.strokeStyle = 'black'
    gCtx.setLineDash([6, 2])
    gCtx.stroke()
}





function onSwitchFocus() {
    switchFocus()
    renderCanvas()
}


function drawText(currLine) {
    const idx = getLineIdxById(currLine.id)
    const txtStartPos = gCtx.measureText(currLine.txt).actualBoundingBoxLeft
    const txtEndPos = gCtx.measureText(currLine.txt).actualBoundingBoxRight
    const txtBottom = gCtx.measureText(currLine.txt).fontBoundingBoxAscent
  
    gCtx.lineWidth = 2
    gCtx.font = `${currLine.size}px ${currLine.font}`
    gCtx.textAlign = currLine.align
    gCtx.strokeStyle = currLine.strColor
    gCtx.fillStyle = currLine.innerColor
    gCtx.save()
    const positionX = currLine.positionX
    const positionY = currLine.positionY

    if (currLine.txt && idx === gMeme.selectedLineIdx) {
        drawRect(txtStartPos, positionX, positionY, txtBottom)
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