/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  Utensils,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const MENU_DATA = {
  breakfast: [
    { name: "Ham and Swiss Cheese Sandwich", desc: "Premium ham, melted swiss, toasted sourdough.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },
    { name: "Breakfast Burger", desc: "Fried egg, bacon, hash brown, relish, brioche bun.", image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=800" },
    { name: "Grilled Crispy Bacon and Poached Egg", desc: "Two eggs, streaky bacon, wilted spinach, hollandaise.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },
    { name: "BangBang's Breakfast", desc: "The works: eggs, bacon, sausage, mushrooms, tomato, toast.", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800" },
    { name: "Lazy Morning Breakfast", desc: "Avocado smash, feta, dukkah, poached egg on rye.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },
    { name: "Eggs Benedict", desc: "Classic hollandaise, choice of ham or spinach.", image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&q=80&w=800" },
    { name: "Sweet Liege Waffle and Bacon", desc: "Maple syrup, crispy bacon, seasonal berries.", image: "https://images.unsplash.com/photo-1496074620649-6b1b02e5c1c8?auto=format&fit=crop&q=80&w=800" },
    { name: "Smoked Salmon and Avocado", desc: "Capers, red onion, cream cheese, toasted bagel.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800" },
  ],
  burgers: [
    { name: "Southern Fried Chicken Burger", desc: "Spicy mayo, slaw, pickles, fries.", image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=800" },
    { name: "Beef Burger", desc: "Angus beef, cheddar, caramelised onion, secret sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" },
    { name: "Pulled Pork Burger", desc: "Slow cooked pork, apple slaw, smoky BBQ sauce.", image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=800" },
  ],
  bowls: [
    { name: "Buddha Bowl Salad", desc: "Quinoa, kale, roasted pumpkin, chickpeas, tahini dressing.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
    { name: "Grilled Chicken Caesar Salad", desc: "Cos lettuce, bacon, croutons, parmesan, poached egg.", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800" },
    { name: "Salt and Pepper Squid", desc: "Crispy squid, rocket salad, lemon aioli.", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80&w=800" },
    { name: "Fried Chicken Bowl", desc: "Crispy chicken, brown rice, edamame, pickled ginger.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" },
  ]
};

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
];

const TESTIMONIALS = [
  { name: "Sarah Jenkins", text: "The best coffee in Adelaide, hands down. The vibe is always electric!" },
  { name: "Mark Thompson", text: "That Breakfast Burger is a life-changer. Perfect weekend spot." },
  { name: "Chloe Chen", text: "Love the urban feel and the Buddha Bowl is so fresh and filling." },
  { name: "David Miller", text: "Service is fast and friendly. My daily go-to for a flat white." },
  { name: "Emma Wilson", text: "Great Australian brunch culture at its finest. Highly recommend!" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-bang-yellow selection:text-charcoal">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-bang-yellow p-2 rounded-lg">
                <Coffee className="text-charcoal w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tighter uppercase italic">
                Cafe <span className="text-bang-yellow">Bang Bang</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="hover:text-bang-yellow transition-colors font-semibold uppercase text-sm tracking-widest">Home</a>
              <a href="#menu" className="hover:text-bang-yellow transition-colors font-semibold uppercase text-sm tracking-widest">Menu</a>
              <a href="#gallery" className="hover:text-bang-yellow transition-colors font-semibold uppercase text-sm tracking-widest">Gallery</a>
              <a href="#reviews" className="hover:text-bang-yellow transition-colors font-semibold uppercase text-sm tracking-widest">Reviews</a>
              <a href="#contact" className="bg-bang-yellow text-charcoal px-6 py-2 rounded-full font-bold uppercase text-sm tracking-widest hover:scale-105 transition-transform">Visit Us</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-charcoal border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest">Home</a>
                <a href="#menu" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest">Menu</a>
                <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest">Gallery</a>
                <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest">Reviews</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest text-bang-yellow">Visit Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000" 
            alt="Cafe Interior" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-bang-yellow text-charcoal px-4 py-1 rounded-sm font-black uppercase text-sm tracking-[0.2em] mb-6">
              Adelaide, SA
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] uppercase italic tracking-tighter mb-6">
              Your Daily <br />
              <span className="text-bang-yellow">Dose of Flavour</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-xl mb-10 leading-relaxed">
              Coffee, Brunch, and Good Vibes in the heart of South Australia. Experience the urban energy of Adelaide's finest.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="bg-bang-yellow text-charcoal px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
                View Menu <Utensils size={20} />
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all">
                Find Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Accent */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="w-40 h-40 border border-bang-yellow/30 rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-bang-yellow font-black text-xs tracking-widest uppercase">Bang Bang • Adelaide • </span>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
              The <span className="text-timber">Menu</span>
            </h2>
            <div className="w-24 h-2 bg-bang-yellow mx-auto mb-8"></div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'breakfast', label: 'All Day Breakfast' },
              { id: 'burgers', label: 'Lunch - Burgers' },
              { id: 'bowls', label: 'Lunch - Salads & Bowls' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest transition-all ${
                  activeTab === tab.id 
                    ? 'bg-charcoal text-white shadow-xl scale-105' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <AnimatePresence mode="wait">
              {MENU_DATA[activeTab as keyof typeof MENU_DATA].map((item, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex flex-col sm:flex-row gap-6 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                >
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-display font-bold text-xl uppercase tracking-tight">{item.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Special Highlight */}
          <div className="mt-20 bg-charcoal text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-bang-yellow/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <div className="relative z-10 flex-grow">
                <h4 className="text-bang-yellow font-black uppercase tracking-[0.3em] text-sm mb-4">Chef's Recommendation</h4>
                <h3 className="font-display text-4xl font-black uppercase italic mb-6">The BangBang Breakfast</h3>
                <p className="text-white/70 max-w-xl mb-8">Our signature feast designed to fuel your Adelaide adventures. Locally sourced ingredients, perfectly seasoned, and served with love.</p>
                <button className="bg-bang-yellow text-charcoal px-8 py-3 rounded-full font-black uppercase tracking-widest hover:bg-white transition-colors">Order Now</button>
             </div>
             <div className="w-full md:w-1/2 h-64 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800" 
                  alt="Breakfast Spread" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-charcoal">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
              Our <span className="text-bang-yellow">Gallery</span>
            </h2>
            <div className="w-24 h-2 bg-charcoal mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden group relative"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bang-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            <div className="text-center md:text-left">
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
                What They <span className="text-bang-yellow">Say</span>
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex text-bang-yellow">
                  {[1, 2, 3, 4].map(i => <Star key={i} fill="currentColor" size={24} />)}
                  <Star size={24} className="text-bang-yellow/30" />
                </div>
                <span className="text-3xl font-black">4.2/5</span>
                <span className="text-white/50 uppercase tracking-widest text-xs font-bold">Google Rating</span>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/place/Caf%C3%A9+Bang+Bang/@-34.9230987,138.597426,17z/data=!4m15!1m8!3m7!1s0x6ab0cf29b50c83e1:0x1ba568e8dca94c3c!2sCaf%C3%A9+Bang+Bang!8m2!3d-34.9233261!4d138.5973437!10e9!16s%2Fg%2F11cjnnqry3!3m5!1s0x6ab0cf29b50c83e1:0x1ba568e8dca94c3c!8m2!3d-34.9233261!4d138.5973437!16s%2Fg%2F11cjnnqry3?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-charcoal px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-bang-yellow transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Leave a Google Review <Star className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Testimonials Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden px-4 py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-4xl font-display font-medium italic leading-relaxed mb-10">
                    "{TESTIMONIALS[testimonialIndex].text}"
                  </p>
                  <h4 className="text-bang-yellow font-black uppercase tracking-[0.2em]">
                    — {TESTIMONIALS[testimonialIndex].name}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <button onClick={prevTestimonial} className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <ChevronLeft />
              </button>
              <button onClick={nextTestimonial} className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Background Text Decor */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 select-none pointer-events-none opacity-[0.02] text-[20vw] font-black uppercase italic whitespace-nowrap">
          Bang Bang Bang Bang
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-charcoal border-t border-white/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-bang-yellow p-2 rounded-lg">
                  <Coffee className="text-charcoal w-6 h-6" />
                </div>
                <span className="font-display font-extrabold text-3xl tracking-tighter uppercase italic">
                  Cafe <span className="text-bang-yellow">Bang Bang</span>
                </span>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-bang-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold uppercase text-sm tracking-widest mb-1">Location</h5>
                    <p className="text-white/60">53 Hindley St, Adelaide,<br />South Australia 5000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-bang-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold uppercase text-sm tracking-widest mb-1">Contact</h5>
                    <p className="text-white/60">(08) 8123 4567<br />hello@cafebangbang.com.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-bang-yellow flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold uppercase text-sm tracking-widest mb-1">Opening Hours</h5>
                    <p className="text-white/60">Mon – Fri: 7:00 AM – 3:00 PM</p>
                    <p className="text-white/60">Weekend: 7:00 AM – 2:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-bang-yellow hover:text-charcoal transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-bang-yellow hover:text-charcoal transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="h-[400px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.303964177242!2d138.5946113767425!3d-34.9239121728414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced4d6e903d7%3A0x8f3c7d6c8e903d7!2s53%20Hindley%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e0!3m2!1sen!3sus!4v1710925000000!5m2!1sen!3sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Cafe Bang Bang Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs uppercase tracking-[0.2em] font-bold">
            <p>© 2026 Cafe Bang Bang. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
