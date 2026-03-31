const CardPricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Perfect for trying out our basic tools.',
      features: [
        { text: '3 Digital Tools', included: true },
        { text: 'Basic Support', included: true },
        { text: '5GB Storage', included: true },
        { text: 'Team Collaboration', included: false },
        { text: 'Advanced Analytics', included: false },
      ],
      highlighted: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Best for professionals who need powerful tools.',
      badge: 'Most Popular',
      features: [
        { text: '15 Digital Tools', included: true },
        { text: 'Priority Support', included: true },
        { text: '50GB Storage', included: true },
        { text: 'Team Collaboration', included: true },
        { text: 'Advanced Analytics', included: false },
      ],
      highlighted: true,
      buttonText: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams that need unlimited access and support.',
      features: [
        { text: 'Unlimited Tools', included: true },
        { text: '24/7 Support', included: true },
        { text: 'Unlimited Storage', included: true },
        { text: 'Team Collaboration', included: true },
        { text: 'Advanced Analytics', included: true },
      ],
      highlighted: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Choose a plan that works best for you and your team. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-[#7C3AED] text-white shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <span className="bg-white text-[#7C3AED] text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
                  {plan.badge}
                </span>
              )}

              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>

              <div className="mt-2 mb-3">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? 'text-white/70' : 'text-gray-400'
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-white/80' : 'text-gray-500'
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlighted ? 'text-white' : 'text-[#7C3AED]'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.highlighted ? 'text-white/40' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        !feature.included
                          ? plan.highlighted
                            ? 'text-white/40'
                            : 'text-gray-300'
                          : ''
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition ${
                  plan.highlighted
                    ? 'bg-white text-[#7C3AED] hover:bg-gray-100'
                    : 'bg-[#7C3AED] text-white hover:bg-[#6C3CE1]'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardPricing;
