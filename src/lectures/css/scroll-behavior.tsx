import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";

export default function ScrollBehavior() {

    const [code, setCode] = useState(`.container{
    scroll-behavior: smooth;
}

.section{
    scroll-margin-top: 2rem;
}
`);

    const stylingCSS = `
.container{
    height: 400px;
    overflow-y: auto;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
}

.section{
    height: 300px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.buttons{
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.button{
    padding: 0.5rem 1rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.button:hover{
    background: #764ba2;
}
`;

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const html = <div>
        <div className="buttons">
            <button className="button" onClick={() => scrollToSection('section-1')}>Section 1</button>
            <button className="button" onClick={() => scrollToSection('section-2')}>Section 2</button>
            <button className="button" onClick={() => scrollToSection('section-3')}>Section 3</button>
            <button className="button" onClick={() => scrollToSection('section-4')}>Section 4</button>
        </div>
        <div className="container">
            <div id="section-1" className="section">Section 1</div>
            <div id="section-2" className="section">Section 2</div>
            <div id="section-3" className="section">Section 3</div>
            <div id="section-4" className="section">Section 4</div>
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
                <h2 className="text-2xl font-bold">Scroll Behavior</h2>
                <p className="text-lg">
                    Scroll behavior controls how scrolling behaves when navigating to anchor links or programmatically scrolling.
                    <br />
                    <code>scroll-behavior: smooth;</code>
                    <br />
                    <code>scroll-padding-top: 1rem;</code>
                    <br />
                    <code>scroll-margin-top: 2rem;</code>
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior">Source: MDN</a>
            <Compatibility type="widely" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}

