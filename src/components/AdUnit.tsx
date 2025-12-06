export default function AdUnit({
    slot,
    format = 'horizontal',
    className = ''
}: {
    slot: string;
    format?: 'horizontal' | 'rectangle';
    className?: string;
}) {
    return (
        <div className={`w-full flex justify-center my-6 ${className}`}>
            {/* Container for Ad Provider (e.g. AdSense) */}
            <div
                className={`bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-500 text-xs uppercase tracking-widest
          ${format === 'horizontal' ? 'w-full max-w-[728px] h-[90px]' : 'w-[300px] h-[250px]'}
        `}
            >
                <div className="text-center">
                    <span className="block font-semibold mb-1">Ad Space</span>
                    <span className="opacity-50 text-[10px]">{slot}</span>
                </div>
            </div>
        </div>
    );
}
