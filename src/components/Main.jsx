import React from "react";
import "../css/main.css";
import "../css/poster.css"

export const Main = () => {
    return (
        <div className="event-page">
        <div className="label">
                <h3>Current events</h3>
            </div>
            <div className="row">
                {/* poster 1 */}
                <div className="poster">
                    <div className="taylor-swift-the">
                        Taylor Swift: The Eras
                        <br />
                        Tour
                    </div>
                </div>
                {/* poster 2 */}
                <div className="poster">
                    <div className="taylor-swift-the">
                        <>
                            Ed Sheeran: Autumn
                            <br />
                            Variations
                        </>
                    </div>
                </div>

                {/* poster 3 */}
                <div className="poster">
                    <div className="taylor-swift-the">
                        <>
                            Rick Astley: Never
                            <br />
                            Gonna Give You Up
                        </>
                    </div>
                </div>
                {/* <img className="account-circle" alt="Account circle" src="account-circle.png" />
          <img className="help" alt="Help" src="help.png" /> */}
            </div>
        </div>
    );
};

export default Main;