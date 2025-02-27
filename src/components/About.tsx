
import { Building, BookOpen, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
            About the Conference
          </h2>
          <div className="w-20 h-1 bg-conference-gold mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            RCESAD-2025 provides an opportunity for researchers, scholars, delegates
            and students to interact and share their experience and knowledge in
            technology application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About CDGI */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover animate-slide-in">
            <div className="flex items-center mb-4">
              <Building className="w-6 h-6 text-conference-blue" />
              <h3 className="text-xl font-bold text-conference-blue ml-3">About CDGI</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Chameli Devi Group of Institutions took its first step in July 2006 with 
              a vision to design future scientifically. Within a short span, the Institute 
              has attained a strong footing amongst all the technical colleges of Madhya 
              Pradesh. It is affiliated to RGPV, Bhopal, approved by AICTE, New Delhi, and 
              accredited with 'A+' Grade by NAAC and NBA.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-conference-blue mb-2">Vision</h4>
              <p className="text-gray-600 text-sm">
                To be a reputed institute of excellence in professional education for 
                fostering competent professionals with high moral standards and capable 
                of contributing towards society and industry.
              </p>
            </div>
          </div>

          {/* About ESH */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-conference-blue" />
              <h3 className="text-xl font-bold text-conference-blue ml-3">Department of ESH</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Department of Science and Humanities is one of the oldest departments 
              established in 2006 since the inception of this Institute. The Department 
              has a well-knit team of highly qualified, experienced, and motivated faculty 
              who cater to the basic needs of the students.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-conference-blue mb-2">Mission</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Promoting academic growth by offering innovative UG and PG programs</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Undertaking collaborative projects for students to interact with industries and society</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scope of RCESAD */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 text-conference-blue" />
              <h3 className="text-xl font-bold text-conference-blue ml-3">Scope of RCESAD</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Recent Challenges in Engineering Science and Advanced Technology (RCESAD-2025) 
              will provide an excellent forum for sharing knowledge and results in 
              Recent Challenges in Engineering Science & Technology.
            </p>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              This is a large gathering where researchers, engineers, and industry 
              professionals come together to discuss and present the latest advancements 
              and critical issues facing modern engineering fields, particularly in the 
              realm of advanced technologies, with a focus on overcoming the challenges 
              associated with these new developments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
