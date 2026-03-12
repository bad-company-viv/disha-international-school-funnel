import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  BookOpen,
  Microscope,
  Bot,
  Fingerprint,
  Palette,
  Calculator,
  Home,
  Phone,
  MessageCircle,
  X,
  CheckCircle2,
  Award,
  Building2,
  MapPin
} from 'lucide-react';
import { Button } from './components/Button';
import { FeatureCard } from './components/FeatureCard';
import { FAQItem } from './components/FAQItem';
import { TestimonialCard } from './components/TestimonialCard';
import { LeadForm } from './components/LeadForm';

function App() {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsAppButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919296750115?text=Hi%2C%20I%20want%20to%20know%20about%20admission%20at%20DISHA%20International%20School', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:9296750115';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-40 shadow-sm" style={{ backgroundColor: '#FEFBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="DISHA International School logo"
                className="h-20 w-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('apply')} variant="primary" size="sm">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-white py-12 md:py-0 min-h-[calc(100vh-96px)] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 opacity-60"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Admission Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                🎓 Admissions Open 2026-27 — Seats Filling Fast!
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Give Your Child
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                  An IITian's Edge
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-bold">from Day One</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed">
                India's first <span className="text-emerald-600 font-bold">IITian-Led ICSE Curriculum-Based School</span> in Godda — building future doctors, engineers &amp; innovators.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="whatsapp"
                  size="lg"
                  className="flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-200 transform hover:-translate-y-0.5 text-lg font-bold"
                >
                  <MessageCircle className="w-6 h-6" />
                  Apply on WhatsApp Now
                </Button>
                <Button
                  onClick={handleCallClick}
                  variant="secondary"
                  size="lg"
                  className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400"
                >
                  <Phone className="w-5 h-5" />
                  Call: 9296750115
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <img
                src="/school-hero.png"
                alt="Happy students in DISHA International School modern classroom"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* How Admissions Work */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Simple &amp; Transparent</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How Admissions Work</h2>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-emerald-100 z-0"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Step 1</span>
                <h3 className="font-bold text-gray-900 mb-1">Fill the Form</h3>
                <p className="text-sm text-gray-500">Share your child's details in under 60 seconds</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.54 5.873L.058 23.5l5.806-1.525A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.52-5.39-1.427l-.386-.228-4.01 1.053 1.07-3.91-.25-.4A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Step 2</span>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp Connect</h3>
                <p className="text-sm text-gray-500">Our counsellor reaches you instantly on WhatsApp</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Step 3</span>
                <h3 className="font-bold text-gray-900 mb-1">Campus Visit</h3>
                <p className="text-sm text-gray-500">See the school, labs &amp; hostel — no pressure</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-300 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-100">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Step 4</span>
                <h3 className="font-bold text-gray-900 mb-1">Join DISHA</h3>
                <p className="text-sm text-gray-500">Confirm admission &amp; start your child's journey</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">Takes less than 2 minutes · No fees to apply · Instant WhatsApp response</p>
          </div>
        </div>
      </section>




      {/* Campus Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Our Campus</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">World-Class Facilities in Godda</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden h-96 md:h-[600px] shadow-2xl">
              <img src="/school-lab.png" alt="Modern science lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-48 md:h-[292px] shadow-xl">
              <img src="/smart-classroom.png" alt="Smart classroom" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-48 md:h-[292px] shadow-xl">
              <img src="/school-library.png" alt="School library" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="col-span-2 rounded-3xl overflow-hidden h-48 md:h-[292px] shadow-xl">
              <img src="/school-playground.png" alt="School playground" className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { icon: '🔬', label: 'Science Lab' },
              { icon: '🤖', label: 'Robotics Room' },
              { icon: '📚', label: 'Smart Library' },
              { icon: '⚽', label: 'Sports Ground' },
            ].map(f => (
              <div key={f.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <span className="text-2xl">{f.icon}</span>
                <p className="text-sm font-semibold text-gray-700 mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">For Outstation Families</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safe. Comfortable. <span className="text-emerald-600">Home Away from Home.</span></h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Our hostel is designed so parents never have to worry. Your child gets a structured, nurturing environment with academic support and personal care.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '🍱', title: 'Nutritious Meals', desc: '3 meals + snacks daily, home-style cooking' },
                  { icon: '🔒', title: '24/7 Security', desc: 'CCTV surveillance, biometric entry, trained guards' },
                  { icon: '👩‍🏫', title: 'Resident Warden', desc: 'Dedicated houseparents on every floor' },
                  { icon: '🏥', title: 'Medical Care', desc: 'On-call doctor, first-aid at all times' },
                  { icon: '📱', title: 'Parent Updates', desc: 'Weekly WhatsApp updates with photos & progress' },
                ].map(f => (
                  <div key={f.title} className="flex items-start gap-3 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{f.title}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/hostel-room.png" alt="DISHA hostel room" className="rounded-3xl shadow-2xl w-full h-96 md:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs DISHA */}
      <section id="why-disha" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Parents Choose DISHA Over Traditional Schools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The difference is clear. The results speak for themselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700">Traditional Schools</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Outdated rote learning methods – memorize without understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">No exposure to modern tech like Robotics, AI or coding</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Generic teaching – no talent discovery or personalized guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Weak English & Math foundation in state boards</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">No structured residential options for focused learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-8 relative">
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                BEST CHOICE
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">DISHA International</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">IITian-designed curriculum with concept clarity & problem-solving</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">Hands-on Robotics, AI, STEM projects from early grades</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">Fingerprint-based talent analysis for personalized career paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">ICSE-based curriculum – superior English, Math & Science foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">Premium hostel with disciplined environment & mentorship</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => scrollToSection('apply')} variant="primary" size="lg">
              Secure Your Child's Seat Now →
            </Button>
          </div>
        </div>
      </section >

      {/* 8 Feature Cards */}
      < section id="benefits" className="py-16 md:py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Your Child Gets at DISHA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8 powerful advantages that prepare your child for IIT, NEET, and global success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard
              icon={GraduationCap}
              title="IITian Mentorship"
              description="Learn from IIT graduates who understand what it takes to crack JEE, NEET and excel in competitive exams. Scientific teaching methodology with concept clarity."
            />
            <FeatureCard
              icon={BookOpen}
              title="ICSE-Based Curriculum"
              description="Superior curriculum with stronger English, Math & Science foundation. Better preparation for future academic success compared to state boards."
            />
            <FeatureCard
              icon={Microscope}
              title="STEM-Based Learning"
              description="Hands-on experiments, real projects, and scientific thinking from day one. Learn by doing, not just memorizing textbooks."
            />
            <FeatureCard
              icon={Bot}
              title="Robotics & AI Literacy"
              description="Early exposure to coding, robotics, and artificial intelligence. Build future-ready tech skills that matter in 2026 and beyond."
            />
            <FeatureCard
              icon={Fingerprint}
              title="Talent Analysis"
              description="Scientific fingerprint-based assessment to discover your child's natural strengths, learning style, and ideal career path early."
            />
            <FeatureCard
              icon={Palette}
              title="Activity-Based Learning"
              description="Creative, engaging classrooms with art, music, drama, and practical experiences. Learning that excites and inspires curiosity."
            />
            <FeatureCard
              icon={Calculator}
              title="Abacus Training"
              description="Increase concentration, memory power, and calculation speed. Proven system for mental math mastery and brain development."
            />
            <FeatureCard
              icon={Home}
              title="Premium Hostel"
              description="Safe, structured residential facility with 24/7 care, nutritious meals, study hours, and mentorship. Perfect for focused learning."
            />
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Limited Seats Available for 2026-27 Academic Year
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Don't wait until it's too late. Secure your child's future with India's most innovative ICSE curriculum-based school in Godda.
            </p>
            <Button onClick={handleWhatsAppClick} variant="whatsapp" size="lg" className="inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Apply on WhatsApp Now
            </Button>
          </div>
        </div>
      </section >

      {/* Proof Section */}
      < section id="proof" className="py-16 md:py-24 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Parents Trust DISHA International
            </h2>
            <p className="text-xl text-gray-600">
              Real results. Real credibility. Real success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IITian-Led Faculty</h3>
              <p className="text-gray-600">
                Founded and mentored by IIT graduates who bring world-class academic excellence and proven problem-solving methods to Godda.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ICSE-Based Curriculum</h3>
              <p className="text-gray-600">
                Following ICSE curriculum standards for superior education quality, providing strong foundation trusted by parents across India.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600">
                State-of-the-art classrooms, science labs, robotics workshop, sports facilities, and premium hostel designed for excellence.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Parents Are Saying
            </h3>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              <TestimonialCard
                quote="The fingerprint talent analysis opened my eyes. We now understand our daughter's natural strengths and are guiding her career accordingly. Disha truly cares about every child's future."
                parentName="Priya Singh"
                childClass="5"
              />
              <TestimonialCard
                quote="My son's confidence and problem-solving skills have improved significantly. The IITian teachers really know how to make difficult concepts easy. Best decision!"
                parentName="Rajesh Kumar"
                childClass="3"
              />
              <TestimonialCard
                quote="The hostel facilities are amazing. Our daughter is safe, gets good food, and is excelling in her studies. The disciplined environment has made her more focused."
                parentName="Anil Sharma"
                childClass="4"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => scrollToSection('apply')} variant="primary" size="lg">
              Join 500+ Happy Parents →
            </Button>
          </div>
        </div>
      </section >

      {/* Who This Is For */}
      < section className="py-16 md:py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is DISHA Right for Your Child?
            </h2>
            <p className="text-xl text-gray-600">
              DISHA is perfect for parents who want...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strong Academic Foundation</h3>
              <p className="text-gray-700 leading-relaxed">
                Parents who want their child to have superior English, Math & Science preparation through ICSE-based curriculum with modern teaching methods.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Ready Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Forward-thinking parents who understand the importance of coding, robotics, AI, and STEM education for their child's career.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scientific Talent Discovery</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart parents who want to discover their child's natural abilities early and guide them toward the right career path scientifically.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your Child Deserves the Best Start in Life
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Every day you wait is a day of missed learning, growth, and opportunity. Give your child the DISHA advantage today.
            </p>
            <Button onClick={handleWhatsAppClick} variant="whatsapp" size="lg" className="inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Apply for Admission on WhatsApp
            </Button>
          </div>
        </div>
      </section >

      {/* Lead Form Section */}
      < section id="apply" className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Value proposition */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                ⚡ Why Apply Today?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Secure Your Child's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                  Future Today
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every year, hundreds of families across Godda &amp; Jharkhand choose DISHA for its unique IITian mentorship, ICSE-based curriculum, and modern STEM labs. Seats are limited — don't miss out.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: '🎓', title: 'Free Admission Counselling', desc: 'Speak to our IITian faculty directly — zero obligation' },
                  { icon: '⚡', title: 'Instant WhatsApp Response', desc: 'Get class fees, syllabus & dates in minutes' },
                  { icon: '🏫', title: 'Campus Visit Booking', desc: 'Schedule a free school tour for your family' },
                  { icon: '🏆', title: 'Merit Scholarship Available', desc: 'Eligible students get fee concessions — apply to know more' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleWhatsAppClick} variant="whatsapp" className="inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <Button onClick={handleCallClick} variant="secondary" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call: 9296750115
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section >

      {/* FAQ Section */}
      < section id="faq" className="py-16 md:py-24 bg-white" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about DISHA International School
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="What makes DISHA different from other schools in Godda?"
              answer="DISHA is India's first IITian-led ICSE curriculum-based school in Godda. We follow ICSE-based curriculum with scientific teaching methods designed by IIT graduates. Plus, we offer unique advantages like Robotics & AI training, fingerprint-based talent analysis, Abacus training, and premium hostel facilities – features no other school in the region provides."
            />
            <FAQItem
              question="What is Fingerprint Talent Analysis and how does it help my child?"
              answer="Fingerprint Talent Analysis is a scientifically-backed method that identifies your child's innate strengths, learning style, and natural abilities by analyzing their fingerprint patterns. This helps us personalize their education path and guide them toward careers where they'll naturally excel – whether that's engineering, medicine, arts, or business."
            />
            <FAQItem
              question="Do you have hostel facilities? What is included?"
              answer="Yes! DISHA offers a premium residential hostel with 24/7 supervision, nutritious meals, comfortable accommodation, dedicated study hours, sports facilities, and constant mentorship. It's perfect for students who need a structured, disciplined environment for focused learning. The hostel ensures your child is safe, well-fed, and academically supported at all times."
            />
            <FAQItem
              question="What age groups and classes do you admit?"
              answer="DISHA International School admits students from Nursery to Class 5. We follow ICSE-based curriculum and accept admissions throughout the year based on seat availability. Whether your child is just starting their education journey or looking to transfer from another school, we welcome them to the DISHA family."
            />
            <FAQItem
              question="How can I schedule a school visit or campus tour?"
              answer="Simply click the WhatsApp button or call us at 9296750115 to schedule your campus visit. We offer guided tours where you can see our modern classrooms, science labs, robotics workshop, sports facilities, and hostel. You'll also meet our IITian faculty and understand exactly why DISHA is the right choice for your child's future."
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button onClick={handleWhatsAppClick} variant="primary" size="lg" className="inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Chat with Our Admission Team
            </Button>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-gray-900 text-white py-12" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8 text-emerald-500" />
                <div>
                  <h3 className="text-xl font-bold">DISHA INTERNATIONAL SCHOOL</h3>
                  <p className="text-sm text-gray-400">IITian-Led ICSE Curriculum-Based School</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Empowering students with scientific thinking, academic excellence, and future-ready skills for IIT, NEET, and global success.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-300">Professor Colony, Godda, Jharkhand</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <a href="tel:9296750115" className="text-gray-300 hover:text-emerald-500">9296750115</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-emerald-500">Home</button></li>
                <li><button onClick={() => scrollToSection('why-disha')} className="text-gray-400 hover:text-emerald-500">Why DISHA</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="text-gray-400 hover:text-emerald-500">Benefits</button></li>
                <li><button onClick={() => scrollToSection('proof')} className="text-gray-400 hover:text-emerald-500">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-emerald-500">FAQs</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Get Started</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('apply')} className="text-gray-400 hover:text-emerald-500">Apply for Admission</button></li>
                <li><button onClick={handleWhatsAppClick} className="text-gray-400 hover:text-emerald-500">WhatsApp Us</button></li>
                <li><button onClick={handleCallClick} className="text-gray-400 hover:text-emerald-500">Call Us</button></li>
                <li><button onClick={() => scrollToSection('apply')} className="text-gray-400 hover:text-emerald-500">Schedule Campus Visit</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">&copy; 2026 DISHA International School. All rights reserved.</p>
              
              {/* Site Credits */}
              <div className="bg-white rounded-full px-6 py-3 flex items-center gap-4">
                <a 
                  href="https://fabulousmedia.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/fabulous.png" 
                    alt="Fabulous Media" 
                    className="h-8 w-auto"
                  />
                </a>
                <div className="w-px h-8 bg-gray-300"></div>
                <a 
                  href="https://gocommercially.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/gocomercially.svg" 
                    alt="Go Commercially" 
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer >

      {/* Sticky WhatsApp Button */}
      {
        showWhatsAppButton && (
          <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )
      }
    </div >
  );
}

export default App;
