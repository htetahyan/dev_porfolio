import React from "react";

const AnimationContext = React.createContext({
    isAnimating: false,
    setIsAnimating: (value: boolean) => {},
})
export default AnimationContext