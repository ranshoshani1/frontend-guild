interface CompatibilityType {
    type: "limited" | "new" | "widely";
}

export default function Compatibility( { type = "limited" } : CompatibilityType) {
    return <img src={`/${type}.png`} alt={type} />;
}