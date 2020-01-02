import React from 'react';
import Profile from './Profile.js';
// import TicketListS from './TicketListS.js';
import TicketListH from './TicketListH.js';
import SearchFormQ from './SearchFormQ.js';
import SearchForm from './SearchForm.js';
import NewTicket from './NewTicket.js';

const MainLoad = props => { 
    console.log("Mainload props.searchResults = " + props.searchResults);
    console.log("Mainload props.tickets = " + props.tickets);
    if (props.currentUsertype === "helper") {
        if (props.searchResults === null) { 
              return (
            <div>
                <Profile profile={props.profile} />
                <TicketListH tickets={props.searchResults} searchResults={props.searchResults} setSearchResults={props.setSearchResults}/>
                <SearchFormQ tickets={props.ticketsQ} searchResults={props.searchResults} setSearchResults={props.setSearchResults} profile={props.profile} />
            </div>
            );
        }
        else {
            return (
                <div>
                    <Profile profile={props.profile} />
                    <SearchForm tickets={props.tickets} searchResults={props.searchResults} setSearchResults={props.setSearchResults} profile={props.profile} />
                    <SearchFormQ ticketsQ={props.ticketsQ} searchResults={props.searchResults} setSearchResults={props.setSearchResults} profile={props.profile} />
                </div>
            );
        }
    }
    else {
        return (
            <div>
                <Profile profile={props.profile}/>
                <NewTicket profile={props.profile} currentUserID={props.currentUserID} setTickets={props.setTickets} setSearchResults={props.setSearchResults}/>
                <SearchForm tickets={props.tickets} searchResults={props.searchResults} setSearchResults={props.setSearchResults} profile={props.profile} />
            </div>
        );
    }

}

export default MainLoad;