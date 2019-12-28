import React from 'react';
import Profile from './Profile.js';
import TicketListH from './TicketListH.js';
import TicketListQ from './TicketListQ.js';

function MainH() {
    return (
        <div>
            <Profile />
            <TicketListH />
            <TicketListQ />
        </div>
    );
}
export default MainH;