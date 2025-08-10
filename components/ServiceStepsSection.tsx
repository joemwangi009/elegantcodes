'use client';

import { motion } from 'framer-motion';

export default function ServiceStepsSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Schedule a free consultation to discuss your project requirements, goals, and vision.',
      icon: 'ri-customer-service-2-line',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      number: '02',
      title: 'Project Analysis',
      description: 'Our experts analyze your requirements and provide detailed technical recommendations.',
      icon: 'ri-search-line',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200'
    },
    {
      number: '03',
      title: 'Proposal & Quote',
      description: 'Receive a comprehensive proposal with detailed scope, timeline, and transparent pricing.',
      icon: 'ri-file-list-3-line',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      number: '04',
      title: 'Project Planning',
      description: 'Detailed project planning with milestones, deliverables, and team allocation.',
      icon: 'ri-calendar-check-line',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      number: '05',
      title: 'Development & Testing',
      description: 'Agile development with regular updates, testing, and quality assurance.',
      icon: 'ri-code-s-slash-line',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      borderColor: 'border-red-200'
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'Smooth deployment, training, and ongoing support for your success.',
      icon: 'ri-rocket-line',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full text-amber-800 font-semibold text-sm mb-8">
            <i className="ri-route-line mr-2"></i>
            Our Process
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 font-poppins">
            How We Deliver
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent block">Exceptional Results</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our proven 6-step process ensures your project is delivered on time, within budget, and exceeds expectations.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Step Card */}
              <div className={`bg-white rounded-3xl shadow-xl border-2 ${step.borderColor} p-8 h-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.bgColor} rounded-full opacity-30 -translate-y-12 translate-x-12`}></div>
                
                {/* Step Number */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                  <span className="text-white font-bold text-2xl font-poppins">{step.number}</span>
                </div>

                {/* Step Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${step.bgColor} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  <i className={`${step.icon} text-2xl bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}></i>
                </div>

                {/* Step Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">{step.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>

              {/* Connection Line (for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-200 to-slate-300 transform -translate-y-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-12 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <i className="ri-arrow-right-line text-white text-3xl"></i>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">Ready to Get Started?</h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's begin your journey to digital transformation. Schedule your free consultation today and see how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <i className="ri-customer-service-2-line mr-3"></i>
                Schedule Consultation
              </a>
              <a
                href="/#quote"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <i className="ri-file-list-3-line mr-3"></i>
                Get Free Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 