// components/Hero.tsx
interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const Hero = ({ title, subtitle, buttonText }: HeroProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800">{title}</h1>
          <p className="text-xl mb-8 text-gray-600">{subtitle}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// components/Features.tsx
interface FeatureProps {
  title: string;
  description: string;
}

const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="px-6 py-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Find Your Dream Job",
      description:
        "Explore thousands of job opportunities from top companies in the education industry.",
    },
    {
      title: "Personalized Dashboard",
      description:
        "Track your job applications, interviews, and offers in one place.",
    },
    {
      title: "Career Guidance",
      description:
        "Get expert advice and resources to help you navigate your career path.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Our Features
        </h1>
        <div className="flex flex-wrap">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

// components/Testimonials.tsx
interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
}

const Testimonial = ({ name, title, quote }: TestimonialProps) => {
  return (
    <div className="p-6 text-center bg-white shadow-md">
      <p className="text-gray-600">{quote}</p>
      <h2 className="text-xl font-semibold text-gray-800 mt-4">{name}</h2>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Student",
      quote:
        "I found my dream job through this portal. The process was easy and straightforward.",
    },
    {
      name: "Jane Smith",
      title: "Student",
      quote:
        "I love the personalized dashboard. It helps me keep track of all my applications.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Testimonials
        </h1>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// components/Pricing.tsx
interface PricingPlanProps {
  name: string;
  price: string;
  features: string[];
}

const PricingPlan = ({ name, price, features }: PricingPlanProps) => {
  return (
    <div className="px-6 py-4 text-center border rounded-t">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-xl font-bold mb-4">{price}</p>
      <ul className="list-inside text-gray-600">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b">
        Sign Up
      </button>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0/month",
      features: [
        "Unlimited job applications",
        "Personalized dashboard",
        "Limited career guidance",
      ],
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Unlimited job applications",
        "Personalized dashboard",
        "Premium career guidance",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Pricing
        </h1>
        <div className="flex flex-wrap">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

// pages/index.tsx
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Hero
        title="Find Your Dream Job in Education"
        subtitle="The ultimate job portal for students in the education industry."
        buttonText="Get Started"
      />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  );
}