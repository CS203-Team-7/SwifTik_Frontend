import React from "react";
import "../css/main.css";
import "../css/poster.css"
import { Link } from "react-router-dom"; 

export const Main = () => {
    return (
        <div className="event-page">
        <div className="label">
                <h3>Current events</h3>
            </div>
            <div className="row">
                {/* poster 1 */}
                <Link to="/seatmap">
                <div className="poster">
                    <div className="name">
                        Taylor Swift: The Eras Tour
                    </div>
                </div>
                </Link>
                {/* poster 2 */}
                <Link to="/seatmap">
                <div className="poster-2">
                    <div className="name">
                        <>
                            Ed Sheeran: +–=÷x Tour
                        </>
                    </div>
                </div>
                </Link>
                {/* poster 3 */}
                <Link to="/seatmap">
                <div className="poster-3">
                    <div className="name">
                        <>
                            Harry Styles: Love On Tour
                        </>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Main;