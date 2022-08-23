import React from "react";

const Menu = ({ setLineColor, setLineWidth, 
setLineOpacity }) => {
  return (
    <div className="Menu flex justify-center gap-x-2 mt-5">
      <label className="text-white">Renk </label>
      <input
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <label className="text-white ml-4">Yazı boyutu </label>
      <input
        type="range"
        min="1"
        max="5"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label className="text-white ml-4">Opaklık</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
    </div>
  );
};
  
export default Menu;