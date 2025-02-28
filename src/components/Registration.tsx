
const registrationFees = [{
  category: "Student (UG/PG)",
  fees: "300 Rs.",
  lateFees: "500 Rs.",
  onSpotFees: "600 Rs.",
  color: "bg-blue-50 border-blue-100"
}, {
  category: "PhD Scholars/ Academia",
  fees: "500 Rs.",
  lateFees: "700 Rs.",
  onSpotFees: "800 Rs.",
  color: "bg-purple-50 border-purple-100"
}, {
  category: "Academic or Research Professional (IITs/NITs)",
  fees: "700 Rs.",
  lateFees: "900 Rs.",
  onSpotFees: "1000 Rs.",
  color: "bg-green-50 border-green-100"
}, {
  category: "Industry Person",
  fees: "900 Rs.",
  lateFees: "1100 Rs.",
  onSpotFees: "1200 Rs.",
  color: "bg-amber-50 border-amber-100"
}, {
  category: "Industry Group (>3)",
  fees: "1100 Rs.",
  lateFees: "1300 Rs.",
  onSpotFees: "1400 Rs.",
  color: "bg-red-50 border-red-100"
}, {
  category: "International Scholars",
  fees: "15$",
  lateFees: "20$",
  onSpotFees: "25$",
  color: "bg-emerald-50 border-emerald-100"
}, {
  category: "Attendee",
  fees: "300 Rs.",
  lateFees: "500 Rs.",
  onSpotFees: "600 Rs.",
  color: "bg-indigo-50 border-indigo-100"
}];
const bankDetails = {
  accountName: "CHAMELI DEVI SCHOOL OF ENGINEERING",
  bankName: "HDFC BANK",
  accountNo: "12401450000161",
  ifscCode: "HDFC0001240"
};
const Registration = () => {
  return <section id="registration" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-conference-blue mb-4">
            Registration
          </h2>
          <div className="w-20 h-1 bg-conference-gold mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Register for RCESAD-2025 to join the conversation on engineering advancements 
            and network with professionals from around the world.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Please submit your abstracts and papers to <span className="font-semibold">rcesad@gmail.com</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-conference-blue mb-6">Registration Fees</h3>
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="grid grid-cols-4 text-sm font-semibold text-gray-700 bg-gray-100 p-4 border-b">
                <div>Category</div>
                <div>Regular Fees</div>
                <div>Late Fees</div>
                <div>On-Spot Fees</div>
              </div>
              <div className="divide-y">
                {registrationFees.map((item, index) => <div key={index} className={`grid grid-cols-4 text-sm p-4 ${item.color}`}>
                    <div className="font-medium">{item.category}</div>
                    <div>{item.fees}</div>
                    <div>{item.lateFees}</div>
                    <div>{item.onSpotFees}</div>
                  </div>)}
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <h3 className="text-xl font-bold text-conference-blue mb-6">Bank Details</h3>
            <div className="bg-gray-50 rounded-xl p-6 border">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium text-gray-700">Account Name:</div>
                  <div>{bankDetails.accountName}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium text-gray-700">Bank Name:</div>
                  <div>{bankDetails.bankName}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium text-gray-700">Account No.:</div>
                  <div>{bankDetails.accountNo}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium text-gray-700">IFSC Code:</div>
                  <div>{bankDetails.ifscCode}</div>
                </div>
              </div>

              <div className="mt-8 bg-conference-blue/5 p-4 rounded-lg">
                <p className="text-sm text-center text-gray-700">
                  For registration, fill the form using the given QR Code below
                </p>
                <div className="flex justify-center mt-4">
                  <img alt="Registration QR Code" src="/lovable-uploads/6f499eae-ccb0-45f4-b340-5a29eb6b58f1.png" className="w-32 h-32 border-4 border-white rounded-lg shadow-md object-cover" />
                </div>
              </div>

            <div className="mt-8 text-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfyJMXqdJhMlhUGdFhjhFVqtN22hbIPOpvMutifb2bGkCuNtA/viewform" target="_blank" rel="noopener noreferrer" className="conference-btn-primary">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Registration;
