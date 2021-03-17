import React, { memo } from "react";

const HomeHight = memo(({ height, handleHeight, heightRef }) => {
  return (
    <div>
      <p>키(cm) </p>
      <input
        type="number"
        value={height}
        onChange={handleHeight}
        name="height"
      />
      <p ref={heightRef}></p>
    </div>
  );
});

export default HomeHight;
