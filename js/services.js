'use strict'

var gMemes = []
var gImages = [
    {
        id: 1,
        url: 'meme-imgs (square)/1.jpg',
        keyWords: ['polics', 'funny', 'sarcasm']
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
        keyWords: ['polics', 'happy', 'funny']
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
        keyWords: ['polics', 'funny', 'sarcasm']
    },
    {
        id: 18,
        url: 'meme-imgs (square)/18.jpg',
        keyWords: ['animation', 'funny', 'sarcasm']
    }
]


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function getImgById() {
    console.log(img)
    var img = gImages.find((img) => img.id === gMeme.selectedImgId)
    return img
}


function getCurrImgId() {
    return gMeme.selectedImgId
}


function getSelectedImg(id) {
    gMeme.selectedImgId = +id
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImages
}