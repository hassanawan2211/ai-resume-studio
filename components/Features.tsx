"use client";

import { useState, useEffect } from "react";
import { 
  Sparkles, 
  CheckCircle, 
  LayoutTemplate, 
  Zap, 
  Target,
  Clock,
  Shield,
  TrendingUp
} from "lucide-react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { 
      title: "AI-Powered Content", 
      description: "Generate smart bullet points and professional summaries automatically with our advanced AI.",
      icon: <Sparkles className="text-yellow-500" size={28} />,
      color: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200"
    },
    { 
      title: "ATS-Optimized", 
      description: "Your resume will be optimized for applicant tracking systems with the right keywords and formatting.",
      icon: <CheckCircle className="text-green-500" size={28} />,
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    { 
      title: "Professional Templates", 
      description: "Choose from modern, industry-specific templates designed by professional recruiters.",
      icon: <LayoutTemplate className="text-blue-500" size={28} />,
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    { 
      title: "Quick & Easy", 
      description: "Create a professional resume in minutes, not hours. Our intuitive interface guides you step-by-step.",
      icon: <Zap className="text-orange-500" size={28} />,
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    },
    { 
      title: "Targeted Results", 
      description: "Tailor your resume for specific job positions with our targeted optimization features.",
      icon: <Target className="text-red-500" size={28} />,
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200"
    },
    { 
      title: "Time-Saving", 
      description: "Auto-fill your resume from your LinkedIn profile or other job platforms with one click.",
      icon: <Clock className="text-purple-500" size={28} />,
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Everything You Need for Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dream Job</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our powerful features help you create a resume that stands out from the competition and gets you noticed.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className={`bg-white p-6 rounded-2xl border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${feature.borderColor} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Icon Container */}
            <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
              {feature.icon}
            </div>
            
            {/* Content */}
            <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            
            {/* Decorative Element */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="inline-flex items-center text-sm font-medium text-gray-500">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 lg:p-12 text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
            <div className="text-blue-100">Resumes Created</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">92%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
            <div className="text-blue-100">Templates</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
            <div className="text-blue-100">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}