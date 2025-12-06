export default function SEOContent() {
    return (
        <section className="mt-24 border-t border-gray-800 pt-16 pb-12">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Main Article */}
                <article className="prose prose-invert prose-yellow max-w-none">
                    <h2 className="text-3xl font-bold mb-6 text-gray-100">
                        Why Practice on TypeMaster?
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        TypeMaster is more than just a simple <strong>WPM test</strong>. It is a comprehensive training platform designed to help you transition from "hunting and pecking" to fluent <strong>touch typing</strong>. By analyzing every keystroke, we identify exactly which keys slow you down and provide targeted practice sessions to fix them.
                    </p>
                </article>

                {/* Feature Grid with SEO Focus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-200">Detailed Analytics</h3>
                        <p className="text-gray-400">
                            Stop guessing. See your <strong>typing speed</strong> trends over time, consistency charts, and per-finger performance metrics.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-200">Problem Word Detection</h3>
                        <p className="text-gray-400">
                            Our algorithm tracks words you misspell or type slowly and adds them to a specialized "Practice Mode" for focused improvement.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-200">Comfortable Typing Environment</h3>
                        <p className="text-gray-400">
                            A distraction-free, <strong>dark mode</strong> interface inspired by modern IDEs helps you focus purely on your speed and accuracy.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-200">100% Free & Fast</h3>
                        <p className="text-gray-400">
                            No login required to start a test. Just open the site and start improving your <strong>words per minute</strong> instantly.
                        </p>
                    </div>
                </div>

                {/* FAQ Section Schema */}
                <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
                    <h2 className="text-2xl font-bold mb-6 text-gray-100">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-yellow-400 mb-2">What is a good WPM score?</h4>
                            <p className="text-gray-400 text-sm">
                                The average typing speed is around 40 WPM. Professional typists typically reach 65-75 WPM. With TypeMaster's training, you can aim for 100+ WPM.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-400 mb-2">How is accuracy calculated?</h4>
                            <p className="text-gray-400 text-sm">
                                We use the standard calculation: <code>(Correct Keystrokes / Total Keystrokes) * 100</code>. Accuracy is just as important as speed for real-world productivity.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
