import React from "react";
import '../styles/Gallery.css';
import Picture from "./Picture";

// const photo = {
//     "src": "",
//     "alt":"" 
// };
const mesPhotos = [
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
    {"src":"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg","alt":"cat"},
]
//const tableauObjets = Array(nombreObjets).fill(objetIdentique)

const Gallery = () => {
    //On pouvez s'en passer et mapper directement le tableaus mesPhotos dans le rendu du coomposant
    const photos = mesPhotos.map(function(photo, index) {
        return { ...photo, id: index + 1 }; // J'utilise la destructuraction pour mettre les objets photos dans le tableau 
        //index est utilise pour le mapping du tableau de photos dans le composant (Exige dans react pour identifier chaque item du tableau)
    });

    return (
        <div>
            {photos.map(function(photo) {
                return <Picture key={photo.id} src={photo.src} alt={photo.alt} />;
            })}
        </div>
    );
}
export default Gallery;