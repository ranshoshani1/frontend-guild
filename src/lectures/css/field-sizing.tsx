import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";
export default function FieldSizing() {

    const [code, setCode] = useState(`input#input-comparison{
    field-sizing: content;

}

textarea#textarea-comparison{
    field-sizing: content;
}
`);

    const stylingCSS = `
.container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 1rem;
}

.field-group{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
}

label{
    font-weight: bold;
    color: #333;
}

input, textarea{
    padding: 0.75rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    max-width: 100%;
        min-width: 380px;
}

input:focus, textarea:focus{
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.comparison{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 8px;
}

.comparison-item{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
}

.comparison-label{
    font-size: 0.875rem;
    color: #666;
    font-weight: normal;
}

.comparison-label textarea{
    field-sizing: unset !important;
}

`;

    const html = <div className="container">
        <div className="comparison">
            <div className="comparison-item">
                <label className="comparison-label">Default (fixed size)</label>
                <input type="text" placeholder="Fixed width input" style={{ width: '200px' }} />
            </div>
            <div className="comparison-item">
                <label className="comparison-label">With field-sizing: content</label>
                <textarea placeholder="Just try to type something" />
            </div>
        </div>
        <div className="field-group">
            <label>Input with field-sizing: content</label>
            <input id='input-comparison' type="text" placeholder="Type to see it grow..." />
        </div>
        <div className="field-group">
            <label>Textarea with field-sizing: content</label>
            <textarea id='textarea-comparison' placeholder="Type multiple lines to see it grow vertically..."></textarea>
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
                <h2 className="text-2xl font-bold">Field Sizing</h2>
                <p className="text-lg">
                    Field sizing controls how form fields calculate their size based on content.
                    <br />
                    <code>field-sizing: content;</code> - size based on content
                    <br />
                    <code>field-sizing: fixed;</code> - fixed size (default)
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing">Source: MDN</a>
            <Compatibility type="limited" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}

