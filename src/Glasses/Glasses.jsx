import React, { Component } from "react";
import DataGlasses from "./dataGlasses.json";
export default class Glasses extends Component {
  state = {
    glassesInfo: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  handleChangeGlasses(glass) {
    this.setState({ glassesInfo: glass });
  }
  render() {
    // console.log(DataGlasses);

    return (
      <div>
        <div className="container">
          <h2>The Glasses App Online</h2>
          <div className="row mt-4 ">
            <div className="col-6">
              <div className="card" style={{ width: "15rem" }}>
                <div className="position-relative">
                  <img
                    className="card-img-top "
                    src="./glassesImage/model.jpg"
                    alt=""
                  />
                  <img
                    style={{ top: "25%", width: 150, left: "19%" }}
                    className="me-2 position-absolute img-fluid"
                    src={this.state.glassesInfo.url}
                    alt=""
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{this.state.glassesInfo.name}</h5>
                  <p>{this.state.glassesInfo.price}</p>
                  <p className="card-text">{this.state.glassesInfo.desc}</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                className="img-fluid"
                width={200}
                src="./glassesImage/model.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="card text-bg-bg-light mt-3">
            <div className="card text-bg-warning mb-3">
              <div className="card-body ">
                <div className="d-flex">
                  {DataGlasses.map((item, index) => {
                    return (
                      <button
                        onClick={() => {
                          this.handleChangeGlasses(item);
                        }}
                        key={index}
                        className="btn "
                      >
                        <img
                          className="me-2"
                          width={100}
                          src={item.url}
                          alt=""
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
