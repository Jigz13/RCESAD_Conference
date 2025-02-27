
const tracks = [
  {
    id: "engineering-sciences",
    title: "Engineering Sciences",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    id: "engineering-technology",
    title: "Engineering Technology",
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    id: "business-management",
    title: "Business Management And Studies",
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    id: "sustainable-development",
    title: "Sustainable Development",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    id: "material-science",
    title: "Material Science And Nanotechnology",
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    color: "bg-red-50 text-red-600 border-red-100",
  },
];

const Tracks = () => {
  return (
    <section id="tracks" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
            Conference Tracks
          </h2>
          <div className="w-20 h-1 bg-conference-gold mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            The conference covers a wide range of topics across six major tracks,
            providing a comprehensive platform for researchers and practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div 
              key={track.id}
              className={`rounded-xl p-6 border ${track.color} transition-transform duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold">{track.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
