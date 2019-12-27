import React from 'react';

const UserData = [
        {"userinfo": [/*
            {
                "id": 0,
                "name": "",
                "username": "",
                "email": "",
                "password": "",
                "usertype": ""
            }
            */
                {
                    "id": 0,
                    "name": "Adam Ingram",
                    "username": "aingram",
                    "email": "evoingram@aquoco.onmicrosoft.com",
                    "password": "nopasswords",
                    "usertype": "student"
                },
                {
                    "id": 1,
                    "name": "Erica Ingram",
                    "username": "elingram",
                    "email": "evoingram@aquoco.onmicrosoft.com",
                    "password": "nopassword",
                    "usertype": "helper"
                },
                {
                    "id": 2,
                    "name": "Tooth Fairy",
                    "username": "toothy",
                    "email": "evoingram@aquoco.onmicrosoft.com",
                    "password": "nopassword",
                    "usertype": "helper"
                },
                {
                    "id": 3,
                    "name": "Santa Claus",
                    "username": "santaclaus",
                    "email": "evoingram@aquoco.onmicrosoft.com",
                    "password": "nopassword",
                    "usertype": "student"
                }
            ]
        },
        {"tickets": [/*
            {
                "id": 0,
                "title": "",
                "date": "",
                "category": "",
                "status": "",
                "description": ""
            }
            */
            
                {
                    "id": 0,
                    "title": "test",
                    "date": "12/27/2019",
                    "category": "React",
                    "status": "in progress",
                    "description": "test description",
                    "submitid": 3,
                    "helperid": 1
                },
                {
                    "id": 1,
                    "title": "test 1",
                    "date": "12/26/2019",
                    "category": "HTML",
                    "status": "resolved",
                    "description": "test description test 1",
                    "submitid": 1,
                    "helperid": 2
                },
                {
                    "id": 2,
                    "title": "test 2",
                    "date": "12/26/2019",
                    "category": "CSS",
                    "status": "queue",
                    "description": "test description test 2",
                    "submitid": 0,
                    "helperid": 1
                },
                {
                    "id": 3,
                    "title": "test 3",
                    "date": "12/28/2019",
                    "category": "front desk",
                    "status": "queue",
                    "description": "test description test 3",
                    "submitid": 1,
                    "helperid": 2
                },
                {
                    "id": 4,
                    "title": "test 4",
                    "date": "12/22/2019",
                    "category": "JavaScript",
                    "status": "resolved",
                    "description": "test description test 4",
                    "submitid": 2,
                    "helperid": 1
                },
                {
                    "id": 5,
                    "title": "test 5",
                    "date": "12/23/2019",
                    "category": "React",
                    "status": "in progress",
                    "description": "test description test 5",
                    "submitid": 3,
                    "helperid": 2
                }
            ]
        },
        {"contacts": [
                /*
                {
                    "id": 0,
                    "ticketid": "",
                "date": "",
                    "description": ""
                }
                */
            
                {
                    "id": 0,
                    "ticketid": "0",
                    "date": "12/1/2019",
                    "description": "test description contact what i did 0",
                    "submitid": "3"
                },
                {
                    "id": 1,
                    "ticketid": "1",
                    "date": "12/2/2019",
                    "description": "test description contact what i did 1",
                    "submitid": "1"
                },
                {
                    "id": 2,
                    "ticketid": "2",
                    "date": "12/3/2019",
                    "description": "test description contact what i did 2",
                    "submitid": "0"
                },
                {
                    "id": 3,
                    "ticketid": "3",
                    "date": "12/4/2019",
                    "description": "test description contact what i did 3",
                    "submitid": "1"
                },
                {
                    "id": 4,
                    "ticketid": "4",
                    "date": "12/5/2019",
                    "description": "test description contact what i did 4",
                    "submitid": "2"
                },
                {
                    "id": 5,
                    "ticketid": "5",
                    "date": "12/6/2019",
                    "description": "test description contact what i did 5",
                    "submitid": "3"
                },
                {
                    "id": 6,
                    "ticketid": "0",
                    "date": "12/7/2019",
                    "description": "test description contact what i did 6",
                    "submitid": "1"
                },
                {
                    "id": 7,
                    "ticketid": "1",
                    "date": "12/8/2019",
                    "description": "test description contact what i did 7",
                    "submitid": "2"
                },
                {
                    "id": 8,
                    "ticketid": "2",
                    "date": "12/9/2019",
                    "description": "test description contact what i did 8",
                    "submitid": "1"
                },
                {
                    "id": 9,
                    "ticketid": "3",
                    "date": "12/10/2019",
                    "description": "test description contact what i did 9",
                    "submitid": "2"
                },
                {
                    "id": 10,
                    "ticketid": "4",
                    "date": "12/11/2019",
                    "description": "test description contact what i did 10",
                    "submitid": "1"
                },
                {
                    "id": 11,
                    "ticketid": "5",
                    "date": "12/12/2019",
                    "description": "test description contact what i did 11",
                    "submitid": "2"
                },
                {
                    "id": 12,
                    "ticketid": "0",
                    "date": "12/13/2019",
                    "description": "test description contact what i did 12",
                    "submitid": "3"
                }
            ]
        }
];
/*
    switch (props) {        
        case 'userInfo': return aUserInfo;
        case 'tickets': return aTickets;
        case 'contacts': return aContacts;
        default: return Data;
    }
    */
export default UserData;