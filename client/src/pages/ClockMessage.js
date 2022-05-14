import React from "react";



function ClockMessage(props){
    return (<><div className="usr-img"></div><div className="flex-row">
        <button disabled={props.disableButtonIn} className="btn btn-lg btn-dark m-2" onClick={props.handleClickIn}>
            Clock In
        </button>
        <p>{props.startMessage}</p>
        <button disabled={props.disableButtonOut} className="btn btn-lg btn-dark m-2" onClick={props.handleClickOut}>
            Clock Out
        </button>
        <p>{props.finishMessage}</p>
    </div></>)
}

export default ClockMessage;


