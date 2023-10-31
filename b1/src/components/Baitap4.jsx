import React, { Component } from "react";
import B4part1 from "./B4part1";
import B4part2 from "./B4part2";

export default class Baitap4 extends Component {
  render() {
    return (
      <>
        

        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">

                    <B4part1></B4part1>

                     <B4part2></B4part2>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
