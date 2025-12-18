import { useState } from "react";
import { Editor } from "react-live";
import Compatibility from "./compatibility";
export default function ScrollTimeline() {

    const [code, setCode] = useState(`.scroll-container{
    scroll-timeline: --scroll;
}

.progress-bar{
    animation-timeline: --scroll;
    animation-name: progress;
}

.box-1{
    animation-timeline: --scroll;
    animation-name: rotate;
}

.box-2{
    animation-timeline: --scroll;
    animation-name: scale;
}

.box-3{
    animation-timeline: --scroll;
    animation-name: slide;
}

@keyframes progress{
    from{
        width: 0%;
    }
    to{
        width: 100%;
    }
}

@keyframes rotate{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

@keyframes scale{
    from{
        transform: scale(0.5);
    }
    to{
        transform: scale(1.5);
    }
}

@keyframes slide{
    from{
        transform: translateX(-100px);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
}
`);

    const stylingCSS = `
.scroll-container{
    height: 400px;
    overflow-y: auto;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    position: relative;
}

.progress-bar{
    position: sticky;
    top: 0;
    height: 8px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    margin-bottom: 2rem;
    z-index: 10;
}

.content{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 0;
}

.box-1, .box-2, .box-3{
    width: 150px;
    height: 150px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}

.box-1{
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0 auto;
}

.box-2{
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    margin: 0 auto;
}

.box-3{
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    margin: 0 auto;
}

.spacer{
    height: 800px;
    background: linear-gradient(180deg, #f0f0f0 0%, #e0e0e0 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: bold;
}
`;

    const html = <div className="scroll-container">
        <div className="progress-bar"></div>
        <div className="content">
            <div className="box-1">Rotate</div>
            <div className="box-2">Scale</div>
            <div className="box-3">Slide</div>
            <div className="spacer">Keep scrolling...</div>
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
                <h2 className="text-2xl font-bold">Scroll Timeline</h2>
                <p className="text-lg">
                    Scroll timeline creates scroll-driven animations that progress as you scroll.
                    <br />
                    <code>scroll-timeline: --scroll;</code>
                    <br />
                    <code>animation-timeline: --scroll;</code>
                </p>
            </div>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <Editor
                    onChange={ content => setCode(content)}
                    language="css"
                    code={code}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 20,
                    }}
                />
            </div>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-timeline">Source: MDN</a>
            <Compatibility type="limited" />
        </div>
        <div className="col-span-1 bg-primary p-8 rounded-md text-black">
            {html}
        </div>
    </div>;
}

