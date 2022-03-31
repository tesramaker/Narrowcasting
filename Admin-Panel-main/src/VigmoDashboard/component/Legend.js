import React from "react";
import "./Slideshow.css";

import Announcement from "../component/Announcement";

const Legend = (props) => {

    const [announcementbar, setannouncementbar] = React.useState([]);

    const [announcements, setAnnouncements] = React.useState([]);


    React.useEffect(() => {
        setannouncementbar(props.announcementbar);
        props.api.getSlides(announcementbar.id).then((data) => {
            if (data.data.length == 0) {
                //if this slideshow contains no slides, tell the parent that its completed its rotation.
                console.log('no announcements')
            }
            else {
                setAnnouncements(data.data);
            }
        });
    }, [announcementbar]);


    function getAnnouncements() {
        let arr = []
        for (let a in announcements) {
            arr.push(<Announcement api={props.api} path={announcements[a].path} />);
        }
        console.log(document.getElementById('announcements'));
        return (
            arr
        );
    }

    return (
        <div>
            {getAnnouncements()}
        </div>
    );
}

export default Legend;