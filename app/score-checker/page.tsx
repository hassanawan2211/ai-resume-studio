"use client";

import { useState, useRef } from "react";
import { UploadCloud, FileText, Download, Sparkles, X } from "lucide-react";

export default function ScoreChecker() {
  const [resumeText, setResumeText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsLoading(true);

    // Simulate file processing
    setTimeout(() => {
      if (file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setResumeText(e.target?.result as string);
          setIsLoading(false);
        };
        reader.readAsText(file);
      } else {
        // Simulate processing non-text files (PDF/DOCX)
        setResumeText("Experienced software developer with 5+ years in web development...");
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleCheckScore = () => {
    if (!resumeText.trim()) return;
    
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // More realistic scoring algorithm based on text length and content
      const baseScore = Math.min(40 + (resumeText.length / 100), 80);
      const variation = Math.floor(Math.random() * 21) - 10; // -10 to +10
      const generatedScore = Math.min(Math.max(Math.floor(baseScore + variation), 40), 95);
      
      setScore(generatedScore);
      
      // Generate suggestions based on score
      const newSuggestions = [];
      if (generatedScore < 70) {
        newSuggestions.push("Add more quantifiable achievements");
        newSuggestions.push("Include industry-specific keywords");
      }
      if (generatedScore < 80) {
        newSuggestions.push("Shorten paragraphs for better readability");
        newSuggestions.push("Add a professional summary section");
      }
      if (resumeText.length < 500) {
        newSuggestions.push("Expand on your work experience details");
      }
      if (!resumeText.toLowerCase().includes("managed") && !resumeText.toLowerCase().includes("led")) {
        newSuggestions.push("Incorporate more action verbs like 'managed', 'led', 'developed'");
      }
      
      setSuggestions(newSuggestions);
      setIsLoading(false);
    }, 2000);
  };

  const clearFile = () => {
    setResumeText("");
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-start pt-20 px-4 sm:px-8 pb-12">
      <div className="max-w-3xl w-full bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-blue-600" size={28} />
            Resume Score Checker
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Upload your resume or paste your text to get an AI-generated score and personalized suggestions to improve it.
          </p>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-48 px-4 py-6 bg-white text-gray-700 rounded-xl border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
              {isLoading ? (
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3"></div>
                  <span className="text-sm">Processing your resume...</span>
                </div>
              ) : (
                <>
                  <UploadCloud size={40} className="mb-3 text-blue-600" />
                  <span className="text-sm font-medium text-center">
                    Upload Resume (PDF/DOCX/TXT)
                    <br />
                    <span className="font-normal text-gray-500">Max 5MB</span>
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".pdf,.docx,.txt,.doc"
                  />
                </>
              )}
            </label>
          </div>
          
          {fileName && (
            <div className="mt-3 flex items-center justify-between bg-blue-50 rounded-lg p-3">
              <div className="flex items-center">
                <FileText size={16} className="text-blue-600 mr-2" />
                <span className="text-sm font-medium truncate">{fileName}</span>
              </div>
              <button 
                onClick={clearFile}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="relative my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 flex-shrink text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Textarea */}
        <div className="mb-6">
          <label htmlFor="resume-text" className="block text-sm font-medium text-gray-700 mb-2">
            Paste your resume text
          </label>
          <textarea
            id="resume-text"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
            placeholder="Paste your resume content here..."
            rows={6}
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />
          <div className="text-xs text-gray-500 mt-1">
            {resumeText.length} characters
          </div>
        </div>

        {/* Check Score Button */}
        <button
          className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
            isLoading || !resumeText.trim()
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg"
          }`}
          onClick={handleCheckScore}
          disabled={isLoading || !resumeText.trim()}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles size={18} />
              Check Resume Score
            </>
          )}
        </button>

        {/* Result Section */}
        {score !== null && (
          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center relative">
                <svg className="w-32 h-32" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeDasharray={`${score}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{score}</span>
                  <span className="text-sm text-gray-600">/100</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                {score >= 80 ? "Excellent Resume!" : score >= 60 ? "Good Start!" : "Needs Improvement"}
              </h2>
              <p className="text-gray-600 mt-2">
                {score >= 80 
                  ? "Your resume is well-structured and contains strong content." 
                  : score >= 60 
                  ? "Your resume has potential but could be improved in several areas."
                  : "Your resume needs significant improvements to be competitive."}
              </p>
            </div>

            {suggestions.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles size={18} className="text-blue-600" />
                  Suggestions for Improvement
                </h3>
                <ul className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-2">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        </div>
                      </div>
                      <span className="text-gray-700">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <Download size={18} />
                Download Full Report
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-gray-500">
          <p>This tool provides simulated feedback. For best results, consult with a career professional.</p>
        </div>
      </div>
    </div>
  );
}