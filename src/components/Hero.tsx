import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-16 text-center z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full -z-10" />

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
                Kuasai Seni <span className="text-yellow-400">Mengetik Cepat</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
                Tes mengetik paling canggih untuk meningkatkan WPM Anda.
                Analisis <span className="text-gray-200">pola mengetik</span>,
                perbaiki <span className="text-gray-200">jari yang lemah</span>, dan pantau progresmu dengan
                analitik tingkat profesional.
            </p>

            <div className="flex justify-center gap-8 mb-12 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Tanpa Daftar
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Analitik Real-time
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Deteksi Masalah Pintar
                </div>
            </div>

            <div className="animate-bounce text-yellow-400 flex flex-col items-center gap-2 opacity-80">
                <span className="text-xs uppercase tracking-widest">Mulai Mengetik di Bawah</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
