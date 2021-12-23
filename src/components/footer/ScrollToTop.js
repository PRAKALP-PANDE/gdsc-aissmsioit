import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      document.body.scrollTo(0, c - c / 40);
    }
  };

  // Button is displayed after scrolling for 500 pixels
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (document.body.scrollTop > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      true
    );
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button className="gotopbtn" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
