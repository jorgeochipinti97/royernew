import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const ProductSlideshow = ({ images, isMobile }) => {
  const animation = { duration: 20000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div
          ref={sliderRef}
          className="keen-slider shadow"
          style={{
            width: isMobile ? "100vw" : "30vw",

            height: "min-content",

            marginBottom: 30,
          }}
        >
          {images &&
            images.map((image) => {
              return (
                <>
                  <div
                    className="keen-slider__slide "
                    style={{
                      marginLeft: 0.2,
                      marginRight: 0.2,
marginTop:5,borderRadius:'30px'
                    }}
                  >
                    <img
                      src={image}
                      style={{
                        maxWidth: isMobile ? "100%" : "500px",
                        borderRadius: "30px",
                        marginRight: 5,
                        marginLeft: 5,

                      }}
                    />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
