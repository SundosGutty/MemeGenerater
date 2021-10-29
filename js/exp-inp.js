'use strict'

// var gImg
// gCanvas.width = 450 
// gCanvas.height = 450 

//download to computer
function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent

}


function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}


//sahre to fc
function shareToExternalSorce() {
    const facebookIcon = document.querySelector('.fa-facebook').style.display = 'none'
    const imgDataUrl = gCanvas.toDataURL("image/jpeg");
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        // document.querySelector('.user-msg hidden').innerText = `Your photo is available here: ${uploadedImgUrl}`
        
        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        Click to share 
        </a>`
    }
    doUploadImg(imgDataUrl, onSuccess);
}



function doUploadImg(imgDataUrl, onSuccess) {
    
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.text())
    .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    
    
    //upload
      
  