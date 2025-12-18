import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";
export default function ScrollSnap() {

    const [code, setCode] = useState(`.scroll-container{
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    display: flex;
}

.item{
    scroll-snap-align: start;
    min-width: 400px;
    height: 200px;
}
`);

    const stylingCSS = `
.scroll-container{
    gap: 1rem;
    padding: 1rem;
}

.item{
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}
`;

    const html = <div className="scroll-container">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <style>
            {code}
        </style>
        <style>
            {stylingCSS}
        </style>
    </div>

    return <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-secondary p-8 rounded-md flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Scroll Snap</h2>
                <p className="text-lg">
                    Scroll snap allows you to create smooth scrolling experiences where content snaps into place.
                    <br />
                    <code>scroll-snap-type: x mandatory;</code>
                    <br />
                    <code>scroll-snap-align: start;</code>
                </p>
            </div>
            <Editor
                onChange={ content => setCode(content)}
                language="css"
                code={code}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 20,
                }}
            />
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type">Source: MDN</a>
            <Compatibility type="widely" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}

