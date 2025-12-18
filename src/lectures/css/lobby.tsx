import { NavLink } from "react-router-dom";

export default function Lobby({ sections }: { sections: { index?: boolean, path?: string, title: string, element: React.ReactNode }[] }) {
    return <div className="flex items-center justify-center">
       <ul className="flex gap-2 flex-wrap">
                { sections.filter((section): section is typeof section & { path: string } => !section.index && !!section.path).map((section) => (
                    <li key={section.path}>
                        <NavLink className="bg-blue-500 p-2 rounded-md css-links" to={`/css/${section.path}`}>{section.title}</NavLink>
                    </li>
                ))}
            </ul>
    </div>;
}