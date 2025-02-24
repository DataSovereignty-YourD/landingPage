import { Link } from 'react-router-dom';

const plans = [
    {
      key: 'basic',
      plan: 'Basic',
      price: '$49/month',
      apiCalls: '5,000 API calls',
      features: [
        'Team Members: 1',
      ],
      note: 'One-month free trial - initial user acquisition and service trial',
    },
    {
      key: 'pro',
      plan: 'Pro',
      price: '$299/month',
      apiCalls: '30,000 API calls',
      features: [
        'Team Members: Up to 5',
        'Mobile SDK Provided',
      ],
      note: '',
    },
    {
      key: 'enterprise',
      plan: 'Enterprise',
      price: 'Custom',
      apiCalls: '1,000,000+ API calls',
      features: [
        'Team Members: Unlimited',
        'Mobile SDK Provided',
        'Advanced Features',
        'Custom Integration',
        'Negotiable',
      ],
      note: '',
    },
  ];




const categorizedFeaturesData = [
    {
        category: "API Features",
        data: [
            {
                key: '1',
                feature: 'API requests/day',
                Basic: '1,000',
                Advanced: '10,000',
                Custom: 'Unlimited',
            },
            {
                key: '2',
                feature: 'Activity Logs',
                Basic: true,
                Advanced: true,
                Custom: true,
            },
        ],
    },
    {
        category: "Issuance",
        data: [
            {
                key: '3',
                feature: 'Issuance Configurations',
                Basic: '5 total',
                Advanced: '30 total',
                Custom: 'Unlimited',
            },
            {
                key: '4',
                feature: 'Revoke Credentials',
                Basic: false,
                Advanced: true,
                Custom: true,
            },
            {
                key: '5',
                feature: 'Custom Schema',
                Basic: true,
                Advanced: true,
                Custom: true,
            },
            {
                key: '6',
                feature: 'Test Credential Issuance',
                Basic: true,
                Advanced: true,
                Custom: true,
            },
        ],
    },
    {
        category: "Verification",
        data: [
            {
                key: '6',
                feature: 'Verification Configurations',
                Basic: '5 total',
                Advanced: '30 total',
                Custom: 'Unlimited',
            },
            {
                key: '8',
                feature: 'Test Credential Verification',
                Basic: true,
                Advanced: true,
                Custom: true,
            },
        ],
    },
    {
        category: "Integration & Standards",
        data: [
            {
                key: '12',
                feature: 'SDK Integration',
                Basic: false,
                Advanced: true,
                Custom: true,
            },
            {
                key: '13',
                feature: 'OIDC4VC, OIDC4VP Support',
                Basic: true,
                Advanced: true,
                Custom: true,
            },
            {
                key: '14',
                feature: 'W3C Standard Support',
                Basic: true,
                Advanced: true,
                Custom: true,
            },
            {
                key: '15',
                feature: 'DID Method Selection',
                Basic: false,
                Advanced: true,
                Custom: true,
            },
        ],
    },
    {
        category: "User & Access Management",
        data: [
            {
                key: '13',
                feature: 'User Accounts',
                Basic: 'Single admin account',
                Advanced: 'Multi-user access (up to 10)',
                Custom: 'Unlimited',
            },
        ],
    },
];


const PricingPage = () => {
    return (
        <div className="container mx-auto py-16 px-5 lg:px-20 bg-white">
            {/* 타이틀 */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
                Pricing Plans
            </h1>

            {/* 플랜 카드 */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 mb-16">
                {plans.map((plan) => (
                    <div
                        key={plan.key}
                        className="flex flex-col border rounded-2xl shadow-lg p-8 bg-white hover:shadow-2xl transition duration-300 ease-in-out"
                    >
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                            {plan.plan}
                        </h2>
                        <p className="text-xl font-semibold text-center text-blue-600 mb-6">
                            {plan.price}
                        </p>
                        <ul className="flex-1 mb-6 space-y-3">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="text-gray-600 text-sm">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto text-center">
                            {plan.plan !== 'Custom' ? (
                                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-full font-medium hover:opacity-90 transition">
                                    Subscribe
                                </button>
                            ) : (
                                <Link
                                    to="/contact"
                                    className="w-full inline-block bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-4 rounded-full font-medium hover:opacity-90 transition"
                                >
                                    Contact Us
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* 기능 비교 표 */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Feature Comparison
            </h2>
            {categorizedFeaturesData.map((category) => (
                <div key={category.category} className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {category.category}
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse shadow-md">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                    <th className="border px-4 py-3 text-left">Feature</th>
                                    <th className="border px-4 py-3">Basic</th>
                                    <th className="border px-4 py-3">Advanced</th>
                                    <th className="border px-4 py-3">Custom</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.data.map((item) => (
                                    <tr key={item.key} className="hover:bg-gray-100 transition">
                                        <td className="border px-4 py-3 text-gray-800">{item.feature}</td>
                                        <td className="border px-4 py-3 text-center">
                                            {typeof item.Basic === 'boolean' ? (item.Basic ? 'Yes' : 'No') : item.Basic}
                                        </td>
                                        <td className="border px-4 py-3 text-center">
                                            {typeof item.Advanced === 'boolean' ? (item.Advanced ? 'Yes' : 'No') : item.Advanced}
                                        </td>
                                        <td className="border px-4 py-3 text-center">
                                            {typeof item.Custom === 'boolean' ? (item.Custom ? 'Yes' : 'No') : item.Custom}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}

            {/* PG사 심사용 문구 */}
            <p className="text-center text-sm text-gray-500">
                For PG review purposes, all pricing information is subject to change.
            </p>
        </div>
    );
};

export default PricingPage;

