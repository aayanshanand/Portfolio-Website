import React from 'react';
import { Briefcase, AlignCenterVertical as Certificate, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Code className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">Portfolio</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <div className="group relative">
                  <button className="h-16 inline-flex items-center px-1 pt-1 text-gray-900">
                    Portfolio
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="hidden group-hover:block absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
                      <a href="#certificates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Certificates</a>
                      <a href="#internships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Internships</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Car Rental System"
              description="A comprehensive car rental platform with booking management."
              image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              link="https://github.com/aayanshanand/Project_Car-Rental-System"
            />
            <ProjectCard
              title="Image Gallery"
              description="Responsive image gallery with filtering and lightbox view."
              image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              link="https://github.com/aayanshanand/CodeAlpha_Project_Image-Gallery"
            />
            <ProjectCard
              title="Music Player"
              description="Feature-rich music player with playlist management."
              image="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
              link="https://github.com/aayanshanand/CodeAlpha_Project_Music-Player"
            />
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificateCard
              title="Web Development"
              issuer="Udemy"
              date="2023"
              image="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
              link="https://drive.google.com/file/d/your-certificate-id-1"
            />
            <CertificateCard
              title="React Development"
              issuer="Coursera"
              date="2023"
              image="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              link="https://drive.google.com/file/d/your-certificate-id-2"
            />
            <CertificateCard
              title="UI/UX Design"
              issuer="Google"
              date="2023"
              image="../Cipher_School_page-0001.jpg"
              link="https://drive.google.com/file/d/your-certificate-id-3"
            />
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Internships</h2>
          <div className="grid grid-cols-1 gap-6">
            <InternshipCard
              company="Tech Company A"
              position="Frontend Developer Intern"
              duration="3 months"
              image="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
              link="https://drive.google.com/file/d/your-internship-letter-1"
            />
            <InternshipCard
              company="Design Studio B"
              position="UI/UX Design Intern"
              duration="6 months"
              image="https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg"
              link="https://drive.google.com/file/d/your-internship-letter-2"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

interface CardProps {
  title: string;
  description?: string;
  image: string;
  link: string;
  issuer?: string;
  date?: string;
  company?: string;
  position?: string;
  duration?: string;
}

function ProjectCard({ title, description, image, link }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          View Project
          <Code className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function CertificateCard({ title, issuer, date, image, link }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">{issuer}</p>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          View Certificate
          <Certificate className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function InternshipCard({ company, position, duration, image, link }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img src={image} alt={company} className="h-48 w-full md:w-48 object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{company}</h3>
          <p className="text-gray-600 mb-1">{position}</p>
          <p className="text-gray-500 text-sm mb-4">{duration}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View Letter
            <Briefcase className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;