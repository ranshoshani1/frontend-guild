import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";

export default function AccentColor() {

    const [code, setCode] = useState(`:root{
    accent-color: initial;
}

input[type="range"]{
}

input[type="radio"]{
}

input[type="checkbox"]{
}
`);


    const html = <div className="flex flex-col gap-2" style={{ zoom: 1.2 }}>
        <h3 className="text-lg font-bold">Slider</h3>
        <input type='range' defaultValue={0.5} min={0} max={1} step={0.01} />
        <hr  className="my-2 border-b-2 border-gray-300"/>
        <h3 className="text-lg font-bold">Radio Buttons</h3>
        <label className="flex flex-row gap-2">
            <input type='radio' name='color' value={0} />
            <span>Red</span>
        </label>
        <label className="flex flex-row gap-2">
            <input type='radio' name='color' value={0} />
            <span>Green</span>
        </label>
        <label className="flex flex-row gap-2">
            <input type='radio' name='color' value={0} />
            <span>blue</span>
        </label>
        <hr  className="my-2 border-b-2 border-gray-300"/>
        <h3 className="text-lg font-bold">Checkboxes</h3>
        <label className="flex flex-row gap-2">
            <input type='checkbox' value={0} />
            <span>Red</span>
        </label>
        <label className="flex flex-row gap-2">
            <input type='checkbox' value={0} />
            <span>Green</span>
        </label>
        <label className="flex flex-row gap-2">
            <input type='checkbox' value={0} />
            <span>Blue</span>
        </label>
        <style>
            {code}
        </style>
    </div>

    return <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-secondary p-8 rounded-md flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Accent Color</h2>
                <p className="text-lg">
                    Accent color is a color that is used to accentuate the main color of the website.
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/accent-color">Source: MDN</a>
            <Compatibility type="limited" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
            <style>{`input[type="radio"],input[type="checkbox"]{width: 20px;height: 20px;}`}
            </style>
        </div>
    </div>;
}