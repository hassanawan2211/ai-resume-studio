"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Plus, 
  FileText, 
  Download, 
  Share, 
  Edit3, 
  Eye,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Builder() {
  const [activeTab, setActiveTab] = useState("create");

  // Sample resumes data
  const resumes = [
    { id: 1, title: "Software Engineer Resume", lastModified: "2 days ago", score: 87 },
    { id: 2, title: "Product Manager Resume", lastModified: "1 week ago", score: 92 },
    { id: 3, title: "Marketing Specialist", lastModified: "3 weeks ago", score: 78 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Resume Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create professional, ATS-friendly resumes that help you stand out from the competition.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("create")}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
              activeTab === "create"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Create New
          </button>
          <button
            onClick={() => setActiveTab("my-resumes")}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
              activeTab === "my-resumes"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            My Resumes
          </button>
          <button
            onClick={() => setActiveTab("examples")}
            className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
              activeTab === "examples"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Examples
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "create" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blank template */}
            <Link
              href="/builder/create"
              className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 text-center hover:border-blue-400 hover:shadow-md transition group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition">
                <Plus className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Start from Scratch</h3>
              <p className="text-gray-600 text-sm">Create a custom resume from blank template</p>
            </Link>

            {/* AI Generator */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
                <Sparkles className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Resume Generator</h3>
              <p className="text-gray-600 text-sm">Let AI create your resume based on your profile</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition">
                Generate with AI
              </button>
            </div>

            {/* Upload existing */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition">
                <Download className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Upload Existing Resume</h3>
              <p className="text-gray-600 text-sm">Upload and enhance your current resume</p>
              <button className="mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                Upload File
              </button>
            </div>
          </div>
        )}

        {activeTab === "my-resumes" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {resumes.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="mx-auto text-gray-400" size={48} />
                <h3 className="font-semibold text-gray-900 mt-4">No resumes yet</h3>
                <p className="text-gray-600 mt-2">Create your first resume to get started</p>
                <Link
                  href="/builder/create"
                  className="inline-flex items-center mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Create Resume
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {resumes.map((resume) => (
                  <div key={resume.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition">
                    <div className="flex items-center">
                      <FileText className="text-blue-600 mr-4" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900">{resume.title}</h3>
                        <p className="text-sm text-gray-600">{resume.lastModified}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Score: {resume.score}%
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition">
                          <Edit3 size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-purple-600 transition">
                          <Share size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition">
                          <Download size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "examples" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Software Engineer", industry: "Technology", level: "Mid-level" },
              { title: "Marketing Manager", industry: "Marketing", level: "Senior" },
              { title: "Product Designer", industry: "Design", level: "Entry-level" },
              { title: "Data Analyst", industry: "Data Science", level: "Mid-level" },
              { title: "Sales Executive", industry: "Sales", level: "Senior" },
              { title: "Project Manager", industry: "Management", level: "Mid-level" },
            ].map((example, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{example.industry}</span>
                    <span>{example.level}</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    Use This Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}