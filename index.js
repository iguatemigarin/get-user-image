const imageFileToBase64 = require('image-file-to-base64-exif')

module.exports = getUserImage

function getUserImage (maxWidth, maxHeight, quality) {
    return new Promise((resolve, reject) => {
        const inputElement = document.createElement('input')
        inputElement.type = 'file'
        inputElement.accept = 'image/*'
        listenForChanges()
        inputElement.click()

        function listenForChanges () {
            if (inputElement.value === '') {
                return setTimeout(listenForChanges, 100)
            }
            handleFileChange()
        }

        function handleFileChange () {
            resolve(imageFileToBase64(inputElement.files[0], maxWidth, maxHeight, quality))
        }
    })
}
