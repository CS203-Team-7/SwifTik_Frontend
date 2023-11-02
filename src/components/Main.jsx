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
                    <div className="name">
                        Taylor Swift: The Eras Tour
                    </div>
                </div>
                {/* poster 2 */}
                <div className="poster-2">
                    <div className="name">
                        <>
                            Ed Sheeran: +–=÷x Tour
                        </>
                    </div>
                </div>

                {/* poster 3 */}
                <div className="poster-3">
                    <div className="name">
                        <>
                            Harry Styles: Love On Tour
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