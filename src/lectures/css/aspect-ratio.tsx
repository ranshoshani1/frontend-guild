import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";

export default function AspectRatio() {

    const [code, setCode] = useState(`.container{
    aspect-ratio: 16 / 9;
    width: 400px;
}
`);

    const stylingCSS = `
.container{
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
}
`;

    const html = <div className="flex flex-col gap-4">
        <div className="container flex items-center justify-center text-white font-bold text-xl mx-auto">
            Aspect Ratio
        </div>
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
                <h2 className="text-2xl font-bold">Aspect Ratio</h2>
                <p className="text-lg">
                    Aspect ratio sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
                    <br />
                    <code>aspect-ratio: 16 / 9;</code>
                    <br />
                    <code>aspect-ratio: 1;</code>
                    <br />
                    <code>border-radius: 50%;</code>
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Source: MDN</a>
            <Compatibility type="widely" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}

