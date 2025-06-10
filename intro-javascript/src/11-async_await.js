/* eslint-disable no-unused-vars */

const getImage = async () => {


    try {
        const apiKey = 'PbzAGkRZdiF8pw2Ple4hra4TaTfn2hqw';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        //manejo de errores
        console.error(error)
    }

}

getImage();