import { FiCheck } from 'react-icons/fi';

const CardPricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        { text: 'Access to 10 free tools', included: true },
        { text: 'Basic templates', included: true },
        { text: 'Community support', included: true },
        { text: '1 project per month', included: true },
      ],
      highlighted: false,
      buttonText: 'Get Started Free',
    },
    {
      name: 'Pro',
      price: '29',
      period: '/month',
      description: 'Best for professionals',
      badge: 'Most Popular',
      features: [
        { text: 'Access to all premium tools', included: true },
        { text: 'Unlimited templates', included: true },
        { text: 'Priority support', included: true },
        { text: 'Unlimited projects', included: true },
        { text: 'Advanced analytics', included: false },
      ],
      highlighted: true,
      buttonText: 'Start Pro Trial',
    },
    {
      name: 'Enterprise',
      price: '99',
      period: '/month',
      description: 'For teams and businesses',
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'Custom branding', included: true },
      ],
      highlighted: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Choose a plan that works best for you and your team. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative flex flex-col p-10 rounded-3xl border-2
                ${plan.highlighted ? 'bg-[#7922f8] text-white md:scale-105 border-[#7922f8]' : 'bg-white border-gray-200 text-gray-900 md:scale-95'}
                shadow-2xl shadow-[#7922f8]/40 transition-all duration-500 ease-out
                hover:shadow-3xl hover:shadow-[#7922f8]/60 hover:-translate-y-3
              `}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-md">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm font-medium mb-6">{plan.description}</p>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span className="font-bold ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center gap-3 text-sm font-bold"
                  >
                    {feature.included ? (
                      <FiCheck className="text-xl shrink-0" />
                    ) : (
                      <span className="w-5 h-5 shrink-0 border rounded-full border-gray-300 block" />
                    )}
                    <span className={feature.included ? '' : 'opacity-50'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs
                  ${plan.highlighted ? 'bg-white text-[#4f38f6]' : 'bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)] text-white'}
                  transition-all duration-500 ease-out
                  hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-black/10
                `}
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
