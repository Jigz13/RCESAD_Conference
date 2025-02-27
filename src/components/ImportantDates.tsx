
import { Calendar } from "lucide-react";

const dates = [
  {
    title: "Last Date of Abstract Submission",
    date: "27 February 2025",
    color: "bg-red-50 border-red-100",
    icon: "calendar-alert",
  },
  {
    title: "Acceptance Notification",
    date: "01 March 2025",
    color: "bg-green-50 border-green-100",
    icon: "check-circle",
  },
  {
    title: "Early Bird Registration",
    date: "03 March 2025",
    color: "bg-blue-50 border-blue-100",
    icon: "users",
  },
  {
    title: "Submission of Full Manuscript",
    date: "04 March 2025",
    color: "bg-purple-50 border-purple-100",
    icon: "file-text",
  },
  {
    title: "Conference Dates",
    date: "7-8 March 2025",
    color: "bg-amber-50 border-amber-100",
    icon: "calendar",
  },
];

const ImportantDates = () => {
  return (
    <section id="dates" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
            Important Dates
          </h2>
          <div className="w-20 h-1 bg-conference-gold mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Mark your calendar for these key deadlines to ensure your participation in RCESAD-2025.
          </p>
        </div>

        <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
          {dates.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center p-4 rounded-lg border ${item.color} animate-fade-in transition-all duration-300 hover:shadow-md`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                <Calendar className="w-6 h-6 text-conference-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
