import { Link, useLocation } from "wouter";
import { Home, Info, GitBranch, Droplets, Settings, FileText, RefreshCw, Activity, Zap, Search, Target, BarChart3, BookOpen } from "lucide-react";

const Navigation = () => {
  const [location] = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/intro", label: "Intro", icon: Info },
    { path: "/structures", label: "Structure", icon: Search },
    { path: "/hormonal", label: "Hormonal", icon: Zap },
    { path: "/raas", label: "RAAS", icon: Activity },
    { path: "/jga", label: "JGA", icon: Target },
    { path: "/summary", label: "Summary", icon: BarChart3 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <img 
              src="/assets/web-logo.jpg" 
              alt="Kidney Function" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-lg sm:text-xl font-bold gradient-text hidden sm:inline">Kidney Function</span>
          </Link>
          
          <div className="flex items-center space-x-1 sm:space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-purple-400 bg-purple-400/10"
                      : "text-gray-300 hover:text-purple-400 hover:bg-purple-400/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline text-sm sm:text-base">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
