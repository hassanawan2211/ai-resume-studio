"use client";

export default function Features() {
  const features = [
    { title: "AI-Powered", description: "Generate smart bullet points and summaries automatically." },
    { title: "ATS-Friendly", description: "Your resume will be optimized for applicant tracking systems." },
    { title: "Customizable Templates", description: "Choose from modern, professional templates for every industry." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
