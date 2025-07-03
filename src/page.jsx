"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Code,
  Award,
  GraduationCap,
  User,
  Briefcase,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "skills", "projects", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Vimal<span className="text-purple-400">Bhoutekar</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "education", label: "Education" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "certifications", label: "Certifications" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id ? "text-purple-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 mb-6">
              <img src="/images/vimal-photo.jpg" alt="Vimal Bhoutekar" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Vimal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Bhoutekar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Developer & MCA Graduate</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>vimalbhoutekar@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+91 9977316685</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                <Code className="w-6 h-6" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("about")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore My Work
              </button>
              <a
                href="/resume.pdf"
                download="Vimal_Bhoutekar_Resume.pdf"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all duration-200 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <User className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Professional Summary</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a Master's degree in Computer Applications from DR. Harisingh
              Gour Vishwavidyalaya. With expertise in modern web technologies like React.js, Node.js, and various
              databases, I create dynamic and responsive web applications. My journey in software development is driven
              by curiosity and a commitment to writing clean, efficient code that solves real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[
              {
                degree: "Master of Computer Applications",
                institution: "DR. Harisingh Gour Vishwavidyalaya (A Central University)",
                location: "Sagar, MP",
                duration: "November 2022 - Sept 2024",
                percentage: "83.58%",
              },
              {
                degree: "Bachelor of Science (Computer Science)",
                institution: "Jatashankar Trivedi Government P.G. College",
                location: "Balaghat, MP",
                duration: "August 2018 - December 2021",
                percentage: "68.00%",
              },
              {
                degree: "Class XII (MP Board)",
                institution: "Govt. Tehlibai H S School Waraseoni",
                location: "Balaghat, MP",
                duration: "July 2017 - May 2018",
                percentage: "75.40%",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-3 mr-6">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-300 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">
                      {edu.location} • {edu.duration}
                    </p>
                    <div className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.percentage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Programming Languages",
                skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript", "Python", "Core Java", "C++"],
              },
              {
                category: "Libraries/Frameworks",
                skills: [
                  "React.js",
                  "React Router DOM",
                  "Redux Toolkit",
                  "Bootstrap",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                ],
              },
              {
                category: "Tools/Platforms",
                skills: ["VS Code", "Git", "GitHub", "Postman"],
              },
              {
                category: "Databases",
                skills: ["MySQL", "PostgreSQL", "MongoDB"],
              },
            ].map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 px-3 py-2 rounded-lg text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "React E-Commerce Store",
                description:
                  "Built a SPA e-commerce frontend with dynamic product listing, category filters, and search. Managed global cart state using Redux Toolkit and persisted data in LocalStorage.",
                technologies: ["React.js", "Redux Toolkit", "Tailwind CSS"],
                features: ["Add to Cart", "Remove from Cart", "Real-time calculations"],
                liveLink: "https://your-ecommerce-demo.vercel.app",
                githubLink: "https://github.com/vimalbhoutekar/react-ecommerce-store",
              },
              {
                title: "Personal Portfolio Website",
                description:
                  "Developed a multi-page React portfolio with React Router and responsive Tailwind CSS layouts. Added smooth animations and dark/light theme toggle.",
                technologies: ["React.js", "React Router DOM", "Tailwind CSS"],
                features: ["Responsive Design", "Framer Motion", "Theme Toggle"],
                liveLink: "https://your-portfolio-demo.vercel.app",
                githubLink: "https://github.com/vimalbhoutekar/portfolio-website",
              },
              {
                title: "Movie Recommendation Engine",
                description:
                  "Built ML-powered movie recommendation system using content-based filtering and TMDB dataset. Applied NLP techniques for movie similarity matching.",
                technologies: ["Python", "Flask", "scikit-learn", "TMDB API"],
                features: ["Content-based Filtering", "Real-time Recommendations", "Deployed on Render"],
                liveLink: "https://your-movie-recommender.render.com",
                githubLink: "https://github.com/vimalbhoutekar/movie-recommendation-engine",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-gray-400 text-xs flex items-center">
                      <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Python Programming",
                provider: "Udemy",
                icon: "🐍",
                certificateUrl: "/certificates/python-certificate.pdf",
              },
              {
                title: "Front-End Development",
                provider: "Udemy",
                icon: "💻",
                certificateUrl: "/certificates/frontend-certificate.pdf",
              },
              {
                title: "SQL Certificate",
                provider: "LinkedIn Learning",
                icon: "🗄️",
                certificateUrl: "/certificates/sql-certificate.pdf",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center cursor-pointer group"
                onClick={() => window.open(cert.certificateUrl, "_blank")}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-300 mb-4">{cert.provider}</p>
                <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors">
                  Click to view certificate
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">vimalbhoutekar@gmail.com</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+91 9977316685</p>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-300">Pune, Maharashtra 411057</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                I'm always interested in new opportunities and exciting projects. Let's connect!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a
                  href="/resume.pdf"
                  download="Vimal_Bhoutekar_Resume.pdf"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://linkedin.com/in/vimal-bhoutekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/vimalbhoutekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://leetcode.com/vimal-bhoutekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-110"
                >
                  <Code className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Vimal Bhoutekar. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
