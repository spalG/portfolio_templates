export default function OrbitalSystemsPortfolio() {
  return (
    <div className="min-h-screen bg-[#06070A] text-[#F3F5F7] overflow-x-hidden font-sans relative">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,219,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(196,123,88,0.06),transparent_35%),#06070A]" />

        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {[...Array(120)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8,
                animationDuration: `${Math.random() * 4 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl tracking-[0.2em] font-semibold">Sagar Pal</h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-[#A7B0BE] tracking-wide">
            <a href="#about" className="hover:text-[#6FDBFF] transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-[#6FDBFF] transition-colors">PROJECTS</a>
            <a href="#skills" className="hover:text-[#6FDBFF] transition-colors">SKILLS</a>
            <a href="#experience" className="hover:text-[#6FDBFF] transition-colors">EXPERIENCE</a>
            <a href="#contact" className="hover:text-[#6FDBFF] transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 mb-8 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#6FDBFF] animate-pulse" />
              <span className="text-xs tracking-[0.3em] text-[#A7B0BE]">
                SYSTEMS • FULL STACK • DEVOPS
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight mb-8">
              Building resilient
              <span className="block text-[#6FDBFF]">software systems</span>
              for complex digital environments.
            </h1>

            <p className="text-lg text-[#A7B0BE] max-w-xl leading-relaxed mb-10">
              Senior Software Engineer specializing in scalable Java platforms,
              Python automation, cloud-native infrastructure, and immersive product experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-[#6FDBFF] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(111,219,255,0.25)]">
                Explore Projects
              </button>

              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#C47B58] hover:text-[#C47B58] transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>

          {/* 3D Orbital Visual */}
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="absolute w-[420px] h-[420px] rounded-full border border-[#6FDBFF]/20 animate-spin" style={{ animationDuration: '24s' }} />
            <div className="absolute w-[520px] h-[520px] rounded-full border border-[#C47B58]/10 animate-spin" style={{ animationDuration: '38s', animationDirection: 'reverse' }} />
            <div className="absolute w-[260px] h-[260px] rounded-full bg-[#6FDBFF]/10 blur-3xl" />

            <div className="relative w-56 h-56 bg-gradient-to-br from-[#151A22] to-[#0E1117] rounded-[3rem] border border-white/10 shadow-2xl rotate-12 animate-pulse">
              <div className="absolute inset-4 rounded-[2rem] border border-[#6FDBFF]/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-[#6FDBFF]/30 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#6FDBFF] shadow-[0_0_40px_rgba(111,219,255,0.5)]" />
                </div>
              </div>
            </div>

            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-5 h-5 bg-[#C47B58]/60 rounded-md"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-220px)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-[#151A22] to-[#0B0F14] border border-white/10 overflow-hidden relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
                alt="Sagar Pal"
                className="w-full h-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <div className="mb-6 text-[#6FDBFF] tracking-[0.3em] text-sm">
              MISSION PROFILE
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Engineering systems designed for scale, resilience, and long-term adaptability.
            </h2>

            <p className="text-[#A7B0BE] leading-relaxed text-lg mb-12 max-w-2xl">
              I architect and deliver high-performance software ecosystems spanning backend platforms,
              cloud infrastructure, distributed systems, and intelligent automation. My work focuses on
              building reliable products with clean operational visibility and exceptional developer experience.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Backend Architecture',
                  desc: 'Scalable Java and Python systems with event-driven infrastructure.'
                },
                {
                  title: 'Cloud Infrastructure',
                  desc: 'Kubernetes, Terraform, AWS automation, and DevOps workflows.'
                },
                {
                  title: 'Performance Engineering',
                  desc: 'Optimization, observability, distributed tracing, and reliability.'
                },
                {
                  title: 'Leadership & Delivery',
                  desc: 'Cross-functional technical leadership and product execution.'
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-[#6FDBFF]/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-[#A7B0BE] leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-[#C47B58] tracking-[0.3em] text-sm mb-4">
              ORBITAL ARCHIVE
            </div>

            <h2 className="text-5xl font-semibold mb-6">
              Selected engineering systems.
            </h2>

            <p className="text-[#A7B0BE] max-w-2xl text-lg">
              Enterprise-grade platforms, infrastructure tooling, and immersive digital products.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Distributed Payment Platform',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
                stack: 'Spring Boot • Kafka • PostgreSQL • Kubernetes',
                desc: 'Real-time financial transaction orchestration platform supporting millions of daily events.'
              },
              {
                title: 'AI Operations Dashboard',
                image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop',
                stack: 'Python • FastAPI • Docker • TensorFlow',
                desc: 'Predictive monitoring system with operational analytics and anomaly detection.'
              },
              {
                title: 'Cloud Infrastructure Orchestrator',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
                stack: 'Terraform • AWS • Jenkins • Prometheus',
                desc: 'Infrastructure automation framework enabling rapid multi-region deployment pipelines.'
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group rounded-[2rem] overflow-hidden border border-white/10 bg-[#151A22]/50 backdrop-blur-xl hover:border-[#6FDBFF]/30 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] via-transparent to-transparent" />
                </div>

                <div className="p-8">
                  <div className="text-xs tracking-[0.2em] text-[#6FDBFF] mb-4">
                    {project.stack}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-[#A7B0BE] leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  <button className="text-[#C47B58] hover:text-[#6FDBFF] transition-colors duration-300 tracking-wide">
                    VIEW SYSTEM →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-[#6FDBFF] tracking-[0.3em] text-sm mb-4">
            SYSTEM CONSTELLATION
          </div>

          <h2 className="text-5xl font-semibold mb-8">
            Technology ecosystem.
          </h2>

          <p className="text-[#A7B0BE] max-w-2xl mx-auto text-lg mb-20">
            Full-stack architecture, infrastructure automation, and operational reliability.
          </p>

          <div className="relative h-[700px] flex items-center justify-center">
            <div className="absolute w-44 h-44 rounded-full bg-[#6FDBFF]/10 blur-3xl" />

            <div className="relative w-48 h-48 rounded-full border border-[#6FDBFF]/20 bg-[#151A22]/60 backdrop-blur-xl flex items-center justify-center z-20 shadow-[0_0_80px_rgba(111,219,255,0.15)]">
              <div>
                <div className="text-sm tracking-[0.3em] text-[#A7B0BE] mb-2">CORE</div>
                <div className="text-2xl font-semibold">Engineering Systems</div>
              </div>
            </div>

            {[
              { name: 'Java', top: '10%', left: '50%' },
              { name: 'Spring Boot', top: '25%', left: '75%' },
              { name: 'Python', top: '50%', left: '88%' },
              { name: 'Docker', top: '72%', left: '76%' },
              { name: 'Kubernetes', top: '88%', left: '50%' },
              { name: 'AWS', top: '72%', left: '24%' },
              { name: 'Terraform', top: '50%', left: '12%' },
              { name: 'CI/CD', top: '25%', left: '24%' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="absolute"
                style={{ top: skill.top, left: skill.left, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-28 h-28 rounded-full border border-white/10 bg-[#0E1117]/80 backdrop-blur-xl flex items-center justify-center hover:scale-110 hover:border-[#6FDBFF]/40 transition-all duration-300 cursor-pointer shadow-xl">
                  <span className="text-sm font-medium text-center px-2">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-[#C47B58] tracking-[0.3em] text-sm mb-4">
              CAREER TRAJECTORY
            </div>

            <h2 className="text-5xl font-semibold mb-6">
              Experience timeline.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6FDBFF]/30 to-transparent hidden md:block" />

            {[
              {
                year: 'Jan, 2026 — Present',
                role: 'Founder and Principal Engineer',
                company: 'Solvqo Support Services - Sole Proprietor',
                desc: 'Leading distributed platform architecture, cloud-native deployment pipelines, and backend scalability initiatives for foregin clients.'
              },
              {
                year: 'Sept 2023 — Dec 2025',
                role: 'Full Stack Engineer',
                company: 'Dark Rhiino Security Inc',
                desc: 'Built enterprise-grade APIs, observability tooling, and event-driven microservices.'
              },
              {
                year: 'Nov 2020 — Dec 2021',
                role: 'Software Engineer',
                company: 'Helix Labs',
                desc: 'Developed automation infrastructure and cloud deployment systems for large-scale SaaS products.'
              },
            ].map((item, index) => (
              <div
                key={item.company}
                className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
              >
                <div className="rounded-[2rem] border border-white/10 bg-[#151A22]/50 backdrop-blur-xl p-8 hover:border-[#6FDBFF]/30 transition-all duration-300 shadow-2xl">
                  <div className="text-sm tracking-[0.2em] text-[#6FDBFF] mb-4">
                    {item.year}
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {item.role}
                  </h3>

                  <div className="text-[#C47B58] mb-4 text-lg">
                    {item.company}
                  </div>

                  <p className="text-[#A7B0BE] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] border border-white/10 bg-[#151A22]/50 backdrop-blur-2xl overflow-hidden shadow-[0_0_80px_rgba(111,219,255,0.08)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-14 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="text-[#6FDBFF] tracking-[0.3em] text-sm mb-6">
                COMMUNICATION DOCK
              </div>

              <h2 className="text-5xl font-semibold mb-8 leading-tight">
                Let’s build the next generation of software systems.
              </h2>

              <p className="text-[#A7B0BE] text-lg leading-relaxed mb-10">
                Available for senior engineering roles, technical consulting,
                architecture leadership, and ambitious product collaborations.
              </p>

              <div className="space-y-4 text-[#A7B0BE]">
                <div>alex.morgan@orbital.dev</div>
                <div>github.com/alexmorgan</div>
                <div>linkedin.com/in/alexmorgan</div>
              </div>
            </div>

            <div className="p-14">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm tracking-wide text-[#A7B0BE] mb-3">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 outline-none focus:border-[#6FDBFF]/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-wide text-[#A7B0BE] mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 outline-none focus:border-[#6FDBFF]/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-wide text-[#A7B0BE] mb-3">
                    MESSAGE
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-6 py-4 outline-none focus:border-[#6FDBFF]/50 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#6FDBFF] text-black py-4 font-semibold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(111,219,255,0.25)]"
                >
                  TRANSMIT MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#6F7A8A] text-sm">
          <div>
            © 2026 Sagar Pal — Orbital Systems Portfolio
          </div>

          <div className="flex gap-6 tracking-wide">
            <span>JAVA</span>
            <span>PYTHON</span>
            <span>DEVOPS</span>
            <span>CLOUD</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
