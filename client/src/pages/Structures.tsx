import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Circle } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import InteractiveCard from "@/components/InteractiveCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageTransition from "@/components/PageTransition";

const Structures = () => {
  const kidneyParts = [
    { name: "Cortex", description: "Outer layer containing glomeruli and convoluted tubules", color: "text-purple-400" },
    { name: "Medulla", description: "Inner layer with loops of Henle and collecting ducts", color: "text-blue-400" },
    { name: "Renal Pelvis", description: "Funnel-shaped structure collecting urine", color: "text-cyan-400" },
    { name: "Calyces", description: "Cup-shaped structures draining urine", color: "text-green-400" },
    { name: "Renal Artery/Vein", description: "Blood supply to and from kidney", color: "text-red-400" },
    { name: "Ureter", description: "Tube carrying urine to bladder", color: "text-yellow-400" }
  ];

  const nephronParts = [
    { name: "Glomerulus", description: "Cluster of tiny blood vessels for filtration", color: "text-purple-400" },
    { name: "Bowman's Capsule", description: "Cup-shaped structure surrounding glomerulus", color: "text-blue-400" },
    { name: "Proximal Convoluted Tubule", description: "First part of nephron tubule", color: "text-cyan-400" },
    { name: "Loop of Henle", description: "U-shaped portion for concentration", color: "text-green-400" },
    { name: "Distal Convoluted Tubule", description: "Final tubule section", color: "text-red-400" },
    { name: "Collecting Duct", description: "Final pathway for urine formation", color: "text-yellow-400" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText
              text="Structure of Kidney and Nephron"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
              delay={0.1}
            />
            <AnimatedText
              text="Detailed anatomy of the kidney and its functional unit"
              className="text-lg sm:text-xl text-gray-300"
              delay={0.3}
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            <InteractiveCard delay={0.5}>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-400">Kidney Structure</h2>
                <div className="space-y-3 sm:space-y-4">
                  {kidneyParts.map((part, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <Circle className={`${part.color} w-3 h-3 fill-current`} />
                      <span className="text-sm sm:text-base">
                        <strong>{part.name}:</strong> {part.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </InteractiveCard>
            
            <div className="rounded-xl overflow-hidden">
              <img 
                src="/assets/kidney-anatomy.jpg" 
                alt="Kidney Cross-Section" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1">
              <img 
                src="/assets/nephron-structure.jpg" 
                alt="Nephron Structure" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <InteractiveCard delay={0.7} className="order-1 lg:order-2">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Nephron Components</h2>
                <div className="space-y-3 sm:space-y-4">
                  {nephronParts.map((part, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                      <Circle className={`${part.color} w-3 h-3 fill-current`} />
                      <span className="text-sm sm:text-base">
                        <strong>{part.name}:</strong> {part.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </InteractiveCard>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/intro">
              <button className="interactive-button bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Previous</span>
              </button>
            </Link>
            <Link href="/hormonal">
              <button className="interactive-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>Next: Hormonal Regulation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Structures;
