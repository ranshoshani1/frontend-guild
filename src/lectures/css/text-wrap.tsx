import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";
export default function TextWrap() {

    const [code, setCode] = useState(`h1{
    width: 600px;
    text-wrap: initial;
}

p{
    text-wrap: initial;
}
`);


    const html = <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Text Wrap Examples with different values and long text</h1>
        <p className="font-bold mx-auto text-center border-2 border-gray-300 p-4 rounded-md" style={{ width: "400px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut cum eum id quos est.
        </p>
        <style>
            {code}
        </style>
    </div>

    return <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-secondary p-8 rounded-md flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Text Wrap</h2>
                <p className="text-lg">
                    Text wrap is a property that is used to wrap the text of an element.
                    <br />
                    <code>text-wrap: initial;</code> - initial value
                    <br />
                    <code>text-wrap: balance;</code> - balances the text to fit the container
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
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-wrap">Source: MDN</a>
            <Compatibility type="new" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}