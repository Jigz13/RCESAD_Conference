
import { CalendarDays, MapPin, Users, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <div className="badge bg-conference-blue/10 text-conference-blue">
                International Conference
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-conference-blue leading-tight">
                Recent Challenges in Engineering Science & Advanced Technology
              </h1>
              
              <p className="text-lg md:text-xl text-conference-gray font-medium mt-2">
                (RCESAD-2025)
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              A premier gathering where researchers, engineers, and industry professionals 
              discuss the latest advancements and critical issues in engineering fields.
            </p>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a href="#registration" className="conference-btn-primary text-center">
                Register Now
              </a>
              <a href="#about" className="conference-btn-outlined text-center">
                Learn More
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center space-x-2">
                <CalendarDays className="w-5 h-5 text-conference-blue" />
                <span className="text-sm font-medium">7-8 March 2025</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-conference-blue" />
                <span className="text-sm font-medium">Indore, India</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-conference-blue" />
                <span className="text-sm font-medium">Hybrid Mode</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-conference-blue" />
                <span className="text-sm font-medium">Proceedings with ISBN</span>
              </div>
            </div>
            
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="text-conference-blue font-bold mb-3">In Association With:</div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white rounded-lg p-2 flex flex-col items-center shadow-md">
                  <img src="/lovable-uploads/e671f055-5b9d-4f8a-9cfe-e7ffced6794f.png" alt="IEEE MP Section" className="h-10 object-contain" />
                  <span className="text-conference-blue text-xs font-bold mt-1">IEEE MP Section</span>
                </div>
                <div className="bg-white rounded-lg p-2 flex flex-col items-center shadow-md">
                  <span className="text-conference-blue text-sm font-medium">ISTE</span>
                </div>
                <div className="bg-white rounded-lg p-2 flex flex-col items-center shadow-md">
                  <span className="text-conference-blue text-xs font-medium">International Community for Global Sustainability</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl animate-hero-glow">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Engineering conference presentation" 
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white rounded-lg shadow-lg p-4 w-48 md:w-64">
              <div className="text-conference-blue font-bold mb-1">Organized By</div>
              <div className="flex items-center justify-center">
                <span className="font-medium text-gray-800">CDGI, Indore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
