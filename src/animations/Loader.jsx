import React from "react";

const Loader = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      let timer;

      if (document.fonts) {
        document.fonts.ready.then(() => {
          timer = setTimeout(() => setLoading(false), 3000);
        });
      } else {
        timer = setTimeout(() => setLoading(false), 3000);
      }

      return () => clearTimeout(timer);
    }, []);

  return (
    loading && (
       <div className="fixed top-0 left-0 w-full h-screen bg-white !z-[999]">
         <div className="loader">
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
        </div>
       </div>
      )
   ) 
};

export default Loader;


