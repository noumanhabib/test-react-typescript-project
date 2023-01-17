import { createRef, useEffect, useRef, useState } from "react";
import "./App.css";

type Post = {
    body: string;
    id: number;
    title: string;
    userId: string;
};

function App() {
    const singleRunRef = createRef<HTMLDivElement>();
    const WORD_ARR = ["One", "Two", "three", "one", "two", "oNe", "five", "six"];

    const [post, setPost] = useState<Post | null>(null);
    const [postNumber, setPostNumber] = useState<string>("");
    const [resultObjState, setResultObjState] = useState<any>(null);

    async function getApiData(postNumber: number) {
        try {
            let data = await fetch("https://jsonplaceholder.typicode.com/posts/" + postNumber);
            let json = await data.json();
            setPost(json);
        } catch (e) {
            console.error(e);
            setPost(null);
        }
    }

    useEffect(() => {
        if (singleRunRef.current == null) {
            return;
        }
        getApiData(1);
    }, []);

    useEffect(() => {
        let resultObject = Object();
        WORD_ARR.forEach((ele) => {
            let key = ele.toLowerCase();
            if (Object.keys(resultObject).includes(key)) {
                resultObject[key] = resultObject[key] + 1;
            } else {
                resultObject[key] = 1;
            }
        });
        setResultObjState(resultObject);
        console.log("Answer is: ", resultObject);
    }, []);

    function getUpdatedPost() {
        if (postNumber) {
            getApiData(parseInt(postNumber));
        }
    }

    return (
        <>
            <div style={{ margin: "50px" }}>
                <table>
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Ocurances</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultObjState &&
                            Object.keys(resultObjState).map((key) => {
                                return (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{resultObjState[key]}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <div className="post">{post ? post.body : "N/A"}</div>

            <div>
                <input type="text" value={postNumber} onChange={(e) => setPostNumber(e.target.value)} />
                <button onClick={getUpdatedPost}>Get Post</button>
            </div>

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
                    <div className="square black"></div>
                    <div className="square white"></div>
                </div>
            </div>
        </>
    );
}

export default App;
