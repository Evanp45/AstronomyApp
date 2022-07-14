import React, { useState,useEffect } from "react";
import './NasaPhoto.css'


function NasaPic(){
        const [photoData, setPhotoData] = useState(null);
    useEffect(() => {
        fetchPhoto();
            async function fetchPhoto(){
                const res = await fetch ('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
                const data = await res.json(); 
                setPhotoData(data); 
            }
    }, []);

    if(!photoData){
        return(<div />);
    }
    return(
        <div className ="nasapics center br4">
            <img className='NasaImages br4 shadow-4' src={photoData.url} alt='I blew up the NASA Server...'/> 
            
        </div>
    );
    
}

export default NasaPic;




