import React from "react";

const RadialGradient = () => {
  return (
    <>
      {/* Radial Gradient */}
      <div
        className="absolute z-0 w-full max-w-[1500px] h-full max-h-[1500px] left-1/2 -translate-x-1/2 top-[-150px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #5643F2 0%, #83B3FD 58.33%, #2CA4D6 73.44%, #000D37 100%)",
          filter: "blur(300px)",
        }}
      />
      {/* Noise Pattern */}
      <div
        className="absolute z-0 w-full h-full left-0 top-0 bg-repeat bg-center"
        style={{ backgroundImage: "url('/img/grain pattern_200px.png')" }}
      />
    </>
  );
};

export default RadialGradient;
