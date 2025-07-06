import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Circle, ArrowUp } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import InteractiveCard from "@/components/InteractiveCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageTransition from "@/components/PageTransition";

const Raas = () => {
  const raasSteps = [
    {
      step: 1,
      title: "Low Blood Pressure Detection",
      description: "Juxtaglomerular cells detect decreased blood pressure or low sodium levels",
      color: "bg-purple-600"
    },
    {
      step: 2,
      title: "Renin Release",
      description: "Kidney releases renin enzyme into the bloodstream",
      color: "bg-blue-600"
    },
    {
      step: 3,
      title: "Angiotensin Formation",
      description: "Renin converts angiotensinogen to angiotensin I, then to angiotensin II",
      color: "bg-cyan-600"
    },
    {
      step: 4,
      title: "Vasoconstriction",
      description: "Angiotensin II causes blood vessels to constrict",
      color: "bg-green-600"
    },
    {
      step: 5,
      title: "Aldosterone Release",
      description: "Angiotensin II stimulates adrenal cortex to release aldosterone",
      color: "bg-red-600"
    },
    {
      step: 6,
      title: "Blood Pressure Restoration",
      description: "Increased sodium/water retention and vasoconstriction raise blood pressure",
      color: "bg-yellow-600"
    }
  ];

  const keyComponents = [
    { name: "Renin", description: "Enzyme released by kidneys", color: "text-purple-400" },
    { name: "Angiotensinogen", description: "Protein produced by liver", color: "text-blue-400" },
    { name: "Angiotensin I", description: "Inactive precursor", color: "text-cyan-400" },
    { name: "Angiotensin II", description: "Active vasoconstrictor", color: "text-green-400" },
    { name: "Aldosterone", description: "Hormone from adrenal cortex", color: "text-red-400" }
  ];

  const physiologicalEffects = [
    "Increased blood pressure",
    "Enhanced sodium retention",
    "Increased water reabsorption",
    "Vasoconstriction",
    "Improved kidney perfusion"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText
              text="Renin-Angiotensin-Aldosterone System"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
              delay={0.1}
            />
            <AnimatedText
              text="The body's primary system for blood pressure and fluid balance regulation"
              className="text-lg sm:text-xl text-gray-300"
              delay={0.3}
            />
          </div>
          
          <InteractiveCard delay={0.5} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-400">RAAS Mechanism</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  {raasSteps.slice(0, 3).map((step, index) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`${step.color} text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-sm sm:text-base`}>
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {raasSteps.slice(3).map((step, index) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`${step.color} text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold text-sm sm:text-base`}>
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InteractiveCard>
          
          <InteractiveCard delay={0.7} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center gradient-text">RAAS Pathway Diagram</h2>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/assets/raas-system.jpg" 
                  alt="RAAS System Flowchart" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </InteractiveCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <InteractiveCard delay={0.9}>
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">Key Components</h2>
                <div className="space-y-2 sm:space-y-3">
                  {keyComponents.map((component, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Circle className={`${component.color} w-3 h-3 fill-current`} />
                      <span className="text-sm sm:text-base">
                        <strong>{component.name}:</strong> {component.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </InteractiveCard>
            
            <InteractiveCard delay={1.1}>
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">Physiological Effects</h2>
                <div className="space-y-2 sm:space-y-3">
                  {physiologicalEffects.map((effect, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <ArrowUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm sm:text-base">{effect}</span>
                    </div>
                  ))}
                </div>
              </div>
            </InteractiveCard>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/hormonal">
              <button className="interactive-button bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Previous</span>
              </button>
            </Link>
            <Link href="/jga">
              <button className="interactive-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>Next: JGA & Autoregulation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Raas;
