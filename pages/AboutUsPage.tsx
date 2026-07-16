import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Zap, Globe, Shield, TrendingUp, CheckCircle2, ArrowRight, Star, ExternalLink, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUsPage: React.FC = () => {
  useEffect(() => {
    document.title = "About eCeez | Elite Ecommerce Growth & Development Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about eCeez, the elite ecommerce growth agency. We specialize in high-performance development, SEO, and CRO for global brands. Meet our team of experts.");
    }
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SEO Metadata & Schema (Conceptual) */}
      <section className="sr-only">
        <h1>About eCeez - Ecommerce Growth Agency</h1>
        <p>eCeez is a leading ecommerce growth agency specializing in high-performance development, strategic SEO, and conversion rate optimization for ambitious brands.</p>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6 uppercase tracking-wider">
          Our Story & Vision
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
          We Build the <span className="text-indigo-600">Future of Ecommerce.</span>
        </h1>
        <p className="text-zinc-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          eCeez is an elite **ecommerce growth agency** composed of senior engineers, data scientists, and conversion strategists dedicated to helping global brands scale through technical excellence.
        </p>
      </motion.div>

      {/* Section 1: Our Mission & Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
            Bridging the Gap Between <span className="text-indigo-600">Engineering & Growth</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Our mission is to bridge the gap between complex engineering and human-centric design. We believe that technology should be invisible yet impactful, empowering brands to connect with their customers in meaningful ways.
          </p>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Founded in 2024, eCeez was born out of a frustration with generic, one-size-fits-all digital solutions. We saw high-growth brands struggling with slow websites, poor conversion rates, and fragmented data. We decided to build an **ecommerce development agency** that prioritizes ROI over vanity metrics.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <CheckCircle2 className="text-indigo-600" size={16} />
              <span>Data-Driven Strategy</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <CheckCircle2 className="text-indigo-600" size={16} />
              <span>Senior-Level Talent</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <CheckCircle2 className="text-indigo-600" size={16} />
              <span>Performance First</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <CheckCircle2 className="text-indigo-600" size={16} />
              <span>Global Scalability</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
            alt="The eCeez Ecommerce Growth Agency Team" 
            className="relative rounded-[2.5rem] border border-zinc-200 shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Section 3.8: Expert Leadership & Verifiable Authors (E-E-A-T Compliance) */}
      <div id="team-leadership" className="mb-32 bg-white py-16 rounded-[4rem] border border-zinc-100/80 shadow-sm px-6 md:px-12 text-center">
        {/* Purple/Lavender Badge closely matching Reference */}
        <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#dcd8ff] text-[#584dfc] text-[11px] font-extrabold uppercase tracking-widest mb-6">
          Our People
        </div>
        
        {/* Heading matching Reference */}
        <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-none mb-16">
          A Team Built for Growth
        </h2>

        {/* Top Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {[
            {
              name: "David Castillo",
              role: "Co-Founder & Chief Officer",
              bio: "Co-founded SINA2 in 2019, driving strategic, data-led brand growth and scalable performance excellence.",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
              bgColor: "bg-[#cfe8c5]",
              textColor: "text-[#243e16]"
            },
            {
              name: "Ahmer Ameer",
              role: "Founder & CEO",
              bio: "Steering eCeez's creative strategy and growth consulting. Directs digital infrastructure architecture and custom conversion performance setups.",
              image: "https://i.ibb.co/pB3NQpRm/Untitled-design.png",
              bgColor: "bg-[#cbd2f1]",
              textColor: "text-[#18214d]",
              linkedin: "https://www.linkedin.com/in/ahmer-ameer-/"
            },
            {
              name: "Michael Patel",
              role: "Advisory Board Member",
              bio: "Directing compliance standards, multi-tenant database safety, and advising high-growth brands on capital scale plans.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
              bgColor: "bg-[#ead1e3]",
              textColor: "text-[#4b1d3f]"
            }
          ].map((member, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col justify-between rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden group aspect-[3/4] sm:aspect-[4/5] border border-zinc-200/40 shadow-sm hover:shadow-xl transition-all duration-300 ${member.bgColor}`}
            >
              {/* Card Meta At Top */}
              <div className="pt-8 px-6 text-center select-none">
                <span className={`text-[10px] font-extrabold tracking-widest ${member.textColor}/60 uppercase block`}>
                  {member.role}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-black tracking-tighter ${member.textColor} mt-1.5`}>
                  {member.name}
                </h3>
              </div>

              {/* Portrait Image (Multiply blend for transparent look) */}
              <div className="relative flex-1 flex items-end overflow-hidden justify-center max-h-[62%] sm:max-h-[66%]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-[82%] h-auto max-h-full object-contain mix-blend-multiply select-none group-hover:scale-[1.03] transition-transform duration-500 origin-bottom"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover Detail Card Pop-Up matching Reference */}
              <div className="absolute left-4 right-4 bottom-4 bg-white/95 backdrop-blur-md text-zinc-900 px-6 py-4 rounded-2xl shadow-xl border border-zinc-100/80 opacity-0 scale-95 translate-y-3 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20 text-center flex flex-col items-center justify-center gap-2">
                <p className="text-[11px] sm:text-xs font-bold leading-relaxed text-zinc-800">
                  {member.bio}
                </p>
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 bg-[#0077b5] text-white text-[9px] font-extrabold uppercase tracking-widest rounded-full hover:bg-[#005582] transition-colors shadow-sm cursor-pointer"
                  >
                    <Linkedin size={10} /> LinkedIn Profile
                  </a>
                )}
              </div>

              {/* Tiny stamp hint at bottom left like reference */}
              <span className="absolute bottom-4 left-4 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center text-[8px] text-black/50 select-none font-bold">
                ⓘ
              </span>
            </div>
          ))}
        </div>

        {/* Secondary Section - 'Our Specialists People' matching Reference */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-extrabold text-zinc-950 tracking-tight mb-2">
            Our Specialists People
          </h3>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm leading-relaxed mb-12">
            Our team of strategists, creators, and marketers crafts campaigns that engage, grow, and elevate brands.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Chloe Bennett",
                role: "Lead Designer",
                bio: "Designing brand ecosystems, user flows, typography, and visual assets for premier DTC platforms.",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
                bgColor: "bg-[#e6f3f0]",
                textColor: "text-[#1d3d34]"
              },
              {
                name: "Ethan Vance",
                role: "Senior Developer",
                bio: "Low-latency API architecture, frontend integrations, and securing scalable commerce hosting pipelines.",
                image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
                bgColor: "bg-[#e2e2f0]",
                textColor: "text-[#232342]"
              },
              {
                name: "Julianna Frost",
                role: "CRO Analyst",
                bio: "Sifting user intelligence, qualitative diagnostics, and running structured conversion A/B tests.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
                bgColor: "bg-[#e6ecea]",
                textColor: "text-[#273832]"
              },
              {
                name: "Marcus Thorne",
                role: "Fulfillment Tech",
                bio: "Structuring automated shipment workflows, fulfillment sync layers, and complex ERP webhooks.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
                bgColor: "bg-[#eedfe2]",
                textColor: "text-[#4b262f]"
              }
            ].map((spec, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col justify-end rounded-[2rem] sm:rounded-[2.2rem] overflow-hidden group aspect-[3/4] sm:aspect-[4/5] border border-zinc-200/30 shadow-sm hover:shadow-xl transition-all duration-300 ${spec.bgColor}`}
              >
                {/* Minimal label hidden on desktop or visible on hover / subtle default */}
                <div className="absolute top-4 left-4 right-4 text-left select-none z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className={`text-[8px] font-extrabold tracking-widest ${spec.textColor} uppercase block`}>
                    {spec.role}
                  </span>
                  <h4 className={`text-sm font-bold tracking-tight ${spec.textColor}`}>
                    {spec.name}
                  </h4>
                </div>

                {/* Portrait Specialist Image */}
                <div className="relative flex-1 flex items-end overflow-hidden justify-center max-h-[80%]">
                  <img 
                    src={spec.image} 
                    alt={spec.name} 
                    className="w-[85%] h-auto max-h-full object-contain mix-blend-multiply select-none group-hover:scale-[1.03] transition-transform duration-500 origin-bottom"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Hover Detail Card Pop-Up */}
                <div className="absolute left-3 right-3 bottom-3 bg-white/95 backdrop-blur-md text-zinc-900 px-4 py-3 rounded-xl shadow-xl border border-zinc-100/60 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20 text-center flex items-center justify-center">
                  <p className="text-[10px] font-bold leading-relaxed text-zinc-700">
                    {spec.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Our Core Values */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">The Values That <span className="text-indigo-600">Drive Our Success</span></h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Our culture is built on a foundation of technical mastery and relentless curiosity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white border border-zinc-200 p-10 rounded-[3rem] hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Precision Engineering</h3>
            <p className="text-zinc-600 leading-relaxed">
              We measure twice and cut once. Every line of code and every pixel is intentional, designed to perform at the highest level under extreme scale.
            </p>
          </div>
          <div className="bg-white border border-zinc-200 p-10 rounded-[3rem] hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Human-Centric Design</h3>
            <p className="text-zinc-600 leading-relaxed">
              We design for humans, not just algorithms. Understanding the user's emotional journey is at the heart of everything we build.
            </p>
          </div>
          <div className="bg-white border border-zinc-200 p-10 rounded-[3rem] hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">Relentless Excellence</h3>
            <p className="text-zinc-600 leading-relaxed">
              We don't stop at "done." We push for the best possible outcome, constantly iterating to ensure our clients stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Why Partner With Us? */}
      <div className="mb-32 py-20 bg-zinc-50 rounded-[4rem] border border-zinc-200 px-8 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
              Why Global Brands Choose <span className="text-indigo-600">eCeez</span>
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              As a specialized **ecommerce growth agency**, we understand that your website is your most valuable asset. We treat it with the respect it deserves, applying enterprise-grade standards to every project.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Senior-Only Talent",
                  desc: "Your project is never handed off to juniors. You work directly with senior experts who understand your business.",
                  icon: <Users className="text-indigo-600" size={20} />
                },
                {
                  title: "Performance Guarantee",
                  desc: "We guarantee sub-second load times and significant improvements in Core Web Vitals.",
                  icon: <Zap className="text-indigo-600" size={20} />
                },
                {
                  title: "Data-Backed Decisions",
                  desc: "We don't guess. Every strategy is rooted in rigorous data analysis and A/B testing.",
                  icon: <TrendingUp className="text-indigo-600" size={20} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl border border-zinc-200 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-zinc-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
              <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
                <p className="text-3xl font-bold text-black mb-1">50+</p>
                <p className="text-zinc-500 text-sm">Brands Scaled</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
                <p className="text-3xl font-bold text-black mb-1">200%</p>
                <p className="text-zinc-500 text-sm">Avg. ROI Increase</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
                <p className="text-3xl font-bold text-black mb-1">24/7</p>
                <p className="text-zinc-500 text-sm">Expert Support</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm">
                <p className="text-3xl font-bold text-black mb-1">10+</p>
                <p className="text-zinc-500 text-sm">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3.5: Verified Trustpilot Feedback */}
      <div className="mb-32">
        <div className="bg-emerald-50/20 border border-emerald-500/10 rounded-[3.5rem] p-10 md:p-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 pb-8 border-b border-zinc-200/50">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-extrabold text-sm mb-3">
                <span className="bg-[#00b67a] text-white p-1 rounded font-bold text-xs">★</span> VERIFIED CLIENT RATINGS
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-none">
                Trustpilot <span className="text-[#00b67a]">Excellent 5.0</span>
              </h2>
              <p className="text-zinc-600 mt-3 max-w-xl text-md font-medium leading-relaxed">
                Don't just take our word for it. Read verified, unfiltered reviews from founders and product leaders who scaled their digital stores with eCeez.
              </p>
            </div>
            
            <a 
              href="https://www.trustpilot.com/review/eceez.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2.5 bg-[#00b67a] hover:bg-[#00a36c] text-white px-7 py-4 rounded-2xl font-bold text-sm transition-all shadow-md group shrink-0"
            >
              Read All Reviews on Trustpilot <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                user: "Marcus K.",
                role: "Director of Digital",
                company: "Aurex Winter Wear",
                quote: "eCeez transformed our Shopify experience. The speed optimization alone lifted our conversion rate by 1.8%. Absolute experts in heavy-weight technical development.",
                stars: 5
              },
              {
                user: "Sarah Jenkins",
                role: "Co-Founder & CEO",
                company: "Oud Elixir",
                quote: "Finding an agency that understands both beautiful UI aesthetics and complex schema SEO is rare. eCeez has become an indispensable extension of our marketing team.",
                stars: 5
              },
              {
                user: "David Chen",
                role: "Operations Head",
                company: "Smarter Solutions",
                quote: "Their clean code protocols and automated fulfillment workflows cut our operational latency by half. Highly professional staff and stellar communication.",
                stars: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-zinc-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex gap-1.5 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="w-4 h-4 flex items-center justify-center bg-[#00b67a] text-white rounded-[2px] text-[10px] font-bold">★</span>
                    ))}
                  </div>
                  <p className="text-zinc-600 text-sm italic leading-relaxed mb-6">
                    "{review.quote}"
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-4 mt-auto">
                  <h4 className="font-bold text-black text-sm">{review.user}</h4>
                  <p className="text-zinc-400 text-xs font-medium">{review.role} — {review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: Join Our Journey / Careers */}
      <div className="bg-indigo-600 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <Users className="w-16 h-16 text-indigo-200 mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Join Our Journey.</h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          We're always looking for talented individuals who share our passion for technical excellence and human-centric design. Ready to build the future of ecommerce?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/careers" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:bg-zinc-100">
            View Open Positions
          </Link>
          <Link to="/contact" className="bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-indigo-800">
            Contact Our Team
          </Link>
        </div>
      </div>

      {/* Internal Linking Footer */}
      <div className="mt-20 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-bold text-black mb-4">Our Services</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/seo" className="hover:text-indigo-600">Ecommerce SEO</Link></li>
            <li><Link to="/cro" className="hover:text-indigo-600">Conversion Optimization</Link></li>
            <li><Link to="/automation" className="hover:text-indigo-600">Store Automation</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Success Stories</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/case-studies" className="hover:text-indigo-600">View All Projects</Link></li>
            <li><Link to="/case-studies/jewelry-store" className="hover:text-indigo-600">Jewelry Success</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/blog" className="hover:text-indigo-600">Ecommerce Blog</Link></li>
            <li><Link to="/blog/shopify-vs-woocommerce" className="hover:text-indigo-600">Platform Comparison</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-black mb-4">Get in Touch</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li><Link to="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
            <li><Link to="/careers" className="hover:text-indigo-600">Careers</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
