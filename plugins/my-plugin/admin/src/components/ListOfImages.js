
import React, { useState, useEffect } from 'react';
import getImages from '../services/getImages'
import Image from './Image.js';

export default function ListOfImages()
{
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        getImages().then(gifs => setGifs(gifs))
      }, [])

    return gifs.map(({id, titulo, url}) => 
    {
        return <Image titulo={titulo} url={url} id={id} />
    })
}