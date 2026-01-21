import React from "react";
const useReactPath = () => {
  const [href, setHref] = React.useState(window.location.pathname);
  const listenToPopstate = () => {
    const winPath = window.location.href;
    setHref(winPath);
  };
  React.useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);
  return href;
};
export { useReactPath };
