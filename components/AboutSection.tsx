
'use client';

export default function AboutSection() {
  const stats = [
    { number: '1200+', label: 'Projects Completed' },
    { number: '450+', label: 'Happy Clients' },
    { number: '25+', label: 'Industries Served' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years experience in React, Node.js, and cloud architecture."
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      image: "https://media.istockphoto.com/id/1701982102/photo/confident-businessman-in-his-office.jpg?s=612x612&w=0&k=20&c=cd8DIQxeqXMNjGeDp6vn9xEVIaXZRb_5Rbovdsz3g7g=",
      bio: "Creative designer specializing in user experience and modern interface design."
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      image: "https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=",
      bio: "Experienced project manager with expertise in agile methodologies and client relations."
    }
  ];

  const teamImage = "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc=";

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
              About <span className="text-amber-500">ElegantCodes</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 font-inter leading-relaxed">
              We are a team of passionate developers, designers, and strategists dedicated to creating 
              exceptional digital solutions. With years of experience in the IT industry, we understand 
              the unique challenges businesses face in today's digital landscape.
            </p>
            <p className="text-lg text-slate-600 mb-8 font-inter leading-relaxed">
              Our mission is to transform your ideas into powerful, scalable, and user-friendly applications 
              that drive business growth and enhance operational efficiency. We pride ourselves on delivering 
              elegant code that stands the test of time.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-amber-500 mb-2 font-poppins">{stat.number}</div>
                  <div className="text-slate-600 font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop&crop=landscape"
              alt="ElegantCodes Team"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/30 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">Our Team</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-inter">
            Meet the talented individuals who bring your projects to life with creativity, 
            expertise, and unwavering dedication to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 mx-auto rounded-full object-cover object-top shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-300"></div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-poppins">{member.name}</h4>
              <p className="text-amber-500 font-semibold mb-3 font-inter">{member.role}</p>
              <p className="text-slate-600 font-inter">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
