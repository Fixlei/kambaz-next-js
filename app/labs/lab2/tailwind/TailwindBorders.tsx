export default function TailwindBorders() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Borders</h2>
            <div className="border-2 border-red-500 p-4 mb-4">
                This div has a red border.
            </div>
            <div className="border-4 border-green-500 p-4 mb-4">
                This div has a green border.
            </div>
            <div className="border-8 border-blue-500 border-solid p-4 mb-4">
                This div has a blue border.
            </div>
            <div className="border-10 border-yellow-500 border-solid p-4 mb-4">
                This div has a yellow border.
            </div>
            <div className="border-10 border-yellow-400 border-solid p-4 mb-4">
                This div has a yellow border.
            </div>
            <div className="border-10 border-yellow-300 border-solid p-4 mb-4">
                This div has a yellow border.
            </div>
        </div>
    );
}
