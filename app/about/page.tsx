"use client";

import Image from "next/image";
import { useState } from "react";
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Clock,
  Shield,
  BookOpen
} from "lucide-react";

export default function About() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      bio: "Former HR Director with 10+ years of experience in talent acquisition."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack developer specializing in AI and machine learning applications."
    },
    {
      name: "Elena Rodriguez",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      bio: "Award-winning designer with expertise in UX/UI and branding."
    },
    {
      name: "David Kim",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      bio: "Product strategist with background in career coaching and EdTech."
    }
  ];

  const values = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Our Mission",
      description: "To empower job seekers with tools that help them showcase their true potential and land their dream jobs."
    },
    {
      icon: <Globe className="text-green-600" size={24} />,
      title: "Our Vision",
      description: "A world where everyone has access to professional resources that help them build meaningful careers."
    },
    {
      icon: <Shield className="text-purple-600" size={24} />,
      title: "Our Promise",
      description: "We're committed to providing the most effective, user-friendly resume building experience available."
    }
  ];

  const faqs = [
    {
      question: "How does the AI resume builder work?",
      answer: "Our AI analyzes thousands of successful resumes to provide tailored suggestions for content, formatting, and keywords specific to your industry and experience level."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and never share your personal information with third parties. You maintain full ownership of your resume content."
    },
    {
      question: "Can I customize the templates?",
      answer: "Yes, all our templates are fully customizable. You can change colors, fonts, sections, and layouts to match your personal brand."
    },
    {
      question: "Do you offer career advice?",
      answer: "Beyond resume building, we provide resources and guidance on cover letters, interview preparation, and job search strategies."
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Resume Studio</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're revolutionizing how job seekers create resumes that get noticed by employers and pass through applicant tracking systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mb-20">
        {/* Our Story */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              Founded in 2020, AI Resume Studio was born from a simple observation: too many qualified candidates were being overlooked 
              because their resumes didn't effectively communicate their value.
            </p>
            <p>
              Our founder, Sarah Johnson, spent over a decade in HR and saw firsthand how the right resume could transform someone's career 
              trajectory. She assembled a team of developers, designers, and career experts to create a solution that would democratize 
              access to professional resume building.
            </p>
            <p>
              Today, we've helped over 50,000 job seekers create resumes that have landed them positions at companies like Google, Amazon, 
              Microsoft, and thousands of other organizations worldwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-700 mb-1">50K+</div>
              <div className="text-sm text-blue-600">Users Helped</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-700 mb-1">92%</div>
              <div className="text-sm text-green-600">Success Rate</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-700 mb-1">100+</div>
              <div className="text-sm text-purple-600">Templates</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-orange-700 mb-1">24/7</div>
              <div className="text-sm text-orange-600">Support</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Our team working together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gray-50 mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Our Team</h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We're a diverse group of professionals passionate about helping you succeed in your career journey.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="font-bold text-gray-900">{member.name}</h4>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Frequently Asked Questions</h3>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have questions? We're here to help you understand how our platform works.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="flex justify-between items-center w-full py-5 text-left font-medium text-gray-900"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {openAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}