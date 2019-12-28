import React from 'react';
import Profile from './Profile.js';
import TicketListH from './TicketListH.js';
import TicketListQ from './TicketListQ.js';

function MainH(tickets) {
    return (
        <div>
            <Profile />
            <TicketListH tickets={tickets}/>
            <TicketListQ tickets={tickets}/>
        </div>
    );
}
export default MainH;