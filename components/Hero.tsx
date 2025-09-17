"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Sparkles, Star, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    { icon: <Sparkles className="text-yellow-500" size={20} />, text: "AI-Powered Content Suggestions" },
    { icon: <CheckCircle className="text-green-500" size={20} />, text: "ATS-Friendly Templates" },
    { icon: <TrendingUp className="text-blue-500" size={20} />, text: "Increase Interview Chances" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10 rounded-b-3xl"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex flex-col gap-8 lg:max-w-2xl">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full py-1.5 pl-1.5 pr-4 w-max shadow-sm border border-gray-100">
            <div className="flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-3 py-1 text-sm">
              <Star size={14} className="mr-1" fill="currentColor" />
              <span>Trusted by 50,000+ Job Seekers</span>
            </div>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className="text-yellow-400" fill="currentColor" />
              ))}
              <span className="text-sm text-gray-600 ml-1">4.9/5</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Professional
            <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-2">
              Resume with AI
              <Sparkles className="absolute -top-4 -right-6 text-yellow-500" size={32} />
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Generate an ATS-friendly, polished resume in minutes. Tailored for your career goals and ready to impress recruiters.
          </p>

          {/* Animated feature highlight */}
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="text-blue-600">
              {features[currentFeature].icon}
            </div>
            <span className="text-gray-700 font-medium">
              {features[currentFeature].text}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/builder"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Building Now
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/templates"
              className="flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-800 rounded-xl text-lg font-medium hover:bg-gray-50/80 transition backdrop-blur-sm"
            >
              View Templates
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-2">
              <Users className="text-blue-600" size={20} />
              <div>
                <div className="font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              <div>
                <div className="font-bold text-gray-900">92%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="text-purple-600" size={20} />
              <div>
                <div className="font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Templates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-2xl">
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1581090700227-1d4b1fdb91f0?auto=format&fit=crop&w=800&q=80"
              alt="Professional resume example"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Floating card elements */}
            <div className="absolute top-6 -left-4 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">ATS Score: 98%</span>
              </div>
              <p className="text-xs text-gray-600">Your resume is optimized for applicant tracking systems</p>
            </div>
            
            <div className="absolute bottom-6 -right-4 bg-white p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-yellow-500" size={16} />
                <span className="text-sm font-medium">AI Recommendations</span>
              </div>
              <p className="text-xs text-gray-600">3 suggestions to improve your resume</p>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute -z-10 -top-4 -right-4 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute -z-10 -bottom-4 -left-4 w-56 h-56 bg-purple-200 rounded-full opacity-30 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}

// Needed for the stats section
function FileText({ className, size }: { className?: string; size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" x2="8" y1="13" y2="13"/>
      <line x1="16" x2="8" y1="17" y2="17"/>
      <line x1="10" x2="8" y1="9" y2="9"/>
    </svg>
  );
}