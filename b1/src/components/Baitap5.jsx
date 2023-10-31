import React, { Component } from "react";
import B5part1 from "./B5part1";
import B5part2 from "./B5part2";

export default class Baitap5 extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-uppercase mb-0">
                    MANAGER USER
                  </h5>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">

                    <B5part1></B5part1>

                   <B5part2></B5part2>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
