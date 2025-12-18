import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";
export default function AccentColor() {

    const [htmlCode, setHtmlCode] = useState(`<label>
    <input type='checkbox' />
    <span>Red</span>
</label>
<label>
    <input type='checkbox' />
    <span>Green</span>
</label>
<label>
    <input type='checkbox' />
    <span>Blue</span>
</label>`);
    const [cssCode, setCssCode] = useState(`input[type="checkbox"]{
    accent-color: magenta;
}
input[type="checkbox"]:checked + span{
    color: black;
}`);

    return <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-secondary p-8 rounded-md flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Attr(data-*)</h2>
                <p className="text-lg">
                    Attr(data-*) is a way to add data to an element.
                </p>
            </div>
            <Editor
                onChange={ content => setHtmlCode(content)}
                language="html"
                code={htmlCode}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                }}
            />
            <Editor
                onChange={ content => setCssCode(content)}
                language="css"
                code={cssCode}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 20,
                }}
            />
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/attr">Source: MDN</a>
            <Compatibility type="widely" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            <div style={{ zoom: 1.5 }}>
                <div className="flex flex-col gap-1" dangerouslySetInnerHTML={{ __html: htmlCode }} />
            </div>
            <style dangerouslySetInnerHTML={{ __html: cssCode }} />
            <style>{`input[type="checkbox"]{width: 18px;height: 18px;}`}</style>
        </div>
    </div>;
}