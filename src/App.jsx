import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Terminal, 
  Briefcase, 
  Code2, 
  User,
  ChevronDown,
  X
} from 'lucide-react';

const LinkedInIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ====================================================================
  PORTFOLIO DATA CONFIGURATION
  Edit this section to instantly update the website's content!
  To change project images, just replace the 'image' URL.
====================================================================
*/
const PORTFOLIO_DATA = {
  header: {
    name: "Reza Yudhistira Gunawan",
    title: "Senior Software Engineer (Mobile & Frontend)",
    location: "Jakarta, Indonesia",
    email: "rezayudis95@gmail.com",
    linkedin: "linkedin.com/in/reza-yudhistira-gunawan-1b70b2172",
    avatar: "image-me.png"
  },
  about: "Senior Frontend and Mobile Developer with 8+ years of experience designing and deploying high-performance applications across agriculture, e-commerce, and enterprise sectors. Proficient in React Native, Android Native (Java/Kotlin), and modern web frameworks (React.js, Remix.js, TypeScript). Demonstrated success in leading end-to-end app lifecycles, optimizing multi-platform architectures, and delivering scalable solutions that drive significant business revenue (~Rp 9 billion GMV) and user engagement.",
  skills: {
    languages: "JavaScript, TypeScript, Kotlin, Java, PHP (Familiar: Swift, Objective-C)",
    mobile: "React Native, Android Native, Jetpack Compose",
    web: "React.js, Remix.js, NestJS",
    state: "Redux, React Query, React Hooks, Context API",
    tools: "Git, VS Code, CI/CD, CodePush, Firebase, Figma"
  },
  projects: [
    {
      id: 1,
      title: "LP3ES E-Commerce Ecosystem",
      description: "A comprehensive full-stack e-commerce platform featuring a versatile web store, POS system admin dashboard, and an Android native eBook reader module with DRM.",
      longDescription: "Directed a 9-person cross-functional team to architect a complete digital transformation for LP3ES. This massive undertaking involved building a consumer-facing Remix.js web store, a React.js admin dashboard with POS capabilities to streamline warehouse dispatch, and a secure React Native mobile app featuring a custom native Android DRM eBook reader.",
      tech: ["Remix.js", "React Native", "NestJS"],
      // CHANGE THIS URL TO YOUR REAL PROJECT SCREENSHOT
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 2,
      title: "Sawitpro Offline-First App",
      description: "Architected the first offline-first mobile app for plantation workers using Android Native, increasing field data accuracy. Scaled companion e-commerce app to 100k+ downloads.",
      longDescription: "Spearheaded the mobile initiative for PT Digital Sawitpro. Built a robust offline-first Android native application (Kotlin/Groovy) designed for remote plantation workers, ensuring data integrity without internet access. Additionally, scaled the B2B e-commerce platform to handle over 100,000 downloads and process ~Rp 9 billion in GMV.",
      tech: ["Android (Kotlin/Groovy)", "Offline Sync"],
      // CHANGE THIS URL TO YOUR REAL PROJECT SCREENSHOT
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 3,
      title: "Wasli Mitra (Food Merchant)",
      description: "Designed and developed a comprehensive UI/UX for a food merchant mobile app, implementing custom theming and robust state management for seamless order tracking.",
      longDescription: "Engineered a dedicated food merchant application using React Native. Focused heavily on providing an intuitive UI/UX for restaurant owners to manage menus and track live orders. Implemented complex state management solutions and custom theming features to allow white-labeling for different merchant brands.",
      tech: ["React Native", "State Management"],
      // CHANGE THIS URL TO YOUR REAL PROJECT SCREENSHOT
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 4,
      title: "Polisi RW App",
      description: "A community reporting application officially adopted by the Indonesian National Police Headquarters (Mabes Polri), featuring integrated video calling.",
      longDescription: "Developed a secure, real-time community reporting platform officially utilized by Mabes Polri. The application allows direct interaction between citizens and local police officers, heavily featuring an integrated WebRTC video calling module built directly into the React Native architecture for emergency communications.",
      tech: ["React Native", "WebRTC"],
      // CHANGE THIS URL TO YOUR REAL PROJECT SCREENSHOT
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 5,
      title: "Native Android PDF Viewer",
      description: "High-performance native PDF viewer module for Android, implementing advanced password protection and deep search functionalities using React Native and standard PDF SDKs.",
      longDescription: "Faced with performance limitations in standard React Native PDF libraries, I engineered a highly optimized Native Android PDF Viewer module. This custom integration exposed Java/Kotlin native APIs to React Native, enabling massive document rendering, advanced password security handling, and deep text search without UI thread blocking.",
      tech: ["React Native", "Android Native", "PDF SDK"],
      // CHANGE THIS URL TO YOUR REAL PROJECT SCREENSHOT
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 6,
      title: "Wispay Sayur & PPOB",
      description: "End-to-end React Native e-commerce ecosystem for customers, couriers, and merchants. Facilitated high-value PPOB transactions with secure document signing.",
      longDescription: "Built a sprawling e-commerce and logistics ecosystem encompassing three distinct apps (Customers, Couriers, Merchants). The platform handled everything from fresh grocery delivery to high-value PPOB (Payment Point Online Bank) transactions, protected by integrated secure document signing workflows.",
      tech: ["React Native", "React.js"],
      // CHANGE THIS URL TO YOUR REAL PROJECT SCREENSHOT
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 7,
      title: "One21 E-Commerce App",
      description: "Developed and maintained a comprehensive e-commerce application using React Native, focusing on enhancing the buyer journey.",
      longDescription: "Spearheaded the development and ongoing maintenance of 'One21', a buyer-centric e-commerce application. Leveraged React Native to deliver a smooth, performant user experience across both iOS and Android platforms, ensuring high code quality and rapid feature iteration.",
      tech: ["React Native", "E-Commerce"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 8,
      title: "Outlet Dashboard App",
      description: "Engineered a React Native mobile application tailored for outlet management and operational oversight.",
      longDescription: "Designed and developed the 'Outlet Dashboard Mobile App' to empower business owners and managers. Built with React Native, this application provided real-time insights and control over outlet operations, streamlining management tasks directly from a mobile device.",
      tech: ["React Native", "Dashboard UI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 9,
      title: "The New Helfa App",
      description: "Led the development of a revamped healthcare application, integrating comprehensive medical services into a unified mobile platform.",
      longDescription: "Orchestrated the development of 'The New Helfa App' using React Native. This major update focused on streamlining access to healthcare by integrating general medical services and specialized BPJS (Indonesian National Health Insurance) functionalities into a single, user-friendly mobile interface.",
      tech: ["React Native", "Healthcare Tech"],
      image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb8?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
      ]
    },
    {
      id: 10,
      title: "Nakesku App",
      description: "Developed a specialized mobile application dedicated to serving and connecting healthcare professionals.",
      longDescription: "Developed the 'Nakesku App' using React Native, creating a dedicated digital environment for healthcare workers (Nakes). The platform facilitated communication, resource sharing, and professional networking within the medical community.",
      tech: ["React Native", "Social Networking"],
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "Freelance Lead Software Engineer",
      company: "Perhimpunan LP3ES",
      period: "04/2025 - 03/2026",
      details: [
        "Directed a 9-person cross-functional team to architect a comprehensive full-stack e-commerce ecosystem.",
        "Streamlined warehouse operations by developing an advanced React.js admin dashboard with POS.",
        "Engineered a custom Android native eBook reader module with robust DRM security.",
        "Enhanced the consumer shopping experience and expanded sales channels by building a versatile web store."
      ]
    },
    {
      id: 2,
      role: "Senior Technology Developer",
      company: "PT Digital Sawitpro",
      period: "02/2023 - 04/2025",
      details: [
        "Spearheaded the development of the first offline-first mobile app for plantation workers.",
        "Architected a high-traffic e-commerce app, scaling it to over 100,000 downloads (~Rp 9 billion GMV).",
        "Refactored legacy Android Native codebases to Kotlin, improving compilation speed and reducing crash rates."
      ]
    },
    {
      id: 3,
      role: "Senior React Native Developer",
      company: "ACE Resource Advisory Services",
      period: "02/2022 - 01/2023",
      details: [
        "Digitized plantation management processes with an offline-first React Native application featuring QR integration.",
        "Developed dynamic, highly responsive mobile interfaces that significantly improved user experience."
      ]
    },
    {
      id: 4,
      role: "Senior React Native Developer",
      company: "Wispay",
      period: "02/2021 - 01/2022",
      details: [
        "Deployed a comprehensive React Native e-commerce ecosystem tailored for customers, couriers, and merchants.",
        "Optimized the multi-platform performance of the Outlet Dashboard and One21 apps."
      ]
    },
    {
      id: 5,
      role: "Senior React Native Developer",
      company: "Helfa",
      period: "01/2020 - 04/2021",
      details: [
        "Streamlined healthcare access by integrating general and BPJS services into a unified platform.",
        "Managed the complete application lifecycle, overseeing CI/CD deployments and code reviews."
      ]
    },
    {
      id: 6,
      role: "Software Engineer",
      company: "Various Companies & Projects",
      period: "2015 - 2020",
      details: [
        "Jakapd (Pemprov DKI): Developed a mobile application for the Jakarta Metropolitan Police traffic management and monitoring system.",
        "Toffin: Engineered an internal enterprise resource management application to optimize business operations and workflow.",
        "Otodriver App: Designed and implemented an automotive news aggregation platform with real-time updates and a CMS.",
        "Koppi: Built a specialized e-commerce platform for coffee products featuring order management and inventory tracking systems.",
        "Mitra Klikfoond: Developed a location-based marketplace application connecting local merchants with customers for fresh produce.",
        "Hobiauction: Developed a mobile application for auctioning and selling premium watches.",
        "Jokii: Developed and maintained a buyer-focused e-commerce application using React JS to improve user experience."
      ]
    }
  ]
};

/* ====================================================================
  UI COMPONENTS
====================================================================
*/

const SectionHeading = ({ title, icon: Icon }) => (
  <div className="flex items-center space-x-3 mb-8">
    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
  </div>
);

export default function App() {
  const { header, about, skills, projects, experience } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'experience'
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Injecting Custom CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0; /* start hidden */
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 10s infinite alternate;
        }
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <header className="bg-slate-900 text-white relative overflow-hidden pt-24 pb-16 px-6 lg:px-12">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
           <div className="absolute top-[-20%] left-[-10%] w-96 h-96 rounded-full bg-blue-500 blur-3xl animate-blob"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 rounded-full bg-purple-500 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Text Content */}
            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                {header.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
                {header.title}
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-gray-300 text-sm mb-8">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={16} className="text-blue-400" /> {header.location}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-pointer">
                  <Mail size={16} className="text-blue-400" /> {header.email}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors cursor-pointer">
                  <LinkedInIcon size={16} className="text-blue-400" /> {header.linkedin}
                </div>
              </div>

              <div className="flex justify-center md:justify-start gap-4">
                <a href="#portfolio" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-900/50 flex items-center gap-2 hover:-translate-y-1">
                  View Work <ChevronDown size={18} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 md:order-2 shrink-0 animate-fade-in-up">
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-slate-800 ring-4 ring-blue-500/30 shadow-2xl shadow-blue-500/20 relative animate-float">
                <img 
                  src={header.avatar} 
                  alt={header.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* About & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <SectionHeading title="About Me" icon={User} />
            <p className="text-gray-600 text-lg leading-relaxed">
              {about}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-blue-600" /> Core Stack
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Mobile</div>
                <div className="font-medium text-gray-800">{skills.mobile}</div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Web & Backend</div>
                <div className="font-medium text-gray-800">{skills.web}</div>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Languages</div>
                <div className="font-medium text-gray-800">{skills.languages}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== TOGGLE TABS (Projects vs Experience) ===== */}
        <div id="portfolio" className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex">
            <button 
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${activeTab === 'projects' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              <Code2 size={18} /> Featured Projects
            </button>
            <button 
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${activeTab === 'experience' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              <Briefcase size={18} /> Work Experience
            </button>
          </div>
        </div>

        {/* ===== DYNAMIC PROJECTS GRID ===== */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-semibold border border-blue-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== EXPERIENCE TIMELINE ===== */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {experience.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                
                {/* Timeline Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-125 group-hover:bg-blue-600">
                  <Briefcase size={16} />
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col mb-4">
                    <span className="text-blue-600 font-bold text-sm tracking-wide mb-1">{exp.period}</span>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <h4 className="text-md font-medium text-gray-500">{exp.company}</h4>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 marker:text-blue-400">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span className="-ml-2">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
          </div>
        )}

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-center border-t border-slate-800">
        <p className="mb-2">Designed and Built by {header.name}</p>
        <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>

      {/* ===== PROJECT DETAIL MODAL ===== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm">
          {/* Click background to close */}
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>
          
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in-95 duration-300 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 hover:rotate-90 text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 z-20"
            >
              <X size={20} />
            </button>
            
            {/* Modal Hero Image */}
            <div className="h-64 sm:h-96 w-full relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="bg-white/20 backdrop-blur-md text-white text-sm px-3 py-1 rounded-full font-medium shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Details */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Project Overview</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {selectedProject.longDescription}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Showcase Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedProject.gallery.map((img, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 h-48 bg-gray-100">
                    <img src={img} alt={`${selectedProject.title} screenshot ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}