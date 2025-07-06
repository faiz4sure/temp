import { Link } from "wouter";
import { ArrowRight, Microscope, TrendingUp, Activity, Zap } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import InteractiveCard from "@/components/InteractiveCard";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-3 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-2 lg:space-y-4">
                <AnimatedText
                  text="Regulation"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text"
                  delay={0.1}
                />
                <AnimatedText
                  text="of"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
                  delay={0.2}
                />
                <AnimatedText
                  text="Kidney"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text"
                  delay={0.3}
                />
                <AnimatedText
                  text="Function"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
                  delay={0.4}
                />
              </div>
              
              <AnimatedText
                text="Explore the fascinating world of kidney function regulation through interactive animations and comprehensive explanations."
                className="text-lg sm:text-xl text-gray-300"
                delay={0.7}
              />
              
              <div className="opacity-0 text-stagger" style={{ animationDelay: "0.8s" }}>
                <Link href="/intro">
                  <button className="interactive-button bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg inline-flex items-center space-x-2">
                    <span>Start Exploring</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right Content - Kidney Animation */}
            <div className="relative rounded-3xl overflow-hidden bg-gray-900/50 border border-purple-500/30">
              <video
                className="w-full h-auto max-h-96 object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/assets/Kidney.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <InteractiveCard delay={0.2}>
              <div className="p-6 text-center space-y-4">
                <Microscope className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold">Interactive Learning</h3>
                <p className="text-gray-400 text-sm sm:text-base">Engage with animated diagrams and visual explanations</p>
              </div>
            </InteractiveCard>
            
            <InteractiveCard delay={0.4}>
              <div className="p-6 text-center space-y-4">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold">Visual Diagrams</h3>
                <p className="text-gray-400 text-sm sm:text-base">Comprehensive charts and anatomical illustrations</p>
              </div>
            </InteractiveCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
