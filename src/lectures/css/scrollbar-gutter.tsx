import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";
export default function ScrollbarGutter() {

    const [code, setCode] = useState(`.container{
    scrollbar-gutter: stable;
    overflow-y: auto;
    height: 200px;
}
`);

    const stylingCSS = `
.container{
    height: 200px;
    width: 400px;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    overflow-y: scroll;
}

.content{
    height: 500px;
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

    const html = <div className="container">
        <div className="content">Scrollable Content</div>
        <style>
            {stylingCSS}
        </style>
        <style>
            {code}
        </style>
    </div>

    return <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-secondary p-8 rounded-md flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Scrollbar Gutter</h2>
                <p className="text-lg">
                    Scrollbar gutter reserves space for the scrollbar, preventing layout shift when the scrollbar appears or disappears.
                    <br />
                    <code>scrollbar-gutter: stable;</code>
                    <br />
                    <code>scrollbar-gutter: auto;</code>
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter">Source: MDN</a>
            <Compatibility type="new" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}

