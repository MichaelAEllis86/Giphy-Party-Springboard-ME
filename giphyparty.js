let searchInputValue=$('#inputtext').val()

//event listener to get form to grab input value
$('form').on('submit',function (evt){
    evt.preventDefault()
    let search=$('#inputtext').val()
    console.log('clicked')
    console.log(search)
    appendGiphySearch(search)
})
//Axios request and appends to DOM
async function appendGiphySearch(search){
const apiKey='api_key=AWBZs1dP8ZgYEkvyf7Oku6ehe6aKit83'
const response= await axios.get (`https://api.giphy.com/v1/gifs/search?api_key=AWBZs1dP8ZgYEkvyf7Oku6ehe6aKit83&q=${search}&limit=1&offset=0&rating=g&lang=en`)
console.log(response)
const gifURL=response.data.data[0].images.original.url //what a horrendously long address to find!7 layers nested
console.log(gifURL)
let newGIF=document.createElement('img')
newGIF.src=gifURL
let imageDiv=document.getElementById('imagediv')
imageDiv.append(newGIF)
}

function emptyGifs(){
    $('#imagediv').empty()
}

$('#removebutton').on('click', emptyGifs)

//https://api.giphy.com/v1/gifs/search?api_key=AWBZs1dP8ZgYEkvyf7Oku6ehe6aKit83&q=cat&limit=1&offset=0&rating=g&lang=en



