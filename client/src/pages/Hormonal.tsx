import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Droplets, TestTube, Heart } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import InteractiveCard from "@/components/InteractiveCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageTransition from "@/components/PageTransition";

const Hormonal = () => {
  const hormones = [
    {
      name: "ADH",
      fullName: "Antidiuretic Hormone",
      icon: Droplets,
      color: "text-purple-400",
      function: "Controls water reabsorption in collecting ducts",
      effect: "Reduces urine output, conserves body water",
      source: "Posterior pituitary gland"
    },
    {
      name: "Aldosterone",
      fullName: "Mineralocorticoid Hormone",
      icon: TestTube,
      color: "text-blue-400",
      function: "Increases sodium and water reabsorption",
      effect: "Raises blood pressure and blood volume",
      source: "Adrenal cortex"
    },
    {
      name: "ANF",
      fullName: "Atrial Natriuretic Factor",
      icon: Heart,
      color: "text-cyan-400",
      function: "Increases sodium excretion",
      effect: "Lowers blood pressure",
      source: "Heart atria"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText
              text="Hormonal Regulation"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
              delay={0.1}
            />
            <AnimatedText
              text="Key hormones controlling kidney function and water balance"
              className="text-lg sm:text-xl text-gray-300"
              delay={0.3}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {hormones.map((hormone, index) => {
              const Icon = hormone.icon;
              return (
                <InteractiveCard key={index} delay={0.2 * (index + 1)}>
                  <div className="p-6 sm:p-8">
                    <div className="text-center mb-4 sm:mb-6">
                      <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${hormone.color} mx-auto mb-3 sm:mb-4`} />
                      <h2 className={`text-xl sm:text-2xl font-bold ${hormone.color}`}>{hormone.name}</h2>
                      <p className="text-gray-400 text-sm sm:text-base">{hormone.fullName}</p>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Function</h3>
                        <p className="text-gray-400 text-sm">{hormone.function}</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Effect</h3>
                        <p className="text-gray-400 text-sm">{hormone.effect}</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">Source</h3>
                        <p className="text-gray-400 text-sm">{hormone.source}</p>
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              );
            })}
          </div>
          
          <InteractiveCard delay={0.8} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center gradient-text">Hormonal Regulation Flowchart</h2>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/assets/hormonal-regulation.jpg" 
                  alt="Hormonal Regulation Flowchart" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </InteractiveCard>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/structures">
              <button className="interactive-button bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Previous</span>
              </button>
            </Link>
            <Link href="/raas">
              <button className="interactive-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>Next: RAAS System</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Hormonal;
