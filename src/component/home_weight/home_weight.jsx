import React, { memo } from "react";

const HomeWeight = memo(({ weight, handleWeight, weightRef }) => {
  return (
    <div>
      <p>몸무게(kg)</p>
      <input
        type="number"
        value={weight}
        onChange={handleWeight}
        name="weight"
      />
      <p ref={weightRef}></p>
    </div>
  );
});

export default HomeWeight;
