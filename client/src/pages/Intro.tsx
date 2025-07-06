import { Link } from "wouter";
import { ArrowRight, Filter, Scale, Heart, Droplets } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import InteractiveCard from "@/components/InteractiveCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PageTransition from "@/components/PageTransition";

const Intro = () => {
  const functions = [
    {
      icon: Filter,
      title: "Blood Filtration",
      description: "Filter blood to remove waste products and excess substances",
      color: "text-purple-400"
    },
    {
      icon: Scale,
      title: "Water & Salt Balance",
      description: "Maintain proper fluid and electrolyte balance in the body",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      title: "Blood Pressure Regulation",
      description: "Control blood pressure through various mechanisms",
      color: "text-red-400"
    },
    {
      icon: Droplets,
      title: "Hormone Production",
      description: "Produce important hormones for body regulation",
      color: "text-cyan-400"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen py-16 sm:py-20 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <AnimatedText
              text="Introduction to Kidney Function"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text"
              delay={0.1}
            />
            <AnimatedText
              text="Understanding the vital role of kidneys in maintaining body homeostasis"
              className="text-lg sm:text-xl text-gray-300"
              delay={0.3}
            />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            <InteractiveCard delay={0.5}>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-400">Primary Functions</h2>
                <div className="space-y-3 sm:space-y-4">
                  {functions.map((func, index) => {
                    const Icon = func.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon className={`${func.color} mt-1 w-5 h-5`} />
                        <div>
                          <h3 className="font-semibold text-sm sm:text-base">{func.title}</h3>
                          <p className="text-gray-400 text-sm">{func.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </InteractiveCard>
            
            <div className="rounded-xl overflow-hidden">
              <img 
                src="/assets/kidney-anatomy.jpg" 
                alt="Kidney Anatomy Diagram" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <InteractiveCard delay={0.7} className="mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Key Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">1 Million</div>
                  <p className="text-gray-400 text-sm sm:text-base">Nephrons per kidney</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">180L</div>
                  <p className="text-gray-400 text-sm sm:text-base">Blood filtered daily</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">1.5L</div>
                  <p className="text-gray-400 text-sm sm:text-base">Urine produced daily</p>
                </div>
              </div>
            </div>
          </InteractiveCard>
          
          <div className="flex justify-center">
            <Link href="/structures">
              <button className="interactive-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2">
                <span>Next: Kidney Structure</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Intro;
