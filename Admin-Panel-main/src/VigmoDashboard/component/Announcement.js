import React from "react";

const Announcement = (props) => {
    const [text, setText] = React.useState([]);

    React.useEffect(() => {
        props.api.getSlide(props.path).then((data) => {
            setText(data.data);
        });
    }, []);


    function getText() {
        if(document.getElementById('announcements')){
            let txt = document.getElementById('announcements');
            if(text.message){
                txt.innerHTML += text.message+' | ';
            }
        }
    }

    return (
        <div>
            {getText()}
        </div>
    );
}

export default Announcement;