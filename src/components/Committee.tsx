
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, User, UserCog, Globe } from "lucide-react";

const committeeData = {
  patrons: [
    {
      name: "Shri Vinod Kumar Agarwal",
      title: "Chairman",
      institution: "Chameli Devi Group of Institutions",
    },
    {
      name: "Shri Sanjay Kumar Agarwal",
      title: "Vice-chairman",
      institution: "Chameli Devi Group of Institutions",
    },
    {
      name: "Ms. Anusha Agarwal",
      title: "BOG Member",
      institution: "Chameli Devi Group of Institutions",
    },
  ],
  chairs: [
    {
      name: "Dr. Manish Shrivastava",
      title: "Conference Chair",
      role: "Principal, CDGI",
    },
    {
      name: "Dr. Mohan Rawat",
      title: "General Chair",
      role: "Head of Department",
      department: "Department of Engineering Sciences and Humanities",
    },
    {
      name: "Dr. Ruma Arora",
      title: "Convener",
      role: "Associate Professor",
      department: "Department of Engineering Sciences and Humanities",
    },
  ],
  advisory: [
    {
      name: "Dr. G.S. Tomar",
      affiliation: "IEEE MP Section",
    },
    {
      name: "Dr. Manish Dixit",
      affiliation: "IEEE MP Section",
    },
    {
      name: "Dr. K. Sudhakar",
      affiliation: "UMP Malaysia",
    },
    {
      name: "Dr. Erdum Cuce",
      affiliation: "Turkey",
    },
    {
      name: "Dr. Ashish Rajak",
      affiliation: "IIT Indore",
    },
    {
      name: "Dr. R N Singh",
      affiliation: "DAVV Indore",
    },
    {
      name: "Dr. Jitendra Agarwal",
      affiliation: "SOIT, RGPV Bhopal",
    },
    {
      name: "Mr. Shailesh Paliwal",
      affiliation: "Infosys USA",
    },
    {
      name: "Dr. Kapil Jainwal",
      affiliation: "IIT Hyderabad",
    },
    {
      name: "Dr. Swadesh Singh",
      affiliation: "Griet University, Hyderabad",
    },
  ],
  technical: [
    {
      name: "Dr. Vinimol Senan",
      affiliation: "NIESING, Singapore",
    },
    {
      name: "Dr. Sreenath Sukumaran",
      affiliation: "Taltech, Estonia",
    },
    {
      name: "Dr. V.V.S Murty",
      affiliation: "Holkar Science College",
    },
    {
      name: "Dr. Manoj Verma",
      affiliation: "CDGI, Indore",
    },
    {
      name: "Dr. Jitendra Sheethani",
      affiliation: "CDGI, Indore",
    },
    {
      name: "Dr. Manoj Agarwal",
      affiliation: "CDGI, Indore",
    },
    {
      name: "Prof. Deepak R. Phalke",
      affiliation: "CDGI, Indore",
    },
    {
      name: "Dr. Prerana Sharma",
      affiliation: "CDGI, Indore",
    },
    {
      name: "Dr. Purnima Shrivastav",
      affiliation: "SGSITS, Indore",
    },
    {
      name: "Dr. Abhay Tambe",
      affiliation: "CDGI, Indore",
    },
  ],
};

const CommitteeCard = ({ person }: { person: any }) => (
  <div className="bg-white rounded-lg shadow-sm border p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <h3 className="font-semibold text-conference-blue">{person.name}</h3>
    {person.title && <p className="text-sm text-gray-700 font-medium">{person.title}</p>}
    {person.role && <p className="text-sm text-gray-600">{person.role}</p>}
    {person.department && <p className="text-xs text-gray-500">{person.department}</p>}
    {person.institution && <p className="text-xs text-gray-500">{person.institution}</p>}
    {person.affiliation && <p className="text-sm text-gray-600">{person.affiliation}</p>}
  </div>
);

const Committee = () => {
  return (
    <section id="committee" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
            Committee
          </h2>
          <div className="w-20 h-1 bg-conference-gold mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Meet the distinguished members who are organizing and guiding RCESAD-2025.
          </p>
        </div>

        <Tabs defaultValue="patrons" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="patrons" className="data-[state=active]:bg-conference-blue data-[state=active]:text-white">
                <User className="w-4 h-4 mr-2" />
                Patrons
              </TabsTrigger>
              <TabsTrigger value="chairs" className="data-[state=active]:bg-conference-blue data-[state=active]:text-white">
                <UserCog className="w-4 h-4 mr-2" />
                Chairs
              </TabsTrigger>
              <TabsTrigger value="advisory" className="data-[state=active]:bg-conference-blue data-[state=active]:text-white">
                <Globe className="w-4 h-4 mr-2" />
                Advisory
              </TabsTrigger>
              <TabsTrigger value="technical" className="data-[state=active]:bg-conference-blue data-[state=active]:text-white">
                <Users className="w-4 h-4 mr-2" />
                Technical
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="patrons" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {committeeData.patrons.map((person, index) => (
                <CommitteeCard key={index} person={person} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chairs" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {committeeData.chairs.map((person, index) => (
                <CommitteeCard key={index} person={person} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advisory" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
              {committeeData.advisory.map((person, index) => (
                <CommitteeCard key={index} person={person} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
              {committeeData.technical.map((person, index) => (
                <CommitteeCard key={index} person={person} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Committee;
