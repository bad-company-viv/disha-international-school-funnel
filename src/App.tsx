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
    window.open('https://wa.me/919296750115?text=नमस्ते%2C%20मैं%20दिशा%20इंटरनेशनल%20स्कूल%20में%20प्रवेश%20के%20बारे%20में%20जानना%20चाहता%20हूँ', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:9296750115';
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-40 shadow-sm" style={{ backgroundColor: '#FEFBEC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img src="/logo.png" alt="DISHA International School" className="w-72 h-auto max-h-20 object-contain" />
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('apply')} variant="primary" size="sm">
                अभी आवेदन करें
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
              {/* Local Hook / Greeting */}
              <div className="mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-sm md:text-base font-bold px-4 py-2 rounded-full border border-emerald-300 shadow-sm">
                  🙏 जोहार गोड्डा! अब अपन गोड्डा में भी IITian वाली पढ़ाई...
                </span>
              </div>

              {/* Admission Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                🎓 प्रवेश प्रारंभ 2026-27 — सीटें तेजी से भर रही हैं!
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                अपने बच्चे को दें
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                  एक IITian वाली बढ़त
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700 font-bold">पहले दिन से ही</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 leading-relaxed">
                गोड्डा का पहला <span className="text-emerald-600 font-bold">IITian द्वारा संचालित ICSE पाठ्यक्रम आधारित स्कूल</span> — जो भविष्य के डॉक्टर, इंजीनियर और इनोवेटर बना रहा है।
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
                  WhatsApp पर  अभी संपर्क करें
                </Button>
                <Button
                  onClick={handleCallClick}
                  variant="secondary"
                  size="lg"
                  className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400 font-bold"
                >
                  <Phone className="w-5 h-5" />
                  कॉल करें: 9296750115
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <img
                src="/school-hero.png"
                alt="दिशा इंटरनेशनल स्कूल की आधुनिक कक्षा में खुश छात्र"
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
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">सरल और पारदर्शी</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">प्रवेश प्रक्रिया कैसे काम करती है</h2>
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
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">स्टेप 1</span>
                <h3 className="font-bold text-gray-900 mb-1">फ़ॉर्म भरें</h3>
                <p className="text-sm text-gray-500">60 सेकंड से भी कम समय में अपने बच्चे का विवरण दें</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.562 4.14 1.54 5.873L.058 23.5l5.806-1.525A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.52-5.39-1.427l-.386-.228-4.01 1.053 1.07-3.91-.25-.4A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">स्टेप 2</span>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp पर संपर्क</h3>
                <p className="text-sm text-gray-500">हमारे काउंसलर आपसे तुरंत WhatsApp पर संपर्क करेंगे</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">स्टेप 3</span>
                <h3 className="font-bold text-gray-900 mb-1">कैंपस विजिट</h3>
                <p className="text-sm text-gray-500">स्कूल, लैब और हॉस्टल देखें — बिना किसी दबाव के</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-emerald-300 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-100">
                  <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">स्टेप 4</span>
                <h3 className="font-bold text-gray-900 mb-1">दिशा से जुड़ें</h3>
                <p className="text-sm text-gray-500">प्रवेश की पुष्टि करें और अपने बच्चे की यात्रा शुरू करें</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">2 मिनट से भी कम समय लगता है · आवेदन नि:शुल्क है · तुरंत WhatsApp पर जवाब</p>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">हमारा कैंपस</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">गोड्डा में विश्व स्तरीय सुविधाएँ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden h-96 md:h-[600px] shadow-2xl">
              <img src="/school-lab.png" alt="आधुनिक विज्ञान प्रयोगशाला" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-48 md:h-[292px] shadow-xl">
              <img src="/smart-classroom.png" alt="स्मार्ट क्लासरूम" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-48 md:h-[292px] shadow-xl">
              <img src="/school-library.png" alt="स्कूल पुस्तकालय" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="col-span-2 rounded-3xl overflow-hidden h-48 md:h-[292px] shadow-xl">
              <img src="/school-playground.png" alt="खेल का मैदान" className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { icon: '🔬', label: 'विज्ञान प्रयोगशाला' },
              { icon: '🤖', label: 'रोबोटिक्स रूम' },
              { icon: '📚', label: 'स्मार्ट लाइब्रेरी' },
              { icon: '⚽', label: 'खेल का मैदान' },
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
              <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">बाहर से आने वाले परिवारों के लिए</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">सुरक्षित। आरामदायक। <span className="text-emerald-600">घर जैसा अहसास।</span></h2>
              <p className="text-lg text-emerald-600 font-bold italic mb-4">
                "हॉस्टल ऐसन, जेकरा में घर जइसन दुलार और IITian जइसन पढ़ाई मिलतै!"
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">हमारे हॉस्टल को इस तरह डिज़ाइन किया गया है कि माता-पिता को कभी चिंता न करनी पड़े। आपके बच्चे को पढ़ाई में मदद और व्यक्तिगत देखभाल के साथ एक सुरक्षित माहौल मिलता है।</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '🍱', title: 'पौष्टिक भोजन', desc: 'रोजाना 3 मील + स्नैक्स, घर जैसा खाना' },
                  { icon: '🔒', title: '24/7 सुरक्षा', desc: 'CCTV कैमरे, बायोमेट्रिक एंट्री, ट्रेंड गार्ड' },
                  { icon: '👩‍🏫', title: 'निवासी वार्डन', desc: 'हर फ्लोर पर समर्पित वार्डन' },
                  { icon: '🏥', title: 'मेडिकल सुविधा', desc: 'ऑन-कॉल डॉक्टर, हमेशा उपलब्ध फर्स्ट-एड' },
                  { icon: '📱', title: 'पेरेंट अपडेट्स', desc: 'तस्वीरों और प्रोग्रेस के साथ साप्ताहिक WhatsApp अपडेट' },
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
              <img src="/hostel-room.png" alt="दिशा का हॉस्टल कमरा" className="rounded-3xl shadow-2xl w-full h-96 md:h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs DISHA */}
      <section id="why-disha" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              माता-पिता पारंपरिक स्कूलों के बजाय दिशा को क्यों चुनते हैं
            </h2>
            <p className="text-xl text-emerald-600 font-bold italic mb-3">
              "रटंत विद्या छोड़ियै, अब समझदारी सँ अपन लइका के स्मार्ट बनायै!"
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              फर्क साफ है। और परिणाम भी।
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700">पारंपरिक स्कूल</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">पुरानी रटने वाली शिक्षा – बिना समझे रटाना</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">रोबोटिक्स, एआई या कोडिंग जैसी आधुनिक तकनीक की कोई जानकारी नहीं</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">सामान्य शिक्षा – प्रतिभा खोजने या पर्सनल गाइडेंस का अभाव</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">कमजोर अंग्रेजी और गणित का आधार</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">फोकस्ड लर्निंग के लिए कोई अच्छी हॉस्टल सुविधा नहीं</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-8 relative">
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                सबसे बेहतरीन विकल्प
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">दिशा इंटरनेशनल</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">कॉन्सेप्ट क्लैरिटी और प्रॉब्लम सॉल्विंग के साथ IITians द्वारा डिज़ाइन किया गया पाठ्यक्रम</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">शुरुआती कक्षाओं से ही हैंड्स-ऑन रोबोटिक्स, AI और STEM प्रोजेक्ट्स </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">सही करियर पाथ के लिए फिंगरप्रिंट आधारित प्रतिभा विश्लेषण </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">ICSE आधारित पाठ्यक्रम – बेहतर अंग्रेजी, गणित और विज्ञान की नींव</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">अनुशासन और मेंटरशिप के साथ प्रीमियम हॉस्टल सुविधा</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => scrollToSection('apply')} variant="primary" size="lg">
              आज ही अपने बच्चे की सीट पक्की करें →
            </Button>
          </div>
        </div>
      </section >

      {/* 8 Feature Cards */}
      < section id="benefits" className="py-16 md:py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              दिशा में आपके बच्चे को क्या मिलता है
            </h2>
            <p className="text-xl text-emerald-600 font-bold italic mb-3">
              "तैयारी ऐसन जेकरा से लइका IIT और NEET में झंडा गाड़ देतै!"
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8 बड़े फायदे जो आपके बच्चे को IIT, NEET और आगे की सफलता के लिए तैयार करते हैं
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FeatureCard
              icon={GraduationCap}
              title="IITians द्वारा मेंटरशिप"
              description="उन IIT ग्रैजुएट्स से सीखें जो जानते हैं कि JEE, NEET पास करने और कॉम्पिटिटिव एग्जाम में सफल होने के लिए क्या चाहिए।"
            />
            <FeatureCard
              icon={BookOpen}
              title="ICSE पाठ्यक्रम"
              description="अंग्रेजी, गणित और विज्ञान की मजबूत नींव के साथ सुपीरियर बोर्ड। अन्य बोर्ड्स की तुलना में NEET, JEE के लिए बेहतर तैयारी।"
            />
            <FeatureCard
              icon={Microscope}
              title="STEM आधारित शिक्षा"
              description="पहले दिन से ही व्यावहारिक प्रयोग, वास्तविक प्रोजेक्ट और वैज्ञानिक सोच। सिर्फ रटना नहीं, बल्कि करके सीखना।"
            />
            <FeatureCard
              icon={Bot}
              title="रोबोटिक्स और AI"
              description="शुरुआत से ही कोडिंग, रोबोटिक्स और आर्टिफिशियल इंटेलिजेंस का ज्ञान। भविष्य की ऐसी तकनीक सीखें जो आज और कल के लिए महत्वपूर्ण है।"
            />
            <FeatureCard
              icon={Fingerprint}
              title="टैलेंट एनालिसिस"
              description="आपके बच्चे की जन्मजात ताकत और सीखने के तरीके का वैज्ञानिक फिंगरप्रिंट-आधारित मूल्यांकन।"
            />
            <FeatureCard
              icon={Palette}
              title="एक्टिविटी-बेस्ड लर्निंग"
              description="कला, संगीत, नाटक और व्यावहारिक अनुभवों के साथ रचनात्मक और आकर्षक कक्षाएं।"
            />
            <FeatureCard
              icon={Calculator}
              title="अबैकस(Abacus) ट्रेनिंग"
              description="ध्यान, याददाश्त और दिमागी गणना की गति बढ़ाएं। मानसिक गणित में महारत हासिल करने का सिद्ध तरीका।"
            />
            <FeatureCard
              icon={Home}
              title="प्रीमियम हॉस्टल"
              description="24/7 सुरक्षा, पौष्टिक भोजन, अध्ययन के घंटे और मेंटरशिप के साथ सुरक्षित और व्यवस्थित आवासीय सुविधा।"
            />
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              शैक्षणिक सत्र 2026-27 के लिए सीमित सीटें उपलब्ध
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              देर न करें। गोड्डा के सबसे इन्नोवेटिव ICSE पाठ्यक्रम आधारित स्कूल के साथ अपने बच्चे का भविष्य सुरक्षित करें।
            </p>
            <Button onClick={handleWhatsAppClick} variant="whatsapp" size="lg" className="inline-flex items-center gap-2 font-bold">
              <MessageCircle className="w-5 h-5" />
              अभी WhatsApp पर आवेदन करें
            </Button>
          </div>
        </div>
      </section >

      {/* Proof Section */}
      < section id="proof" className="py-16 md:py-24 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              माता-पिता दिशा इंटरनेशनल पर भरोसा क्यों करते हैं
            </h2>
            <p className="text-xl text-emerald-600 font-bold italic mb-3">
              "हमर लइका के भविष्य, अब सही हांथ में छै!"
            </p>
            <p className="text-xl text-gray-600">
              सच्चे परिणाम। सच्ची विश्वसनीयता। सफलता की असली कहानियाँ।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IITian द्वारा संचालित </h3>
              <p className="text-gray-600">
                IIT ग्रैजुएट्स द्वारा स्थापित और निर्देशित, जो गोड्डा में विश्व स्तरीय शैक्षणिक उत्कृष्टता और सिद्ध समस्या-समाधान के तरीके लेकर आए हैं।
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ICSE आधारित पाठ्यक्रम</h3>
              <p className="text-gray-600">
                ICSE पाठ्यक्रम मानकों का पालन करते हुए उच्च गुणवत्ता की शिक्षा प्रदान करना, जिस पर पूरे भारत में माता-पिता भरोसा करते हैं।
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">आधुनिक इंफ्रास्ट्रक्चर</h3>
              <p className="text-gray-600">
                भविष्य की सफलता के लिए डिज़ाइन की गई अत्याधुनिक कक्षाएं, विज्ञान प्रयोगशालाएं, रोबोटिक्स वर्कशॉप, खेल सुविधाएं और प्रीमियम हॉस्टल।
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              माता-पिता क्या कह रहे हैं
            </h3>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              <TestimonialCard
                quote="फिंगरप्रिंट टैलेंट एनालिसिस ने मेरी आँखें खोल दीं। अब हम अपनी बेटी की स्वाभाविक खूबियों को समझते हैं और उसके अनुसार उसके करियर का मार्गदर्शन कर रहे हैं। दिशा वास्तव में हर बच्चे के भविष्य की परवाह करता है।"
                parentName="प्रिया सिंह"
                childClass="5"
              />
              <TestimonialCard
                quote="मेरे बेटे के आत्मविश्वास और समस्या-समाधान कौशल में काफी सुधार हुआ है। IITian शिक्षक वास्तव में जानते हैं कि कठिन कांसेप्ट्स को आसान कैसे बनाया जाए। सबसे अच्छा फैसला!"
                parentName="राजेश कुमार"
                childClass="3"
              />
              <TestimonialCard
                quote="हॉस्टल की सुविधा कमाल की है। हमारी बेटी सुरक्षित है, उसे अच्छा खाना मिलता है और वह पढ़ाई में उत्कृष्ट प्रदर्शन कर रही है। अनुशासित माहौल ने उसे अधिक फोकस बना दिया है।"
                parentName="अनिल शर्मा"
                childClass="4"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => scrollToSection('apply')} variant="primary" size="lg">
              500+ खुशहाल माता-पिता में शामिल हों →
            </Button>
          </div>
        </div>
      </section >

      {/* Who This Is For */}
      < section className="py-16 md:py-24 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              क्या दिशा आपके बच्चे के लिए सही है?
            </h2>
            <p className="text-xl text-gray-600">
              दिशा उन माता-पिता के लिए एकदम सही है जो चाहते हैं...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">मजबूत शैक्षणिक आधार</h3>
              <p className="text-gray-700 leading-relaxed">
                वे माता-पिता जो चाहते हैं कि उनके बच्चे को आधुनिक शिक्षण विधियों के साथ ICSE आधारित पाठ्यक्रम के माध्यम से मजबूत अंग्रेजी, गणित और विज्ञान की तैयारी मिले।
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">भविष्य के लिए तैयार</h3>
              <p className="text-gray-700 leading-relaxed">
                दूरदर्शी माता-पिता जो अपने बच्चे के करियर के लिए कोडिंग, रोबोटिक्स, AI और STEM शिक्षा के महत्व को समझते हैं।
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Fingerprint className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">साइंटिफिक टैलेंट डिस्कवरी</h3>
              <p className="text-gray-700 leading-relaxed">
                समझदार माता-पिता जो जल्दी ही अपने बच्चे की प्राकृतिक क्षमताओं की खोज करना चाहते हैं और वैज्ञानिक रूप से उन्हें सही करियर पथ की दिशा दिखाना चाहते हैं।
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              आपका बच्चा जीवन में सबसे अच्छी शुरुआत का हकदार है
            </h3>
            <p className="text-xl text-emerald-400 font-bold italic mb-4">
              "बेहतर पढ़ाई खातिर आब गोड्डा से बाहर जाय के जरूरत नै छै!"
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              आपके द्वारा इंतजार किया गया हर दिन मिस की गई शिक्षा और अवसर का दिन है। अपने बच्चे को आज ही दिशा का लाभ दें।
            </p>
            <Button onClick={handleWhatsAppClick} variant="whatsapp" size="lg" className="inline-flex items-center gap-2 font-bold">
              <MessageCircle className="w-5 h-5" />
              प्रवेश के लिए WhatsApp पर विचार-विमर्श करें
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
                ⚡ आज ही आवेदन क्यों करें?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                अपने बच्चे का{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                  भविष्य आज ही सुरक्षित करें
                </span>
              </h2>
              <p className="text-lg text-emerald-600 font-bold italic mb-4">
                "देर नय करियै, गोड्डा के सबसे नीक स्कूल में अपन सीट पक्की करियै!"
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                हर साल, गोड्डा और झारखंड के सैकड़ों परिवार दिशा के अद्वितीय IITian मेंटरशिप, ICSE पाठ्यक्रम और आधुनिक STEM लैब्स के लिए इसे चुनते हैं। सीटें सीमित हैं — मौका हाथ से न जाने दें।
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: '🎓', title: 'नि:शुल्क एडमिशन काउंसलिंग', desc: 'सीधे हमारे IITian शिक्षकों से बात करें — बिना किसी झिझक के' },
                  { icon: '⚡', title: 'तुरंत WhatsApp पर जवाब', desc: 'मिनटों में क्लास फीस, सिलेबस और तारीखें प्राप्त करें' },
                  { icon: '🏫', title: 'कैंपस भ्रमण बुक करें', desc: 'अपने परिवार के लिए स्कूल का मुफ़्त दौरा तय करें' },
                  { icon: '🏆', title: 'मेरिट स्कॉलरशिप उपलब्ध', desc: 'योग्य छात्रों को फीस में छूट मिलती है - अधिक जानने के लिए आवेदन करें' },
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
                <Button onClick={handleWhatsAppClick} variant="whatsapp" className="inline-flex items-center gap-2 font-bold">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp पर बात करें
                </Button>
                <Button onClick={handleCallClick} variant="secondary" className="inline-flex items-center gap-2 font-bold">
                  <Phone className="w-5 h-5" />
                  कॉल करें: 9296750115
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
              अक्सर पूछे जाने वाले प्रश्न (FAQs)
            </h2>
            <p className="text-xl text-emerald-600 font-bold italic mb-3">
              "कोनो शंका छै? सब सवाल के जवाब हिंया मिलतै!"
            </p>
            <p className="text-xl text-gray-600">
              दिशा इंटरनेशनल स्कूल के बारे में आपको जो कुछ भी जानने की जरूरत है
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="गोड्डा में अन्य स्कूलों से दिशा कैसे अलग है?"
              answer="दिशा गोड्डा में भारत का पहला IITian-संचालित ICSE पाठ्यक्रम आधारित स्कूल है। हम IIT ग्रैजुएट्स द्वारा डिज़ाइन किए गए वैज्ञानिक शिक्षण विधियों के साथ ICSE के बेहतर पाठ्यक्रम को जोड़ते हैं। इसके अलावा, हम रोबोटिक्स और AI प्रशिक्षण, फिंगरप्रिंट टैलेंट एनालिसिस, अबैकस प्रशिक्षण और प्रीमियम हॉस्टल जैसी असाधारण सुविधाएँ प्रदान करते हैं - जो क्षेत्र का कोई अन्य स्कूल नहीं देता है।"
            />
            <FAQItem
              question="फिंगरप्रिंट टैलेंट एनालिसिस क्या है और यह मेरे बच्चे की कैसे मदद करता है?"
              answer="फिंगरप्रिंट टैलेंट एनालिसिस एक वैज्ञानिक रूप से समर्थित विधि है जो अपने फिंगरप्रिंट पैटर्न का विश्लेषण करके आपके बच्चे की जन्मजात ताकत, सीखने की शैली और प्राकृतिक क्षमताओं की पहचान करती है। यह उनके एजुकेशन पाथवे को पर्सनल बनाने में मदद करता है और उन्हें उन करियर की ओर मार्गदर्शन करता है जहां वे स्वाभाविक रूप से उत्कृष्ट होंगे - चाहे वह इंजीनियरिंग, मेडिसिन, कला या बिजनेस हो।"
            />
            <FAQItem
              question="क्या आपके पास हॉस्टल है? इसमें क्या शामिल है?"
              answer="हाँ! दिशा 24/7 निगरानी, ​​पौष्टिक भोजन, आरामदायक आवास, समर्पित अध्ययन समय, खेल सुविधाएं और निरंतर मेंटरशिप के साथ एक प्रीमियम आवासीय हॉस्टल प्रदान करता है। यह उन छात्रों के लिए एकदम सही है जिन्हें फोकस्ड लर्निंग के लिए एक संरचित, अनुशासित वातावरण की आवश्यकता है। हॉस्टल सुनिश्चित करता है कि आपका बच्चा सुरक्षित है, उसे अच्छा खाना मिलता है और वह पढ़ाई में उत्कृष्ट है।"
            />
            <FAQItem
              question="आप किन आयु समूहों और कक्षाओं में प्रवेश देते हैं?"
              answer="दिशा इंटरनेशनल स्कूल नर्सरी से लेकर 5वीं कक्षा तक के छात्रों को प्रवेश देता है। हम ICSE आधारित पाठ्यक्रम का पालन करते हैं और सीट उपलब्धता के आधार पर साल भर प्रवेश स्वीकार करते हैं। चाहे आपका बच्चा अभी अपनी शिक्षा यात्रा शुरू कर रहा हो या किसी दूसरे स्कूल से ट्रांसफर लेना चाहता हो, हम दिशा परिवार में उनका स्वागत करते हैं।"
            />
            <FAQItem
              question="मैं स्कूल विजिट या कैंपस टूर कैसे निर्धारित कर सकता हूँ?"
              answer="अपनी कैंपस विजिट तय करने के लिए बस WhatsApp बटन पर क्लिक करें या हमें 9296750115 पर कॉल करें। हम गाइडेड टूर प्रदान करते हैं जहाँ आप हमारी आधुनिक कक्षाओं, विज्ञान प्रयोगशालाओं, रोबोटिक्स वर्कशॉप, खेल सुविधाओं और हॉस्टल को देख सकते हैं। आप हमारे IITian शिक्षकों से भी मिलेंगे और समझेंगे कि दिशा आपके बच्चे के भविष्य के लिए सही विकल्प क्यों है।"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">अभी भी कोई प्रश्न है?</p>
            <Button onClick={handleWhatsAppClick} variant="primary" size="lg" className="inline-flex items-center gap-2 font-bold">
              <MessageCircle className="w-5 h-5" />
              हमारी एडमिशन टीम से चैट करें
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
                  <h3 className="text-xl font-bold">दिशा इंटरनेशनल स्कूल</h3>
                  <p className="text-sm text-gray-400">IITian द्वारा संचालित ICSE पाठ्यक्रम आधारित स्कूल</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                IIT, NEET और वैश्विक सफलता के लिए छात्रों को वैज्ञानिक सोच, शैक्षणिक उत्कृष्टता और भविष्य के कौशल के साथ सशक्त बनाना।
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span className="text-gray-300">प्रोफेसर कॉलोनी, गोड्डा, झारखंड</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <a href="tel:9296750115" className="text-gray-300 hover:text-emerald-500">9296750115</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">त्वरित लिंक</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('hero')} className="text-gray-400 hover:text-emerald-500">होम</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="text-gray-400 hover:text-emerald-500">लाभ</button></li>
                <li><button onClick={() => scrollToSection('proof')} className="text-gray-400 hover:text-emerald-500">प्रमाण</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-emerald-500">अक्सर पूछे जाने वाले सवाल</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">शुरुआत करें</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('apply')} className="text-gray-400 hover:text-emerald-500">प्रवेश के लिए आवेदन करें</button></li>
                <li><button onClick={handleWhatsAppClick} className="text-gray-400 hover:text-emerald-500">हमें WhatsApp करें</button></li>
                <li><button onClick={handleCallClick} className="text-gray-400 hover:text-emerald-500">हमें कॉल करें</button></li>
                <li><button onClick={() => scrollToSection('apply')} className="text-gray-400 hover:text-emerald-500">कैंपस विजिट शेड्यूल करें</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">&copy; 2026 दिशा इंटरनेशनल स्कूल। सभी अधिकार सुरक्षित।</p>
              
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
            aria-label="WhatsApp पर संपर्क करें"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )
      }
    </div >
  );
}

export default App;
