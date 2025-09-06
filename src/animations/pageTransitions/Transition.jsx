import React,{useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Transition = (Page) => {
  return () => {

    const overlayRef = useRef(null);

    useGSAP(() => {

      const tl = gsap.timeline();

      tl.set(overlayRef.current, {
        opacity:1,
        display: "flex",
      });

      tl.to(overlayRef.current, {
        opacity:0,
        duration: 1,
        delay:0.3,
        display:'hidden',
      });

    }, []);

  return (
    <>
      <Page/>

      <div
          ref={overlayRef}
          className="w-full h-screen fixed top-0 left-0 pointer-events-none z-[999] bg-[#fff]  
          flex justify-center items-center"
        >
        </div>
    </>
  );
};
}
export default Transition;