import React, { useState } from "react";
import data from "./data/images.json";
import Modal from "./components/Modal";

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="container">
        <div className="row py-5">
          <div className="col text-center text-white">
            <h1>LightBox</h1>
          </div>
        </div>

        <div className="row">

          {data.data.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 text-center">
              <div className="card w-100 mb-4" style={{ cursor: "pointer" }}>
                <img src={item.link} alt={item.text} onClick={() => handleClick(item, index)} />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </div>

  );
}

export default App;
