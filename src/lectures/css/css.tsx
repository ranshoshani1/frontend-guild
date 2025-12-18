import { NavLink, useRoutes } from "react-router-dom";
import AccentColor from "./accent-color";
import AnchorName from "./anchor-name";
import AspectRatio from "./aspect-ratio";
import AttrData from "./attr-data";
import FieldSizing from "./field-sizing";
import ScrollbarGutter from "./scrollbar-gutter";
import ScrollSnap from "./scroll-snap";
import ScrollTimeline from "./scroll-timeline";
import TextWrap from "./text-wrap";
import ScrollBehavior from "./scroll-behavior";
import './style.css';
import Lobby from "./lobby";

export default function Css() {

    const sections: {index?: boolean, path?: string, title: string, element: React.ReactNode }[] = [
        {
            path: "aspect-ratio",
            title: "Aspect Ratio",
            element: <AspectRatio />,
        },
        {
            path: "text-wrap",
            title: "Text Wrap",
            element: <TextWrap />,
        },
        {
            path: "field-sizing",
            title: "Field Sizing",
            element: <FieldSizing />,
        },
        {
            path: "scrollbar-gutter",
            title: "Scrollbar Gutter",
            element: <ScrollbarGutter />,
        },
        {
            path: "scroll-behavior",
            title: "Scroll Behavior",
            element: <ScrollBehavior />,
        },
        {
            path: "scroll-snap",
            title: "Scroll Snap",
            element: <ScrollSnap />,
        },        {
            path: "anchor-name",
            title: "Anchor Name",
            element: <AnchorName />,
        },
        {
            path: "accent-color",
            title: "Accent Color",
            element: <AccentColor />,
        },
        {
            path: "attr-data",
            title: "Attr()",
            element: <AttrData />,
        },
        {
            path: "scroll-timeline",
            title: "Scroll Timeline",
            element: <ScrollTimeline />,
        },
    ]

    sections.unshift({
        index: true,
        title: "CSS",
        element: <Lobby sections={sections}/>,
    });

    const router = useRoutes(sections);

    return <div className="flex flex-col gap-5 p-8 h-full">
            <div className="flex flex-row gap-2 items-end">
                <NavLink to="/css" className="text-5xl font-bold leading-none">CSS</NavLink>
                <p className="text-xl">What You <code className="text-gray-500">(Might)</code> Know and What You Might Not</p>
            </div>
            <hr className=""/>
            <div className={`transition-all duration-300`}>
            { router}
            </div>
        </div>;
}