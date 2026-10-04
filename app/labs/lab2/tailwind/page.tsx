import "./index.css"
import TailwindSpacing from "./TailwindSpacing"
import TailwindTypography from "./TailwindTypography"
import TailwindBackgroundColors from "./TailwindBackgroundColors"

export default function TailwindLab() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Tailwind Lab</h1>
            <TailwindSpacing />
            <TailwindTypography />
            <TailwindBackgroundColors />
        </div>
    )
}
