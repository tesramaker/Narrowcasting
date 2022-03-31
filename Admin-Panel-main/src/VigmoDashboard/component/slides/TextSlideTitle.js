import React from "react";
import PropTypes from "prop-types";

function TextSlideTitle(props) {
    const [text, setText] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);

    const api = props.api;

    React.useEffect(() => {
        api.getSlide(props.path).then((data) => {
            setText(data.data);

            if (!loaded)
            {
                setLoaded(true);
            }
        });
    }, []);


    if (!loaded)
    {
        return (
            <div className="loading-screen">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div className="titleHeader">
            <h1>{text.title}</h1>
        </div>
    );
}

export default TextSlideTitle;