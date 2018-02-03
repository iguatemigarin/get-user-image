# Request an image in the browser

This library exposes a function that returns a Promise with the base64 representation of the image.

## Installation

```
$ npm i -S get-user-image
```

## Usage

```javascript
import getUserImage from 'get-user-image'

// then, use it in a trusted event

getUserImage()
    .then(function (base64) {
        // ...
    })
```

### [Demo](https://repl.it/Jw7L/5)

### Example

```html
<!-- in some html... -->
<button>Choose image</button>
```


```javascript
// index.js
import getUserImage from 'get-user-image'

document.querySelector('button').addEventListener('click', () => {
    getUserImage()
        .then(addImageToBody)
})

const addImageToBody = base64 => {
    const img = document.createElement('img')
    img.src = base64
    img.style.margin = '2px'
    document.body.appendChild(img)
}
```


## API

The *getUserImage* function returns a Promise with a base64 encoded representation of the selected image and it has the following signature:

```javascript
getUserImage(maxWidth /*optional*/, maxHeight /*optional*/, quality /*optional*/)
```

This function should be called inside a [trusted event](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted). If you don't know what a trusted event is, just use it inside a click handler, you should be fine.

### maxWidth

*Default: original file width*

Integer, sets the maximum width of the returned image

### maxHeight

*Default: original file height*

Integer, sets the maximum height of the returned image

### quality

*Default: 1*

Float, between 0 and 1, sets the quality of the returned image.
