import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Pause, Volume2, VolumeX, Heart, MessageCircle, 
  Share2, Bookmark, X, ChevronUp, ChevronDown, Sparkles, 
  Send, MapPin, Star, Volume1, HelpCircle, CheckCircle2
} from 'lucide-react';

// Define structures
interface ReelComment {
  id: number;
  user: string;
  text: string;
  avatar: string;
  time: string;
}

interface TestimonialReel {
  id: number;
  type: 'video' | 'graphic';
  author: string;
  handle: string;
  role: string;
  location: string;
  avatar: string; // Emoji or initials
  thumbnail: string; // High-quality image
  videoUrl?: string;
  likes: number;
  initialComments: ReelComment[];
  transcript?: { time: number; text: string }[];
  graphicData?: {
    heading: string;
    subheading: string;
    text: string;
    rating: number;
    pill: string;
  };
}

const reelsData: TestimonialReel[] = [
  {
    id: 1,
    type: 'video',
    author: 'Becca',
    handle: '@becca.ecom',
    role: 'Founder, Luxury Brand',
    location: 'London, UK 🇬🇧',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop&facepad=2&crop=faces',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/e2c5278c20b64182a3b1a2d6a25f239d.mp4',
    likes: 853,
    initialComments: [
      { id: 1, user: 'becca_fan', text: 'Unbelievable results. Conversion rate optimization was insane.', avatar: 'BF', time: '1d ago' },
      { id: 2, user: 'rose_shop', text: 'This jewelry layout is so clean, I love it!', avatar: 'RS', time: '12h ago' },
      { id: 3, user: 'mark_grow', text: 'Very impressive ROI with their store setups.', avatar: 'MG', time: '2h ago' }
    ],
    transcript: [
      { time: 0, text: "The custom store design and conversion optimizations by eCeez are top tier." },
      { time: 4, text: "Our Shopify conversion rate increased by over 140% since the launch." },
      { time: 9, text: "If you're an e-commerce brand looking to scale, they are the absolute best choice." }
    ]
  },
  {
    id: 2,
    type: 'video',
    author: 'Jan Rybczak',
    handle: '@jan.rybczak',
    role: 'Business Developer & Partner Relations',
    location: 'Merixstudio, Poland 🇵🇱',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop&facepad=2&crop=faces',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/1bcca731c4f744dab47a49ee53145c18.mp4',
    likes: 1245,
    initialComments: [
      { id: 1, user: 'merix_f', text: 'Jan is spot on here. eCeez is exceptionally professional!', avatar: 'MF', time: '3d ago' },
      { id: 2, user: 'ecom_sam', text: 'Customer support in agency space is rare, glad eCeez nails it.', avatar: 'ES', time: '2d ago' },
      { id: 3, user: 'polish_hub', text: 'Merixstudio validation says a lot about their setup status.', avatar: 'PH', time: '1d ago' }
    ],
    transcript: [
      { time: 0, text: "From my perspective, what's unique is definitely the customer experience." },
      { time: 4.5, text: "So whenever I have a problem, I have that really good customer experience from your team." },
      { time: 9.5, text: "And it's something that I'm looking forward to because I care about it, too." },
      { time: 13, text: "I also have clients and I like to be supportive." },
      { time: 16.5, text: "I'm Jan, I live in Poland, and I work for Merixstudio." },
      { time: 21, text: "Merixstudio is a software house which delivers web and mobile applications worldwide." },
      { time: 26, text: "We have been in the market for 24 years, working with a variety of industries..." },
      { time: 31, text: "...starting from healthcare, FinTech, AdTech, gaming, e-commerce, and more." }
    ]
  },
  {
    id: 3,
    type: 'video',
    author: 'Benjamin Hyppönen',
    handle: '@benjamin.hypp',
    role: 'Founder of Digital Marketing Agency',
    location: 'Helsinki, Finland 🇫🇮',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&auto=format&fit=crop&facepad=2&crop=faces',
    thumbnail: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://cdn.shopify.com/videos/c/o/v/29be79ef10734cabbd02c0ab53cd813b.mp4',
    likes: 932,
    initialComments: [
      { id: 1, user: 'helsinki_crew', text: 'Email outreach automation is the absolute holy grail. ⚡', avatar: 'HC', time: '2d ago' },
      { id: 2, user: 'grow_faster', text: 'No more messy Excel files! Big win.', avatar: 'GF', time: '1d ago' },
      { id: 3, user: 'amy_agency', text: 'Does eCeez set up the whole Apollo / Lemlist tech stack too?', avatar: 'AA', time: '10h ago' }
    ],
    transcript: [
      { time: 0, text: "I'm Benjamin, the founder of my Digital Marketing Agency." },
      { time: 3, text: "We are based in Helsinki, Finland." },
      { time: 5.5, text: "At the moment, I help clients with e-commerce needs, especially women's clothing and jewelry." },
      { time: 10, text: "We help them grow with digital marketing like Facebook, Google, and Instagram." },
      { time: 15, text: "So I really wanted to automate my cold outreach with emails because it was so painful, man." },
      { time: 20, text: "It was so painful to do it manually. That's what I did for the first year, probably." },
      { time: 25, text: "So it was also really slow to send all the emails and email sequences." },
      { time: 29.5, text: "When I started, I just had like an Excel list of the clients I would do the outreach for." },
      { time: 34, text: "So then I sent the first email, then waited for a couple days, then sent another email..." },
      { time: 39, text: "...then waited a couple days. But after outreaching like hundreds of clients, it was just like a big mess." },
      { time: 44, text: "Wait, who should I send the email to today or tomorrow? I was like, I can't do this anymore." },
      { time: 49, text: "With eCeez, the most helpful things were for sure automated email sequences..." }
    ]
  }
];

