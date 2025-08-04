
'use client';

interface ServiceCaseStudyProps {
  caseStudy: {
    client: string;
    quote: string;
    outcome: string;
    metrics: string[];
  };
}

export default function ServiceCaseStudy({ caseStudy }: ServiceCaseStudyProps) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 mb-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-poppins">Success Story</h3>
        <p className="text-slate-600 font-inter">See how we've helped businesses like yours succeed</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Client Quote */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-amber-500 opacity-20 font-serif">"</div>
            <blockquote className="text-lg text-slate-700 italic leading-relaxed font-inter pl-8">
              {caseStudy.quote}
            </blockquote>
          </div>
          
          <div className="flex items-center mt-6 pl-8">
            <div className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-full mr-4">
              <i className="ri-user-line text-slate-900 text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">{caseStudy.client}</h4>
              <p className="text-sm text-slate-600">Satisfied Client</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div>
          <h4 className="text-lg font-bold text-slate-900 mb-4 font-poppins">Key Results</h4>
          <div className="space-y-3">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-full mr-3">
                  <i className="ri-arrow-up-line text-slate-900 text-sm"></i>
                </div>
                <span className="font-medium text-slate-900 text-sm">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Outcome */}
      <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
        <h4 className="text-lg font-bold text-slate-900 mb-3 font-poppins">Project Outcome</h4>
        <p className="text-slate-700 leading-relaxed font-inter">{caseStudy.outcome}</p>
      </div>
    </div>
  );
}
