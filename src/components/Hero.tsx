import { CalendarDays, MapPin, Users, GraduationCap, FileText } from "lucide-react";

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
              
              {/* IEEE Logo - left aligned and wider */}
              <div className="mb-4">
                <div className="bg-white rounded-lg p-3 inline-flex items-center shadow-md border-2 border-conference-blue/30 hover:shadow-lg transition-shadow">
                  <img src="/lovable-uploads/b9fecb39-066a-49c3-9c48-ab541febfad9.png" alt="IEEE MP Section" className="h-16 w-56 object-contain" />
                </div>
              </div>
              
              {/* Other two logos below - aligned under IEEE logo */}
              <div className="flex space-x-6">
                <div className="bg-white rounded-lg p-3 inline-flex items-center shadow-md hover:shadow-lg transition-shadow">
                  <img src="/lovable-uploads/8a8af421-cdd9-48d4-bda6-5f0fbd5d8da8.png" alt="ISTE" className="h-14 w-24 object-contain" />
                </div>
                
                <div className="bg-white rounded-lg p-3 inline-flex items-center shadow-md hover:shadow-lg transition-shadow">
                  <img src="/lovable-uploads/d22570e5-6338-4da1-8133-b8820f75305a.png" alt="International Community" className="h-14 w-24 object-contain" />
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-conference-blue" />
                <span className="text-conference-blue font-bold">Abstract Template</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Download the abstract template for your submissions:
              </p>
              <a 
                href="https://docs.google.com/document/d/19-pQGmLobwGXYpoOwT0dnbXS4_6nT_X0/edit?usp=sharing&ouid=102320521960462274726&rtpof=true&sd=true" 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-conference-blue/30 rounded-md text-conference-blue hover:bg-conference-blue/5 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-4 h-4" />
                <span>Download Template</span>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl animate-hero-glow">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Engineering conference presentation" 
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white rounded-lg shadow-lg p-4 md:p-5">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/cdgi-logo.jpeg" 
                  alt="CDGI Logo" 
                  className="w-12 h-12.5 object-contain"
                />
                <div>
                  <div className="text-conference-blue font-bold text-sm">Organized By</div>
                  <div className="font-medium text-gray-800 text-sm">CDGI, Indore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
