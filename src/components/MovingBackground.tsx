import { MouseParallax } from "react-just-parallax";
import BinaryBackground from "./BinaryBackground";


export const MovingBackground = ( { parallaxRef }: any ) => {


  return (
    <div className="absolute left-1/2 w-full aspect-square -translate-x-1/2 md:-top-[1.5rem]">
      <MouseParallax 
        strength={0.07}
        isAbsolutelyPositioned
        parallaxContainerRef={parallaxRef}
      >
        <BinaryBackground />
      </MouseParallax>
    </div>
  );
};
