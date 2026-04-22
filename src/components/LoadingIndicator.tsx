import React from "react";

interface BlockLoadingIndicatorInterface {
  size?: string;
}
function LoadingIndicator({ size = "2.5rem" }: BlockLoadingIndicatorInterface) {
  return (
    <div
      style={{
        height: size,
        width: size,
      }}
      className='border-2 rounded-full border-b-black animate-spin'
    ></div>
  );
}

export default LoadingIndicator;
