
'use client';

export default function AboutSection() {
  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Developer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20software%20developer%20portrait%2C%20elegant%20business%20headshot%20with%20dark%20navy%20background%2C%20sophisticated%20IT%20professional%20with%20gold%20accent%20lighting%2C%20clean%20corporate%20photography%20style%2C%20modern%20tech%20industry%20executive%2C%20confident%20software%20engineer%20portrait&width=300&height=300&seq=team-1&orientation=squarish',
      bio: 'Full-stack developer with expertise in modern web technologies and system architecture.',
    },
    {
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20UI%20UX%20designer%20portrait%2C%20elegant%20business%20headshot%20with%20dark%20navy%20background%2C%20sophisticated%20design%20professional%20with%20gold%20accent%20lighting%2C%20clean%20corporate%20photography%20style%2C%20modern%20creative%20industry%20expert%2C%20confident%20product%20designer%20portrait&width=300&height=300&seq=team-2&orientation=squarish',
      bio: 'Creative designer focused on creating intuitive and beautiful user experiences.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20project%20manager%20portrait%2C%20elegant%20business%20headshot%20with%20dark%20navy%20background%2C%20sophisticated%20business%20professional%20with%20gold%20accent%20lighting%2C%20clean%20corporate%20photography%20style%2C%20modern%20project%20management%20expert%2C%20confident%20team%20leader%20portrait&width=300&height=300&seq=team-3&orientation=squarish',
      bio: 'Experienced project manager ensuring timely delivery and client satisfaction.',
    },
  ];

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
              src="https://readdy.ai/api/search-image?query=Professional%20software%20development%20team%20working%20together%20in%20modern%20office%20environment%2C%20elegant%20workspace%20with%20multiple%20developers%20collaborating%2C%20dark%20navy%20and%20gold%20themed%20office%20interior%2C%20sophisticated%20IT%20company%20culture%2C%20clean%20minimalist%20office%20design%20with%20high-tech%20equipment%2C%20team%20collaboration%20in%20technology%20company&width=600&height=500&seq=about-image-1&orientation=landscape"
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
          {team.map((member, index) => (
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
