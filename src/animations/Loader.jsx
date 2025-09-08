// Loader.js
import React from "react";

const withLoader = (WrappedComponent) => {
  return function LoaderWrapper(props) {
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

    if (loading) {
      return (
        <div className="loader">
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
          <div className="loader-square" />
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;


