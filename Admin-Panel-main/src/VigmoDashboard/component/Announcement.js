import React from "react";

const Announcement = (props) => {
    const [text, setText] = React.useState([]);
    
    React.useEffect(() => {
        props.api.getSlide(props.path).then((data) => {
            setText(data.data);
        });
    }, []);

    console.log(text.message);

    return(
        <div>
            {text.message}
        </div>
    );
}

export default Announcement;