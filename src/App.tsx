import { createRef, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    const singleRunRef = createRef<HTMLDivElement>();

    useEffect(() => {
        if (singleRunRef.current == null) {
            return;
        }
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    return (
        <div ref={singleRunRef} className="chess-board">
            <div className="row">
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
            </div>
            <div className="row">
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
            </div>
            <div className="row">
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
            </div>
            <div className="row">
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
            </div>
            <div className="row">
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
            </div>
            <div className="row">
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
            </div>
            <div className="row">
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
            </div>
            <div className="row">
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
                <div className="square black"></div>
                <div className="square white"></div>
            </div>
        </div>
    );
}

export default App;
