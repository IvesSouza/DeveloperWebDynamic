import React, {Fragment} from 'react';
import './style.css'


const Descrpt = (props) => {
    return(
        <Fragment>
            <div class='unit-planet'>
                <h1> Planeta: {props.name}</h1>
            </div>
            <div class='unit-planet1'>
                <img src={props.img_url}></img>
                <p>LINK : {props.img_url}</p>
                <hr></hr>
            </div>
        </Fragment>
    )
}


export default Descrpt