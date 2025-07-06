import { Link } from "wouter";
import { ArrowRight, ArrowLeft, MapPin, Microscope, Settings, Check } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import InteractiveCard from "@/components/InteractiveCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageTransition from "@/components/PageTransition";

const Jga = () => {
  const jgaComponents = [
    { name: "Juxtaglomerular cells", description: "in arteriole wall", color: "text-purple-400" },
    { name: "Macula densa cells", description: "in distal tubule", color: "text-blue-400" },
    { name: "Extraglomerular mesangial cells", description: "", color: "text-cyan-400" }
  ];

  const autoregulationBenefits = [
    "Maintains stable GFR",
    "Protects glomerular capillaries",
    "Ensures consistent kidney function",
    "Prevents protein loss"
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText
              text="Juxtaglomerular Apparatus & Autoregulation"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
              delay={0.1}
            />
            <AnimatedText
              text="The kidney's built-in monitoring and control system"
              className="text-lg sm:text-xl text-gray-300"
              delay={0.3}
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            <InteractiveCard delay={0.5}>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-400">Juxtaglomerular Apparatus</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <MapPin className="text-purple-400 mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Location
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Located where the distal convoluted tubule touches the glomerulus of the same nephron
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <Microscope className="text-blue-400 mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Components
                    </h3>
                    <div className="space-y-2">
                      {jgaComponents.map((component, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${component.color.replace('text-', 'bg-')}`} />
                          <span className="text-sm sm:text-base">
                            {component.name} {component.description && `(${component.description})`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                      <Settings className="text-green-400 mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Function
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Senses blood pressure and sodium levels in the blood, releases renin when needed to maintain homeostasis
                    </p>
                  </div>
                </div>
              </div>
            </InteractiveCard>
            
            <div className="rounded-xl overflow-hidden">
              <img 
                src="/assets/JGA.jpg" 
                alt="JGA Structure Diagram" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <InteractiveCard delay={0.7} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Autoregulation Mechanisms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-purple-400">Myogenic Mechanism</h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                      Automatic adjustment of blood vessel diameter in response to pressure changes
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                        <span className="text-xs sm:text-sm">↑ Pressure → Vasoconstriction</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        <span className="text-xs sm:text-sm">↓ Pressure → Vasodilation</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-blue-400">Tubuloglomerular Feedback</h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                      Feedback mechanism involving the macula densa cells
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                        <span className="text-xs sm:text-sm">↑ NaCl → ↓ GFR</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        <span className="text-xs sm:text-sm">↓ NaCl → ↑ GFR</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-cyan-400">Benefits of Autoregulation</h3>
                    <div className="space-y-2 sm:space-y-3">
                      {autoregulationBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5" />
                          <span className="text-sm sm:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-green-400">Pressure Range</h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Effective autoregulation occurs within:</p>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold gradient-text">80-180 mmHg</div>
                      <p className="text-xs sm:text-sm text-gray-500">Mean arterial pressure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InteractiveCard>
          
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="/raas">
              <button className="interactive-button bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Previous</span>
              </button>
            </Link>
            <Link href="/summary">
              <button className="interactive-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>Next: Summary</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Jga;
