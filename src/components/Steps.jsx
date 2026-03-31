const Steps = () => {
  const steps = [
    {
      image: '../assets/user.png',
      title: 'Create Account',
      description:
        'Sign up for free and set up your personal profile in minutes.',
    },
    {
      image: '../assets/package.png',
      title: 'Choose Products',
      description: 'Browse our curated collection and pick the tools you need.',
    },
    {
      image: '../assets/rocket.png',
      title: 'Start Creating',
      description: 'Download and start using your tools to boost productivity.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Started in 3 Steps
          </h2>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
        
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 w-64">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>

        
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center mx-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#7C3AED] rounded-full"></span>
                    <span className="w-2 h-2 bg-[#7C3AED]/60 rounded-full"></span>
                    <span className="w-2 h-2 bg-[#7C3AED]/30 rounded-full"></span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
