import { FiUser, FiPackage, FiZap } from 'react-icons/fi';

const Steps = () => {
  const steps = [
    {
      id: '01',
      icon: <FiUser className="text-5xl text-[#7922f8]" />,
      title: 'Create Account',
      description:
        'Sign up for free and set up your personal profile in minutes.',
    },
    {
      id: '02',
      icon: <FiPackage className="text-5xl text-[#7922f8]" />,
      title: 'Choose Products',
      description: 'Browse our curated collection and pick the tools you need.',
    },
    {
      id: '03',
      icon: <FiZap className="text-5xl text-[#7922f8]" />,
      title: 'Start Creating',
      description: 'Download and start using your tools to boost productivity.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gradient-to-br from-[#4f38f6] to-[#9315fa] text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-purple-200">
                {step.id}
              </div>

              <div className="w-24 h-24 rounded-full bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
