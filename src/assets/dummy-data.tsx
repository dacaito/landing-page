import { ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Stockouts and emergency purchases',
        desc: 'Unexpected shortages force rush buys, expediting, and production delays.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Excess inventory and write-offs',
        desc: 'Over-ordering ties up cash and leads to scrap, obsolescence, and write-downs.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Hours lost on manual recounts',
        desc: 'Teams burn time chasing variances with cycle counts and ad-hoc audits.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Decisions made with unreliable data',
        desc: 'Planning suffers when the system of record doesn’t match reality.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$499',
        desc: 'Best for early-stage startups.',
        credits: 'One-time',
        features: [
            'Project discovery & planning',
            'UI/UX design',
            'Basic website development',
            '1 revision round',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Growth',
        price: '$1,499',
        desc: 'Growing teams and businesses.',
        credits: 'Monthly',
        features: [
            'Everything in Starter',
            'Advanced UI/UX design',
            'Custom development',
            'Performance optimization',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Scale',
        price: '$3,999',
        desc: 'For brands ready to scale fast.',
        credits: 'Custom',
        features: [
            'Everything in Growth',
            'Dedicated project manager',
            'Ongoing optimization',
            'Marketing & growth support',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: '1. Capture physical movements',
        answer: 'Cameras continuously monitor inventory flows, ensuring no movement is missed.'
    },
    {
        question: '2. Validate inventory events',
        answer: 'Vision-based intelligence identifies materials, movements and quantities.'
    },
    {
        question: '3. Synchronize ERP in real time',
        answer: 'Discrepancies are detected and corrected automatically, without operator input.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];