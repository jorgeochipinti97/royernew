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
    <div style={{ display: "flex", justifyContent: "center",backgroundColor:'white' }}>
        <div
          ref={sliderRef}
          className="keen-slider shadow"
          style={{
            width: isMobile ? "100vw" : "30vw",
            borderRadius: "5px",
            height: "100%",

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
                      backgroundColor: "#f0ecec",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={image}
                      style={{
                        maxWidth: isMobile ? "100%" : "500px",
                        height: isMobile ? "100%" : "min-content",
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
  );
};
