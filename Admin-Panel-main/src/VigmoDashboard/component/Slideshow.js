import React from "react";

import "./Slideshow.css";
import TextSlide from "./slides/TextSlide";
import MediaSlide from "./slides/MediaSlide";
import Legend from "../component/Legend";
import RssSlide from "./slides/RssSlide";
import TextSlideTitle from "./slides/TextSlideTitle";
import { fontSizes } from "../config/font-sizes"

const delay = 2500000;

function Slideshow(props) {
  const [index, setIndex] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  //set properties about all slides.
  const [slides, setSlides] = React.useState([]);
  const [currentSlide, setCurrentSlide] = React.useState(null);

  //props related to current slide


  const api = props.apiHandler;
  const currentSlideshow = props.currentSlideshow;


  React.useEffect(() => {
    api.getSlides(currentSlideshow.id).then((data) => {
      console.log(data);
      if (data.data.length == 0)
      {
        //if this slideshow contains no slides, tell the parent that its completed its rotation.
        // props.onSlideshowCompleted(props.id);
      }
      else
      {
        setSlides(data.data);
        setIndex(0);
      }
    });
  }, [currentSlideshow]);

  console.log(slides);

  //function to call when the list with slideshows updates.
  React.useEffect(() => {
    if (slides.length == 0)
    {
      console.log("no slides received yet, aborting slides rendering.")
    }
    else
    {
      //get the first slideshow and assign it to the properties.
      setCurrentSlide(slides[0]);

      if (!loaded)
      {
        setLoaded(true);
      }
    }
  }, [slides]);

  // function to call when the current slideshow changes.

  const timeoutRef = React.useRef(null);

  function header() {
    {


      if (<TextSlideTitle fontSize={fontSizes.large} api={api} path={_.path} /> == "")
      {
        slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          >

            <div className="tilteDot" key={1}>
              <p></p>
            </div>
          </div>
        ))
      } else
      {
        return "vol"
      }
    }
  }

  function resetTimeout() {
    if (timeoutRef.current)
    {
      clearTimeout(timeoutRef.current);
    }
  }

  // effect to run when the slide index changes
  React.useEffect(() => {
    resetTimeout();

    if (slides.length !== 0)
    {
      const slideDelay = slides[index].duration;
      const slidesLength = slides.length;
      timeoutRef.current = setTimeout(
        () => {
          console.log("Slideshow Completed", index + 1 > slidesLength);
          if (index + 1 >= slidesLength)
          {
            resetTimeout();
            // props.onSlideshowCompleted(props.id); //tell the slideshow parent that it made a full rotation.
            setIndex(0);
          }
          else
          {
            setIndex((prevIndex) => {
              return prevIndex + 1;
            });
          }
        }
        ,
        slideDelay * 1000
      );
    }

    return () => {
      resetTimeout();
    };
  }, [index, currentSlideshow, slides]);


  if (!loaded)
  {
    return (
      <div className="loading-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="slideshow">
      <div className="slideshowSliderWrapper">
        <div className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {slides.map((slideObject, index) => {
            const slideType = slideObject.path.split('/').filter(i => i);
            let resource = <div>Component not found</div>;
            if (slideType[0] == "media_slides")
            {
              resource = <MediaSlide api={api} path={slideObject.path} />
            } else if (slideType[0] == "text_slides")
            {
              resource = <TextSlide api={api} path={slideObject.path} />
            } else if (slideType[0] == "rss_slides")
            {
              resource = <RssSlide api={api} path={slideObject.path} />
            }

            return (
              <div className="slide" key={index}>
                {resource}
              </div>
            );
          })}
        </div>
      </div>
      <div class="footer">
        <div class="logo">
        </div>
        <div className="slideshowDots">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            >
              {console.log()}
              {slides.map((slideObject, index) => {
                console.log(slideObject);
                return (
                  undefined
                );
              })}

              <div className="tilteDot" key={1}>
                {<TextSlideTitle api={api} path={_.path} />}
              </div>
            </div>
          ))}
        </div>
        <div className="slideType">
          <div id="announcements" className="anim"></div>
        </div>
      </div>
      <fieldset className="slideFrame">
      </fieldset>
    </div>
  );
}

export default Slideshow;