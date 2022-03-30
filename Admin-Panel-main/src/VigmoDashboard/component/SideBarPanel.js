import React from "react";
import { useEffect, useState } from "react";
import { useDate } from "../logic/currentTime";
import "./SideBarPanel.css";
import { TransitionGroup } from 'react-transition-group'

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
    
  const [loaded, setLoaded] = React.useState(false);
  const [emptyDb, setEmptyDb] = React.useState(false);


    const api = props.apiHandler;

    React.useEffect(() => {
        api.getUsers().then((data) => {
            console.log(data);
    
        //   if (data.data.length == 0) {
        //     setEmptyDb(true);
        //     setLoaded(true);
        //   }
        //   else {
        //     console.log('working');
        //   }
        });
      }, []);

    return (
        <div className="component-sidebar">
            <div >
                {/* {currentDisplay.text} */}
            </div>
            <div className="half-border"></div>
        </div>
    );
}

export default SideBarPanel;