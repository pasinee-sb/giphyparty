$("form").
on("submit", function(evt)
{evt.preventDefault();
searchGiphy($("input").val());
$("input").val("")

});



async function searchGiphy(word){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=cV0tlNG65o5QnWVuGhhVMafKo3BpeeHT&q=${word}`);
    const myGiph = res.data.data[Math.floor(Math.random()*(res.data.data.length))].images.original.url;

    // const giphy = document.createElement('div');
    const img = document.createElement('img');
    img.src = myGiph;
    giphy.append(img);
    $('#giphies').append(img);
    console.log(img.src);


}

$("#remove").on('click', function(){
    $('#giphies').empty();
})
