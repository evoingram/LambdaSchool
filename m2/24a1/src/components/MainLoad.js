import React from 'react';
import Profile from './Profile.js';
import TicketListS from './TicketListS.js';
import TicketListH from './TicketListH.js';
import TicketListQ from './TicketListQ.js';
import ticketURL from './Login.js'

const MainLoad = props => { 
    console.log(props.currentUsertype);
    if (props.currentUsertype === "helper") {
        console.log("MainH = " + props.ticketURL);
        return (
            <div>
                <Profile />
                <TicketListH tickets={props.tickets}/>
                <TicketListQ ticketsQ={props.ticketsQ}/>
            </div>
        );

    }
    else {
        console.log("MainS = " + props.ticketURL);
        return (
            <div>
                <Profile />
                <TicketListS tickets={props.tickets}/>
            </div>
        );
    }

}

export default MainLoad;