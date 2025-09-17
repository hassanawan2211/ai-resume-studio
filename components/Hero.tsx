"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-10">
      {/* Text Content */}
      <div className="flex flex-col gap-6 md:max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Build Your Professional Resume with AI
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Generate an ATS-friendly, polished resume in minutes. Tailored for your career goals and ready to impress recruiters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/builder"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition"
          >
            Start Building
          </Link>
          <Link
            href="/templates"
            className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg text-center font-medium hover:bg-gray-100 transition"
          >
            View Templates
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-md h-64 md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1581090700227-1d4b1fdb91f0?auto=format&fit=crop&w=800&q=80"
          alt="AI Resume Illustration"
          fill
          className="object-contain rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
