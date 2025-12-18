import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";
export default function AnchorName() {

    const [code, setCode] = useState(`.anchor-element{
    anchor-name: --my-anchor;
    position: relative;
}
.anchor-element:hover + .positioned-element{
    display: block;
}
.positioned-element{
    display: none;
    position: absolute;
    position-anchor: --my-anchor;
    top: anchor(--my-anchor top);
    left: anchor(--my-anchor center);
    transform: translate(-50%, -100%);
}
`);

    const stylingCSS = `
.container{
    position: static;
    width: 100%;
    height: 400px;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.anchor-element{
    width: 200px;
    height: 150px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.positioned-element{
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    white-space: nowrap;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
`;

    const html = <div className="container">
        <div className="anchor-element">
            Anchor Element
        </div>
        <div className="positioned-element">
            Positioned Relative to Anchor
        </div>
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
                <h2 className="text-2xl font-bold">Anchor Name</h2>
                <p className="text-lg">
                    Anchor name creates a named anchor point that can be referenced by other elements using anchor positioning.
                    <br />
                    <code>anchor-name: --my-anchor;</code>
                    <br />
                    <code>position-anchor: --my-anchor;</code>
                    <br />
                    <code>top: anchor(--my-anchor bottom);</code>
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/anchor-name">Source: MDN</a>
            <Compatibility type="limited" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}

