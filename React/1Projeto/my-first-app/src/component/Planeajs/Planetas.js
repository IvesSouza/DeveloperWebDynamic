import React , {Fragment} from 'react'
import FucPlatinhas from './Sub-Planetas/Planeta-filho';
import  './style.css'

const Fuc = () => {
    return(
        <Fragment>
            <h3 class='frament-o-planeta'> Fragmento</h3>
            <FucPlatinhas/>
            <FucPlatinhas/>
            <FucPlatinhas/>
            <FucPlatinhas/>
            <FucPlatinhas/>
        </Fragment>
    )
}

export default Fuc