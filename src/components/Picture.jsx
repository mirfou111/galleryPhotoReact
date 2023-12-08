import React from 'react';
import '../styles/Picture.css'

const Picture = ({src, alt}) => {
    return (
        <img className='image' src={src} alt={alt} />    
        );
};

export default Picture;