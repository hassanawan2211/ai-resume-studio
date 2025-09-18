"use client";

import Link from "next/link";
import { Download, Eye, FileText } from "lucide-react";

export default function Examples() {
  const examples = [
    { 
      title: "Software Engineer", 
      industry: "Technology", 
      level: "Mid-level",
      description: "Clean, technical resume highlighting programming skills and projects"
    },
    { 
      title: "Marketing Manager", 
      industry: "Marketing", 
      level: "Senior",
      description: "Results-driven resume with metrics and campaign highlights"
    },
    { 
      title: "Product Designer", 
      industry: "Design", 
      level: "Entry-level",
      description: "Visual portfolio-style resume with project case studies"
    },
    { 
      title: "Data Analyst", 
      industry: "Data Science", 
      level: "Mid-level",
      description: "Analytical resume showcasing data visualization and analysis skills"
    },
    { 
      title: "Sales Executive", 
      industry: "Sales", 
      level: "Senior",
      description: "Performance-focused resume with revenue achievements"
    },
    { 
      title: "Project Manager", 
      industry: "Management", 
      level: "Mid-level",
      description: "Leadership-focused resume with project deliverables and team management"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resume Examples</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse professionally designed resume templates for various industries and experience levels.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <FileText className="text-white opacity-50" size={48} />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span>{example.industry}</span>
                  <span>{example.level}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition flex items-center justify-center">
                    <Eye size={16} className="mr-2" />
                    Preview
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                    <Download size={16} className="mr-2" />
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to create your resume?</h2>
          <p className="text-gray-600 mb-6">Start with one of our templates or create from scratch</p>
          <Link
            href="/builder/create"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Start Building
          </Link>
        </div>
      </div>
    </div>
  );
}