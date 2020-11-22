const apiURL = "http://localhost:1338/Gifs"

export default function getImages()
{
    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>
        {
            const data = response
            {
                const images = data.map(image => {
                    const {url, titulo, id} = image
                    return {titulo, id, url}
                })

                return images;
            }
        })
}