import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Home, Scale, Heart, Shield, RotateCcw, GraduationCap, Stethoscope, Microscope } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import InteractiveCard from "@/components/InteractiveCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageTransition from "@/components/PageTransition";
import DeveloperCredits from "@/components/DeveloperCredits";

const Summary = () => {
  const [showCredits, setShowCredits] = useState(false);
  const [, navigate] = useLocation();

  const handleFinishClick = () => {
    setShowCredits(true);
  };

  const handleCreditsClose = () => {
    setShowCredits(false);
    navigate("/");
  };

  const whyRegulationMatters = [
    {
      icon: Scale,
      title: "Fluid Balance",
      description: "Maintains proper water and electrolyte balance throughout the body",
      color: "text-purple-400"
    },
    {
      icon: Heart,
      title: "Blood Pressure Control",
      description: "Regulates blood pressure through multiple mechanisms",
      color: "text-red-400"
    },
    {
      icon: Shield,
      title: "Waste Removal",
      description: "Ensures efficient removal of metabolic waste products",
      color: "text-blue-400"
    },
    {
      icon: RotateCcw,
      title: "Homeostasis",
      description: "Maintains internal environment stability",
      color: "text-cyan-400"
    }
  ];

  const consequencesOfFailure = [
    { title: "Hypertension", description: "Uncontrolled high blood pressure" },
    { title: "Edema", description: "Fluid retention causing swelling" },
    { title: "Kidney Disease", description: "Progressive loss of kidney function" },
    { title: "Electrolyte Imbalance", description: "Dangerous ion concentration changes" }
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Educational Impact",
      description: "Understanding kidney regulation is crucial for medical sciences",
      color: "text-purple-400"
    },
    {
      icon: Stethoscope,
      title: "Clinical Relevance",
      description: "Knowledge applicable to understanding diseases and treatments",
      color: "text-blue-400"
    },
    {
      icon: Microscope,
      title: "Research Applications",
      description: "Foundation for advanced physiological studies",
      color: "text-cyan-400"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText
              text="Summary: Regulation of Kidney Function"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
              delay={0.1}
            />
            <AnimatedText
              text="Key takeaways and importance of kidney regulation"
              className="text-lg sm:text-xl text-gray-300"
              delay={0.3}
            />
          </div>
          
          <InteractiveCard delay={0.5} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-400">Why Regulation Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {whyRegulationMatters.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <Icon className={`${item.color} text-lg sm:text-xl mt-1 w-5 h-5 sm:w-6 sm:h-6`} />
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </InteractiveCard>
          
          <InteractiveCard delay={0.7} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-red-400">Consequences of Regulation Failure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {consequencesOfFailure.map((consequence, index) => (
                  <div key={index} className="bg-red-900/20 p-3 sm:p-4 rounded-lg border border-red-500/30">
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-red-400">{consequence.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{consequence.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </InteractiveCard>
          
          <InteractiveCard delay={0.9} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center gradient-text">Key Concepts Summary</h2>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/assets/summary.jpg" 
                  alt="Comprehensive Summary Chart" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </InteractiveCard>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <InteractiveCard key={index} delay={1.1 + index * 0.2}>
                  <div className="p-5 sm:p-6 text-center">
                    <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${area.color} mx-auto mb-3 sm:mb-4`} />
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{area.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{area.description}</p>
                  </div>
                </InteractiveCard>
              );
            })}
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleFinishClick}
              className="interactive-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-lg sm:text-xl inline-flex items-center space-x-3"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Finish and Back to Home</span>
            </button>
          </div>
        </div>
      </div>
      
      <DeveloperCredits 
        isOpen={showCredits} 
        onClose={handleCreditsClose} 
      />
    </PageTransition>
  );
};

export default Summary;
