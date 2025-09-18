"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, FileText, Download, Share, Edit3, Eye, Trash2 } from "lucide-react";

export default function MyResumes() {
  const [resumes, setResumes] = useState([
    { id: 1, title: "Software Engineer Resume", lastModified: "2 days ago", score: 87 },
    { id: 2, title: "Product Manager Resume", lastModified: "1 week ago", score: 92 },
    { id: 3, title: "Marketing Specialist", lastModified: "3 weeks ago", score: 78 },
  ]);

  const deleteResume = (id: number) => {
    setResumes(resumes.filter(resume => resume.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Resumes</h1>
            <p className="text-gray-600">Manage and edit your saved resumes</p>
          </div>
          <Link
            href="/builder/create"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus size={16} className="mr-2" />
            Create New
          </Link>
        </div>

        {/* Resumes List */}
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
                      <p className="text-sm text-gray-600">Last modified: {resume.lastModified}</p>
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
                      <button 
                        className="p-2 text-gray-400 hover:text-red-600 transition"
                        onClick={() => deleteResume(resume.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}