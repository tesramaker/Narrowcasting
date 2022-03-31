import React from "react";
import { useEffect, useState } from "react";
import { useDate } from "../logic/currentTime";
import "./SideBarPanel.css";
import { TransitionGroup } from 'react-transition-group'
import green from './img/green.png';
import red from './img/red.png';

const SideBarPanel = (props) => {

    // const { date, time, wish } = useDate();
    // const [currentDisplay, setCurrentDisplay] = useState({
    //     text: "Hello, " + " Students!",
    //     greeting: true
    // });

    // const changeGreeting = () => {

    //     const dateTimeString = date + " " + time;
    //     const greetingString = wish + " Students!";

    //     if (dateTimeString === currentDisplay.text || greetingString === currentDisplay.text)
    //     {
    //         //this means no useDate() update was issued: 
    //         if (currentDisplay.greeting)
    //         {
    //             setCurrentDisplay({
    //                 text: dateTimeString,
    //                 greeting: false
    //             })
    //         }
    //         else
    //         {
    //             setCurrentDisplay({
    //                 text: greetingString,
    //                 greeting: true
    //             })
    //         }
    //     }
    //     else
    //     {
    //         //this means the time changed and the component wants to update.
    //         if (currentDisplay.greeting)
    //         {
    //             setCurrentDisplay({
    //                 text: greetingString,
    //                 greeting: true
    //             })
    //         }
    //         else
    //         {
    //             setCurrentDisplay({
    //                 text: dateTimeString,
    //                 greeting: false
    //             })
    //         }
    //     }
    // };

    // //gets run after every react update.
    // setTimeout(() => {
    //     changeGreeting(); //run greeting changer every 10 seconds
    // }, 10000);

    let date = new Date();
    let currentTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let currentWeekday = getCurrentWeekday();

    function getCurrentWeekday() {
        let currentDay = '';
        switch (date.getDay()) {
            case 1:
                currentDay = 'MONDAY'
                break;
            case 2:
                currentDay = 'TUESDAY'
                break;
            case 3:
                currentDay = 'WEDNESDAY'
                break;
            case 4:
                currentDay = 'THURSDAY'
                break;
            case 5:
                currentDay = 'FRIDAY'
                break;
            case 6:
                currentDay = 'SATURDAY'
                break;
            default:
                currentDay = 'SUNDAY'
                break;
        }
        return currentDay;
    }


    const [loaded, setLoaded] = React.useState(false);
    const [emptyDb, setEmptyDb] = React.useState(false);

    const [users, setUsers] = React.useState([]);

    const [availabilities, setAvailabilities] = React.useState([]);




    const api = props.apiHandler;

    React.useEffect(() => {
        api.getUsers().then((data) => {
            if (data.data.length == 0) {
                setEmptyDb(true);
                setLoaded(true);
            }
            else {
                let usernames = [];
                for (let i = 0; i < data.data.length; i++) {
                    usernames.push(data.data[i].id, data.data[i].username);
                }
                setUsers(data.data);
            }
        });
    }, []);

    React.useEffect(() => {
        api.getAvailabilities().then((data) => {
            if (data.data.length == 0) {
                setEmptyDb(true);
                setLoaded(true);
            }
            else {
                setAvailabilities(data.data);
            }
        });
    }, []);

    function returnUsers() {
        if (document.getElementById('users')) {
            let usersToReturn = document.getElementById('users');
            usersToReturn.innerHTML = '';
            let userarr = [];
            // Get every user in users[]
            for (let u in users) {

                userarr.push({
                    id: u,
                    color: ''
                })

                // Get every availability in availabilities[]
                for (let a in availabilities) {
                    // Check if userid and user.id are the same.
                    // Check if current and given weekday and time are the same.
                    if (users[u].id == availabilities[a].userId && currentWeekday == availabilities[a].weekDay && availabilities[a].startTime < currentTime && currentTime < availabilities[a].endTime) {
                        // If true: color is green.
                        userarr[u].color = 'green';
                    }
                }
                if(userarr[u].color != 'green'){
                    userarr[u].color = 'red';
                }

                if (userarr[u].color == 'red') {
                    usersToReturn.innerHTML +=
                        '<div><img src=' + red + ' class="state" />' + users[u].username + '</div>';
                }
                else {
                    usersToReturn.innerHTML +=
                        '<div><img src=' + green + ' class="state" />' + users[u].username + '</div>';
                }
            }
        }
    }

    return (
        <div className="component-sidebar">
            <div id="users">
                {returnUsers()}
            </div>
            <div className="half-border"></div>
        </div>
    );
}

export default SideBarPanel;