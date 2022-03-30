import React, {useState} from 'react'

function Hog({name, image, speciality, weight, greased, medal}) {
    
    const [clicked, clickChanger] = useState(false)
    
    function clickHandler () {
        let newClick = !clicked
        clickChanger(newClick)
    }
    
    if(clicked) {
        return(
            <div className="pigTile" onClick={clickHandler}>
                <h1>{name}</h1>
                <img src={image} />
                <ul>
                    <li>Speciality: {speciality}</li>
                    <li>Weight: {weight}</li>
                    <li>{greased ? "He's a greasy boy" : "Dry as a desert."}</li>
                    <li>Top Medal: {medal}</li>
                </ul>
            </div>
        )
    } else {
        return(
            <div className="pigTile" onClick={clickHandler}>
                <h1>{name}</h1>
                <img src={image} />
            </div>
        )
    }
    
}

export default Hog;