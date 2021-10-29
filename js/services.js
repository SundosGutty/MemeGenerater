'use strict'
var gImg;
gCanvas.width = 450
gCanvas.height = 450

let gKeywords = [
    {
        category: 'funny',
        fontSize: 13
    },
    {
        category: 'celebrity',
        fontSize: 4
    },
    {
        category: 'politic',
        fontSize: 2
    },
    {
        category: 'animal',
        fontSize: 3
    },
    {
        category: 'animation',
        fontSize: 1
    },
    {
        category: 'baby',
        fontSize: 4
    },
    {
        category: 'sport',
        fontSize: 1
    },
    {
        category: 'sarcasm',
        fontSize: 9
    }
]


let gImages = [
    {
        id: 1,
        url: 'meme-imgs (square)/1.jpg',
        keyWords: ['politics', 'funny', 'sarcasm']
    },
    {
        id: 2,
        url: 'meme-imgs (square)/2.jpg',
        keyWords: ['cute', 'animals']
    },
    {
        id: 3,
        url: 'meme-imgs (square)/3.jpg',
        keyWords: ['cute', 'animals', 'baby']
    },
    {
        id: 4,
        url: 'meme-imgs (square)/4.jpg',
        keyWords: ['funny', 'animal']
    },
    {
        id: 5,
        url: 'meme-imgs (square)/5.jpg',
        keyWords: ['funny', 'baby']
    },
    {
        id: 6,
        url: 'meme-imgs (square)/6.jpg',
        keyWords: ['funny', 'sarcasm', 'akward']
    },
    {
        id: 7,
        url: 'meme-imgs (square)/7.jpg',
        keyWords: ['crazy', 'funny', 'baby']
    },
    {
        id: 8,
        url: 'meme-imgs (square)/8.jpg',
        keyWords: ['funny', 'sarcasm']
    },
    {
        id: 9,
        url: 'meme-imgs (square)/9.jpg',
        keyWords: ['baby', 'funny', 'sarcasm']
    },
    {
        id: 10,
        url: 'meme-imgs (square)/10.jpg',
        keyWords: ['politics', 'happy', 'funny']
    },
    {
        id: 11,
        url: 'meme-imgs (square)/11.jpg',
        keyWords: ['sports', 'akward', 'funny']
    },
    {
        id: 12,
        url: 'meme-imgs (square)/12.jpg',
        keyWords: ['funny', 'sarcasm']
    },
    {
        id: 13,
        url: 'meme-imgs (square)/13.jpg',
        keyWords: ['celebrity', 'sarcasm']
    },
    {
        id: 14,
        url: 'meme-imgs (square)/14.jpg',
        keyWords: ['scary', 'celebraty']
    },
    {
        id: 15,
        url: 'meme-imgs (square)/15.jpg',
        keyWords: ['celebraty', 'sarcasm']
    },
    {
        id: 16,
        url: 'meme-imgs (square)/16.jpg',
        keyWords: ['celebraty', 'funny', 'happy']
    },
    {
        id: 17,
        url: 'meme-imgs (square)/17.jpg',
        keyWords: ['politics', 'funny', 'sarcasm']
    },
    {
        id: 18,
        url: 'meme-imgs (square)/18.jpg',
        keyWords: ['animation', 'funny', 'sarcasm']
    }
]




let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            font: 'Impact',
            size: 26,
            align: 'center',
            innerColor: 'white',
            strColor: 'black',
            positionX: 225,
            positionY: 30,
            id: getRandomeId()
        },
        {
            txt: '',
            size: 26,
            font: 'Impact',
            align: 'center',
            innerColor: 'white',
            strColor: 'black',
            positionX: 225,
            positionY: 400,
            id: getRandomeId()
        }
    ]

}


//edit the canvas

function switchFocus() {
    if (gMeme.lines.length === 0) return
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}


function addLine() {
    let line = {
        txt: '',
        size: 26,
        align: 'center',
        font: 'impact',
        innerColor: 'white',
        strColor: 'black',
        positionX: 225,
        positionY: 225,
        id: getRandomeId()
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx++
}


function changeOutlineColor(color) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].strColor = color

}


function changeFillColor(color) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].innerColor = color

}


function changeFont(font) {
    gFont = font
}


function moveLineUp(val) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].positionY -= val
}


function moveLineDown(val) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].positionY -= val

}


function changeSize(num) {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].size += num
}


function alignText(aligPs) {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].align = aligPs

}


function removeLine() {
    if (gMeme.lines.length === 0) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].txt = ''
}


function sendInput(userTxt) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].txt = userTxt
}


function modifyKeyWordSize(id) {
    gKeywords[id].fontSize += 1
}

//helpers
function getImgUrl() {
    const idx = getImgId()
    return gImages[idx].url
}

function getLineIdx() {
    return gMeme.selectedLineIdx
}

function getKeyWords() {
    return gKeywords
}

function getMemeText(lineIdx) {
    return gMeme.lines[lineIdx].txt
}

function getLineIdxById(id) {
    return gMeme.lines.findIndex(function (line) {
        return line.id === id
    })
}


function getKeywordId(categary) {
    return gKeywords.findIndex(function (keyWord) {
        return keyWord.category === categary
    })
}

function getImgId() {
    const imgIdx = gImages.findIndex((img) => img.id == gMeme.selectedImgId)
    return imgIdx
}


function getCurrImgId() {
    return gMeme.selectedImgId
}


function getSelectedImg(id) {
    gMeme.selectedImgId = id
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImages
}

//upload
function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.file-input').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function (event) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        gImg = img
    }
    reader.readAsDataURL(ev.target.files[0])
}


function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}

