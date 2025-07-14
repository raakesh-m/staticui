import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const designOptions = [
    {
      id: "option1",
      title: "Card Layout",
      description: "Light theme with modern card-based design",
      color: "from-blue-50 to-indigo-50",
      accent: "bg-blue-500",
    },
    {
      id: "option2",
      title: "Professional & Clean",
      description: "Elegant professional interface with clean aesthetics",
      color: "from-slate-50 to-gray-50",
      accent: "bg-slate-600",
    },
    {
      id: "option3",
      title: "Horizontal Navigation",
      description: "Desktop-inspired with horizontal scrolling widgets",
      color: "from-emerald-50 to-teal-50",
      accent: "bg-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Banking UI Options
          </h1>
          <p className="text-gray-600">Choose your preferred design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {designOptions.map((option) => (
            <Link key={option.id} href={`/${option.id}`}>
              <div
                className={`bg-gradient-to-br ${option.color} rounded-xl p-6 hover:scale-105 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl border border-white/20`}
              >
                <div
                  className={`${option.accent} text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block`}
                >
                  {option.id.toUpperCase()}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600">{option.description}</p>

                <div className="mt-4 flex items-center text-sm font-medium">
                  <span className="text-gray-700">View Design</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