export const TestimonialsReels: React.FC = () => {
  const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [likesState, setLikesState] = useState<{ [key: number]: number }>({
    1: 853,
    2: 1245,
    3: 932
  });
  const [hasLiked, setHasLiked] = useState<{ [key: number]: boolean }>({});
  const [commentsState, setCommentsState] = useState<{ [key: number]: ReelComment[] }>({
    1: reelsData[0].initialComments,
    2: reelsData[1].initialComments,
    3: reelsData[2].initialComments
  });
  const [newComment, setNewComment] = useState('');
  const [commentOpen, setCommentOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [floatingLikes, setFloatingLikes] = useState<{ id: number; x: number; y: number }[]>([]);
  const [showShareCopied, setShowShareCopied] = useState(false);
  const [captionIndex, setCaptionIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Manage body scroll lock
  useEffect(() => {
    if (selectedReelIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedReelIndex]);

  // Handle keyboard listener in modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedReelIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedReelIndex(null);
      } else if (e.key === 'ArrowUp') {
        goToPrevReel();
      } else if (e.key === 'ArrowDown') {
        goToNextReel();
      } else if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'm') {
        setIsMuted(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedReelIndex]);

  // Handle active caption timer update
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setCurrentTime(time);

    const activeReel = reelsData[selectedReelIndex || 0];
    if (activeReel && activeReel.transcript) {
      const matchingIdx = activeReel.transcript.findIndex(
        (item, idx) => {
          const nextItem = activeReel.transcript?.[idx + 1];
          return time >= item.time && (!nextItem || time < nextItem.time);
        }
      );
      if (matchingIdx !== -1) {
        setCaptionIndex(matchingIdx);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setVideoDuration(videoRef.current.duration);
  };

  // Reset playback when switching reels in modal
  useEffect(() => {
    if (selectedReelIndex !== null) {
      setIsPlaying(true);
      setCurrentTime(0);
      setCaptionIndex(0);
      setCommentOpen(false);
      setIsMuted(true); // Reset to muted so autoplay is 100% permitted by modern browsers on reel change!
      
      // We don't need a heavy setTimeout with programmatic play/load calls.
      // Since we key the video element by its URL, React automatically destroys the old
      // video tag and mounts a brand new one. The native HTML `autoPlay` property initiates
      // playback robustly without race conditions. We add a safe fallback play checker:
      setTimeout(() => {
        if (videoRef.current && videoRef.current.paused) {
          videoRef.current.play().catch(err => {
            console.log("Autoplay play fallback blocked: ", err);
          });
        }
      }, 150);
    }
  }, [selectedReelIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    const targetTime = clickPercentage * videoDuration;
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const likeReel = (id: number, e?: React.MouseEvent) => {
    const alreadyLiked = hasLiked[id];
    setHasLiked(prev => ({ ...prev, [id]: !alreadyLiked }));
    setLikesState(prev => ({
      ...prev,
      [id]: alreadyLiked ? prev[id] - 1 : prev[id] + 1
    }));

    if (!alreadyLiked && e) {
      // Spawn floating heart
      const targetRect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - targetRect.left;
      const y = e.clientY - targetRect.top;
      const fId = Date.now() + Math.random();
      setFloatingLikes(prev => [...prev, { id: fId, x, y }]);
      setTimeout(() => {
        setFloatingLikes(prev => prev.filter(heart => heart.id !== fId));
      }, 1200);
    }
  };

  const handleStageClick = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      likeReel(id, e);
    } else {
      togglePlay();
    }
  };

  const submitComment = (id: number) => {
    if (!newComment.trim()) return;
    const comment: ReelComment = {
      id: Date.now(),
      user: 'You',
      text: newComment,
      avatar: '👑',
      time: 'Just now'
    };
    setCommentsState(prev => ({
      ...prev,
      [id]: [comment, ...(prev[id] || [])]
    }));
    setNewComment('');
  };

  const shareReel = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareCopied(true);
    setTimeout(() => {
      setShowShareCopied(false);
    }, 2000);
  };

  const goToNextReel = () => {
    if (selectedReelIndex === null) return;
    const nextIdx = (selectedReelIndex + 1) % reelsData.length;
    setSelectedReelIndex(nextIdx);
  };

  const goToPrevReel = () => {
    if (selectedReelIndex === null) return;
    const prevIdx = (selectedReelIndex - 1 + reelsData.length) % reelsData.length;
    setSelectedReelIndex(prevIdx);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            Founder Reels
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-zinc-900 leading-tight tracking-tight mb-6"
          >
            Watch clients tell their <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600">honest story</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 text-lg max-w-2xl mx-auto font-medium"
          >
            Click on any reel card below to experience immersive, interactive customer testimonials in real time.
          </motion.p>
        </div>

        {/* Grid of Reels Cards */}
        <div id="reels-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reelsData.map((reel, idx) => {
            const isEmily = reel.type === 'graphic';
            return (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedReelIndex(idx)}
                className="group relative aspect-[9/16] bg-zinc-950 border border-zinc-200/50 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {isEmily ? (
                  /* High Fidelity Graphic Rendering for Emily */
                  <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-between p-6 select-none">
                    {/* SVG Sparkles (Paint/Brush strokes) from original graphic */}
                    {/* Top-Left Stroke */}
                    <div className="absolute top-4 left-4 text-[#DCF863] opacity-80 pointer-events-none">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <line x1="8" y1="20" x2="2" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <line x1="16" y1="12" x2="16" y2="4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <line x1="10" y1="14" x2="3" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Bottom-Right Stroke */}
                    <div className="absolute bottom-4 right-4 text-[#DCF863] opacity-80 pointer-events-none">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <line x1="20" y1="8" x2="28" y2="2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <line x1="12" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <line x1="14" y1="10" x2="10" y2="3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Green card container */}
                    <div className="w-full h-full bg-[#DCF863] rounded-3xl flex flex-col justify-between p-6 text-black border-4 border-[#C8E84F] shadow-lg relative my-8">
                      <div>
                        <h4 className="text-3xl font-black uppercase text-center text-zinc-950 mt-4 leading-none tracking-tight">
                          Comments<br/>from You
                        </h4>
                        <p className="text-base font-semibold text-center text-zinc-800 mt-2">
                          Emily
                        </p>
                      </div>

                      <div className="bg-[#FAF9F5] rounded-2xl p-4 border-2 border-zinc-950 flex flex-col gap-3">
                        {/* 5 Stars */}
                        <div className="flex gap-1 justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-[#DCF863] text-zinc-950" />
                          ))}
                        </div>

                        <p className="text-xs font-semibold text-zinc-800 text-center leading-relaxed">
                          "{reel.graphicData?.text}"
                        </p>
                      </div>

                      <div className="flex justify-center mb-2">
                        <span className="bg-zinc-950 text-[#DCF863] py-1.5 px-5 rounded-full text-[11px] font-black uppercase tracking-widest border border-zinc-950 hover:bg-zinc-900 transition-colors">
                          {reel.graphicData?.pill}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Video Thumbnail Previews for Jan & Benjamin */
                  <>
                    <img 
                      src={reel.thumbnail} 
                      alt={reel.author}
                      className="w-full h-full object-cover transition-transform duration-500 scale-105 group-hover:scale-110 opacity-70 group-hover:opacity-60"
                      referrerPolicy="no-referrer"
                    />

                    {/* Dark gradient mapping inside preview */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

                    {/* Floating Profile Info */}
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-800/80 border border-white/20 flex items-center justify-center overflow-hidden text-lg shadow-lg">
                        {reel.avatar.startsWith('http') ? (
                          <img src={reel.avatar} alt={reel.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          reel.avatar
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm shadow-sm">{reel.author}</h4>
                        <p className="text-xs text-zinc-300 shadow-sm">{reel.location.split(',')[0]}</p>
                      </div>
                    </div>

                    {/* Subtitle / Excerpt preview overlay */}
                    <div className="absolute bottom-16 left-6 right-6 text-left">
                      <div className="inline-block bg-indigo-600 text-white rounded-full text-[9px] font-bold px-2 py-0.5 tracking-wider uppercase mb-2">
                        {reel.role.includes('Business') ? 'PARTNERSHIP' : 'OUTREACH AUTOMATION'}
                      </div>
                      <p className="text-white font-semibold text-sm line-clamp-3">
                        "{reel.transcript?.[0].text || reel.graphicData?.text}"
                      </p>
                    </div>

                    {/* Micro Play controls overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </>
                )}

                {/* Reels Interaction Counter Tag on bottom */}
                <div className="absolute bottom-6 left-6 flex gap-4 text-xs font-bold text-zinc-300">
                  <span className="flex items-center gap-1 shadow-sm bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    {likesState[reel.id]}
                  </span>
                  <span className="flex items-center gap-1 shadow-sm bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                    <MessageCircle className="w-3.5 h-3.5 text-indigo-400" />
                    {commentsState[reel.id].length}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN IMMERSIVE REELS MODAL VIEWER */}
      <AnimatePresence>
        {selectedReelIndex !== null && (() => {
          const activeReel = reelsData[selectedReelIndex];
          const isEmily = activeReel.type === 'graphic';

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
            >
              {/* Top Banner Warning or Guidelines */}
              <div className="absolute top-4 left-4 right-4 md:left-10 md:top-8 flex justify-between items-center z-10 select-none pointer-events-none md:pointer-events-auto">
                {/* Logo & Close */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center font-black text-black text-lg shadow-lg">
                    e
                  </div>
                  <span className="text-white font-extrabold tracking-wider text-base uppercase bg-neutral-900/50 backdrop-blur px-3 py-1 rounded-full border border-white/5 hidden md:inline-block">
                    eCeez.com <span className="text-zinc-500">Reels</span>
                  </span>
                </div>
                {/* Sound Indicator Notice */}
                {!isEmily && isMuted && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-indigo-600/90 text-white font-bold text-xs px-3.5 py-1.5 rounded-full backdrop-blur border border-indigo-400/30 flex items-center gap-2 animate-bounce cursor-pointer shadow-lg hover:bg-indigo-500 pointer-events-auto"
                    onClick={() => setIsMuted(false)}
                  >
                    <VolumeX className="w-3.5 h-3.5" />
                    Tap here to turn Sound ON
                  </motion.div>
                )}
                <button 
                  onClick={() => setSelectedReelIndex(null)}
                  className="w-11 h-11 pointer-events-auto rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl"
                  title="Close Reel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Central Phone Mockup Container */}
              <div className="relative w-full max-w-[420px] aspect-[9/19] h-[92vh] max-h-[820px] mx-auto z-10 bg-zinc-950 rounded-[3rem] border-8 border-zinc-800 shadow-[0_0_80px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col justify-between">
                
                {/* Simulated Floating Sparkles/Hearts on Doubletap */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
                  <AnimatePresence>
                    {floatingLikes.map(heart => (
                      <motion.div
                        key={heart.id}
                        initial={{ opacity: 1, scale: 0.2, y: heart.y }}
                        animate={{ opacity: 0, scale: 2.2, y: heart.y - 180, rotate: (Math.random() - 0.5) * 40 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute text-rose-500 fill-rose-500"
                        style={{ left: heart.x - 20 }}
                      >
                        <Heart className="w-10 h-10 drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* MODAL MAIN STAGE */}
                <div 
                  className="relative w-full flex-grow overflow-hidden bg-neutral-900 cursor-pointer"
                  onClick={(e) => handleStageClick(activeReel.id, e)}
                >
                  {isEmily ? (
                    /* Graphical Content View for Emily */
                    <div className="w-full h-full bg-neutral-900 flex flex-col items-center justify-between p-6 select-none relative">
                      
                      {/* Organic Handdrawn Doodles */}
                      <div className="absolute top-8 left-8 text-[#DCF863] opacity-80 pointer-events-none">
                        <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
                          <line x1="8" y1="20" x2="2" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          <line x1="16" y1="12" x2="16" y2="4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          <line x1="10" y1="14" x2="3" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="absolute bottom-8 right-8 text-[#DCF863] opacity-80 pointer-events-none">
                        <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
                          <line x1="20" y1="8" x2="28" y2="2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          <line x1="12" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                          <line x1="14" y1="10" x2="10" y2="3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </div>

                      {/* Neon Lime Card exactly replicating screenshot */}
                      <div className="w-full my-auto bg-[#DCF863] rounded-[2rem] flex flex-col justify-between p-6 text-black border-[5px] border-[#C8E84F] shadow-2xl relative">
                        <div className="text-center mt-3">
                          <h4 className="text-4xl font-black uppercase text-zinc-950 leading-none tracking-tight">
                            Comments<br/>from You
                          </h4>
                          <p className="text-lg font-bold text-zinc-800 mt-2.5">
                            Emily
                          </p>
                        </div>

                        <div className="bg-[#FAF9F5] rounded-3xl p-5 border-2 border-zinc-950 flex flex-col gap-4 shadow-inner my-6">
                          <div className="flex gap-1 justify-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-6 h-6 fill-[#DCF863] text-zinc-950" />
                            ))}
                          </div>
                          <p className="text-sm font-semibold text-zinc-800 text-center leading-relaxed">
                            "{activeReel.graphicData?.text}"
                          </p>
                        </div>

                        <div className="flex justify-center mb-1">
                          <span className="bg-zinc-950 text-[#DCF863] hover:text-white py-2.5 px-8 rounded-full text-xs font-black uppercase tracking-widest border-2 border-zinc-950 transition-colors">
                            {activeReel.graphicData?.pill}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Video stream playback overlay screen */
                    <div className="w-full h-full relative">
                      <video
                        key={activeReel.videoUrl}
                        ref={videoRef}
                        src={activeReel.videoUrl}
                        className="w-full h-full object-cover"
                        playsInline
                        loop
                        muted={isMuted}
                        autoPlay
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        controls={false}
                        onError={(e) => {
                          console.error("Video element error: ", e);
                        }}
                      />

                      {/* Video Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40 pointer-events-none"></div>

                      {/* Video Sound Trigger Indicator Overlay */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/70 pointer-events-auto z-20 transition-all hover:scale-105"
                      >
                        {isMuted ? <VolumeX className="w-4.5 h-4.5 text-rose-400" /> : <Volume2 className="w-4.5 h-4.5 text-teal-400" />}
                      </button>

                      {/* Big Pause Overlay status icon */}
                      <AnimatePresence>
                        {!isPlaying && (
                          <motion.div 
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            onClick={togglePlay}
                            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/60 border border-white/10 flex items-center justify-center pointer-events-auto z-20"
                          >
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Dynamic synchronized lyric captions */}
                      {activeReel.transcript && (
                        <div className="absolute bottom-28 left-6 right-16 text-left select-none pointer-events-none z-20">
                          <motion.blockquote 
                            key={captionIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white text-base font-black leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                          >
                            "{activeReel.transcript[captionIndex]?.text}"
                          </motion.blockquote>
                        </div>
                      )}
                    </div>
                  )}

                  {/* BOTTOM INFO OVERLAY inside phone container */}
                  <div className="absolute bottom-6 left-6 right-18 text-left z-20 pointer-events-none">
                    <div className="flex items-center gap-2 mb-2 pointer-events-auto">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-indigo-500/50 flex items-center justify-center overflow-hidden text-sm shadow">
                        {activeReel.avatar.startsWith('http') ? (
                          <img src={activeReel.avatar} alt={activeReel.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          activeReel.avatar
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm leading-none">{activeReel.author}</h4>
                        <p className="text-[10px] text-zinc-400">{activeReel.handle}</p>
                      </div>
                      <span className="ml-1 bg-indigo-600 border border-indigo-400/30 text-[9px] font-black text-white rounded px-1 flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" /> VERIFIED
                      </span>
                    </div>

                    <p className="text-[11px] text-zinc-300 font-medium mb-1 line-clamp-2">
                      {activeReel.role}
                    </p>

                    <p className="text-[11px] font-semibold text-indigo-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {activeReel.location}
                    </p>
                  </div>

                  {/* INTERACTION REACTION STRIP - SIDEBAR */}
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-16 right-4 flex flex-col items-center gap-5 z-20 pointer-events-auto"
                  >
                    
                    {/* HEART */}
                    <button 
                      onClick={(e) => likeReel(activeReel.id, e)}
                      className="flex flex-col items-center group/icon"
                    >
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center shadow-lg transition-all transform hover:scale-105 active:scale-90 ${hasLiked[activeReel.id] ? 'bg-rose-500/20 border-rose-500/30 text-rose-500' : 'bg-black/50 border-white/10 text-white hover:bg-black/70'}`}>
                        <Heart className={`w-5.5 h-5.5 ${hasLiked[activeReel.id] ? 'fill-rose-500' : ''}`} />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-1 shadow drop-shadow-md">
                        {likesState[activeReel.id]}
                      </span>
                    </button>

                    {/* COMMENTS BUTTON */}
                    <button 
                      onClick={() => setCommentOpen(true)}
                      className="flex flex-col items-center group/icon"
                    >
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 hover:bg-black/70">
                        <MessageCircle className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-1 shadow drop-shadow-md">
                        {commentsState[activeReel.id].length}
                      </span>
                    </button>

                    {/* SHARE BUTTON */}
                    <button 
                      onClick={shareReel}
                      className="flex flex-col items-center group/icon relative"
                    >
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 hover:bg-black/70">
                        <Share2 className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-1 shadow drop-shadow-md">
                        Share
                      </span>

                      {/* Tooltip confirmation */}
                      {showShareCopied && (
                        <div className="absolute right-14 bg-emerald-500 text-white font-extrabold text-[10px] py-1 px-3 rounded-md shadow-md whitespace-nowrap z-50 animate-fade-in border border-emerald-400/30">
                          Link copied!
                        </div>
                      )}
                    </button>

                    {/* BOOKMARK */}
                    <button className="flex flex-col items-center group/icon">
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 hover:bg-black/70">
                        <Bookmark className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[10px] font-bold text-white mt-1 shadow drop-shadow-md">
                        Save
                      </span>
                    </button>
                  </div>

                  {/* ACTIVE REEL PROGRESS SCRUBBER BAR */}
                  {!isEmily && videoDuration > 0 && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProgressClick(e);
                      }}
                      className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 hover:h-2.5 transition-all cursor-pointer z-30"
                    >
                      <div 
                        className="h-full bg-indigo-500 relative shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                        style={{ width: `${(currentTime / videoDuration) * 100}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border border-indigo-500 shadow-md"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* BOTTOM FEED NAVIGATION CONTROLS DECK */}
                <div className="bg-zinc-900 border-t border-zinc-800 p-4 shrink-0 flex items-center justify-between pointer-events-auto">
                  <div className="text-zinc-400 font-bold text-xs select-none">
                    Reel {selectedReelIndex + 1} of {reelsData.length}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={goToPrevReel}
                      className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white flex items-center justify-center transition-colors shadow active:scale-95"
                      title="Previous Reel"
                    >
                      <ChevronUp className="w-4.5 h-4.5" />
                    </button>
                    <button 
                      onClick={goToNextReel}
                      className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white flex items-center justify-center transition-colors shadow active:scale-95"
                      title="Next Reel"
                    >
                      <ChevronDown className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

                {/* SLIDE-UP REALTIME COMMENTS DRAWER */}
                <AnimatePresence>
                  {commentOpen && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute inset-x-0 bottom-0 top-[30%] bg-zinc-900 rounded-t-3xl border-t border-zinc-800 flex flex-col z-[40] shadow-2xl overflow-hidden"
                    >
                      {/* Drawer grab line & title */}
                      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-white text-sm">Comments</h4>
                          <span className="bg-zinc-800 text-zinc-400 text-xs px-2 py-0.5 rounded-full font-bold">
                            {commentsState[activeReel.id].length}
                          </span>
                        </div>
                        <button 
                          onClick={() => setCommentOpen(false)}
                          className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Comments Feed list */}
                      <div className="flex-grow overflow-y-auto p-4 space-y-4 text-left">
                        {commentsState[activeReel.id].map(comment => (
                          <div key={comment.id} className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-bold font-mono">
                              {comment.avatar.length <= 2 ? comment.avatar : comment.avatar}
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-1.5">
                                <span className="font-extrabold text-white text-xs">{comment.user}</span>
                                <span className="text-[9px] text-zinc-500">{comment.time}</span>
                              </div>
                              <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                                {comment.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Comment Input Action Box */}
                      <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            submitComment(activeReel.id);
                          }}
                          className="flex gap-2"
                        >
                          <input 
                            type="text"
                            placeholder="Type an appreciative comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="flex-grow bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                          />
                          <button 
                            type="submit"
                            className="w-9 h-9 shrink-0 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-colors active:scale-95"
                          >
                            <Send className="w-4.5 h-4.5" />
                          </button>
                        </form>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating Side Help Indicators (Desktop) */}
              <div className="absolute right-12 bottom-12 select-none pointer-events-none hidden lg:flex flex-col items-end gap-3 text-[11px] font-bold text-zinc-500">
                <span className="flex items-center gap-1.5"><kbd className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 text-[10px]">ArrowUp</kbd> / <kbd className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 text-[10px]">ArrowDown</kbd> Navigate Reels</span>
                <span className="flex items-center gap-1.5"><kbd className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 text-[10px]">Space</kbd> Play / Pause</span>
                <span className="flex items-center gap-1.5"><kbd className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-400 text-[10px]">M</kbd> Toggle Mute</span>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};
