import React , {Fragment} from 'react'
import GreyImg from '../../../Shared/grey-img'

const FucPlatinhas = (props) => {
    return(
        <Fragment>
            <h4>{props.name}</h4>
            <h4> {props.description}</h4>
            <GreyImg img_url={props.img}/>
            <hr></hr>
        </Fragment>
    )
}

export default FucPlatinhas