export default function TailwindFlexAndWidth() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Flex and Width</h2>
            <div className="flex space-x-4 mb-4">
                <div className="flex-1 bg-red-500 p-4">Flex 1</div>
                <div className="flex-2 bg-green-500 p-4">Flex 2</div>
                <div className="flex-3 bg-blue-500 p-4">Flex 3</div>
            </div>
             <div className="flex flex-wrap space-x-4 mb-4">
                <div className="flex-1 bg-red-500 p-4">Flex 1</div>
                <div className="flex-2 bg-green-500 p-4">Flex 2</div>
                <div className="flex-2 bg-green-400 p-4">Flex 2</div>
                <div className="flex-2 bg-green-300 p-4">Flex 2</div>
                <div className="flex-3 bg-blue-500 p-4">Flex 3</div>
                <div className="flex-2 bg-green-300 p-4">Flex 2</div>
                <div className="flex-3 bg-blue-500 p-4">Flex 3</div>
            </div>
            <div className="w-1/4 bg-yellow-500 p-4 mb-4">Width 1/4</div>
            <div className="w-1/2 bg-purple-500 p-4 mb-4">Width 1/2</div>
            <div className="w-3/4 bg-pink-500 p-4 mb-4">Width 3/4</div>
        </div>
    );
}