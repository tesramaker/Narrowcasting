import React from "react";

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

    console.log(announcements)

    function getAnnouncements() {
        if (document.getElementById('announcements')) {
            let ann = document.getElementById('announcements');
            ann.innerHTML = '';
            for (let a in announcements) {
                return(
                <Announcement api={props.api} path={announcements[a].path} />
                );
            }
        }
    }

    return (
        <legend className="slideType">
            <div id="announcements">{getAnnouncements()}</div>
        </legend>
    );
}

export default Legend;