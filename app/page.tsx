'use client';

import { useState } from 'react';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import { 
  FileCode2, Mail, Github, Linkedin, Bot, Zap, Network, GitMerge, 
  TerminalSquare, Workflow, MapPin, Phone, GraduationCap, Award, 
  Briefcase, FolderGit2
} from 'lucide-react';

export default function PortfolioHome() {
  const [skillFilter, setSkillFilter] = useState('All');

  return (
    <main className="min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full flex justify-between items-center p-6 md:p-12 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-mono font-semibold tracking-widest text-cyan-400"
        >
          &lt;Geethaka_Virajith /&gt;
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-6"
        >
          <a href="#about" className="hidden md:block text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors">// About</a>
          <a href="#projects" className="text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors">// Projects</a>
          <a href="#education" className="hidden md:block text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-cyan-400 transition-colors">// Education</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 md:px-24 border-b border-slate-900 z-10 flex flex-col items-start overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-6 text-cyan-500 font-mono text-sm">
            <Bot className="w-5 h-5" />
            <span>AI & Automation Engineer</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.05] tracking-tight mb-8 text-white">
            Geethaka <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Virajith.</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 text-justify">
            Detail-oriented Information Technology undergraduate specializing in the intersection of Artificial Intelligence and Robotic Process Automation. Passionate about bridging data science with operational efficiency, I architect end-to-end solutions—from developing deep neural networks and agentic LLM pipelines to building resilient UiPath scraping workflows. Using Python, TensorFlow, PyTorch, and industry-leading RPA tools, I transform complex manual bottlenecks into intelligent, scalable, and data-driven systems.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <a href="mailto:geethakavirajith09@gmail.com" className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-6 py-3 rounded-md text-sm font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Geethaka09" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-md border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all bg-slate-900/50">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/geethaka-virajith-645656255" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-md border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all bg-slate-900/50">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="tel:+94773790212" className="w-12 h-12 rounded-md border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all bg-slate-900/50">
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-mono ml-4">
              <MapPin className="w-4 h-4" />
              Horana, Sri Lanka
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Competencies Matrix & Skills */}
      <section id="about" className="py-24 px-6 md:px-24 bg-slate-950/50 z-10 relative border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="font-mono text-cyan-500 mb-6 text-sm uppercase tracking-widest">// Core_Protocols</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Technical Skills</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Actively building foundational skills through self-directed learning, 
              focusing on delivering automation-adjacent solutions.
            </p>
            <div className="flex flex-col gap-2">
              {['All', 'RPA & Automation', 'AI & Development'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSkillFilter(filter)}
                  className={`text-left px-4 py-3 rounded-md text-sm font-mono transition-all duration-300 ${
                    skillFilter === filter
                      ? 'bg-cyan-500/10 border-l-2 border-cyan-500 text-cyan-400 font-bold'
                      : 'border-l-2 border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">
                      {skillFilter === filter ? '●' : '○'}
                    </span>
                    {filter}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <motion.div layout className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <AnimatePresence mode="popLayout">
              {(skillFilter === 'All' || skillFilter === 'RPA & Automation') && (
                <motion.div
                  key="rpa"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-xl border border-slate-800 bg-slate-900/30"
                >
                  <Workflow className="w-8 h-8 text-cyan-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">RPA & Automation</h3>
                  <div className="flex flex-wrap gap-2">
                    {['UiPath Studio', 'Orchestrator', 'REFramework', 'UI/Desktop Automation', 'Web Scraping'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-sm bg-slate-950 border border-slate-800 text-slate-300 text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              {(skillFilter === 'All' || skillFilter === 'AI & Development') && (
                <motion.div
                  key="ai"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-xl border border-slate-800 bg-slate-900/30"
                >
                  <TerminalSquare className="w-8 h-8 text-blue-400 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">AI & Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Machine Learning', 'TensorFlow', 'Keras', 'Scikit-Learn', 'LLMs', 'Pandas', 'NumPy', 'REST APIs', 'SQL', 'Git/GitHub', 'AWS'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-sm bg-slate-950 border border-slate-800 text-slate-300 text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-24 px-6 md:px-24 z-10 relative border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-mono text-cyan-500 mb-6 text-sm uppercase tracking-widest">// Academic_Records</h2>
            <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
            
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-800"></div>
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              
              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className="flex items-center gap-3 mb-3 text-white">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-xl font-bold">BSc in Information Technology</h4>
                </div>
                <p className="text-cyan-400 font-mono text-sm mb-4">Rajarata University of Sri Lanka</p>
                <span className="inline-block px-3 py-1 rounded bg-slate-800/80 text-slate-300 font-mono text-xs border border-slate-700">
                  2023 — 2026
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="font-mono text-cyan-500 mb-6 text-sm uppercase tracking-widest">// Credentials</h2>
            <h3 className="text-3xl font-bold text-white mb-8">Certifications</h3>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white leading-snug">Robotic Process Automation (RPA) Specialization</h4>
                    <p className="text-blue-400 font-mono text-sm mt-1">Coursera</p>
                  </div>
                </div>
                <a href="https://coursera.org/share/8f0efa321b7af5a782ca08fb00237d4f" target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono mt-4 inline-block break-all">
                  Verify Certificate ↗
                </a>
              </div>

              <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white leading-snug">AWS AI Practitioner Challenge</h4>
                    <p className="text-yellow-500 font-mono text-sm mt-1">Udacity</p>
                  </div>
                </div>
                <a href="https://www.udacity.com/certificate/e/0f3da58c-3108-11f1-b10b-ff4d3085967f" target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono mt-4 inline-block break-all">
                  Verify Certificate ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 md:px-24 bg-slate-950/50 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-cyan-500 mb-6 text-sm uppercase tracking-widest">// Execution_Logs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-16">Personal Projects</h3>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Project 1: Diabetic Risk Prediction */}
            <div className="group flex flex-col p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-red-950/50 text-red-400 mb-2">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Diabetic Risk Prediction Model</h3>
                    <h4 className="text-red-400 font-mono text-sm mt-1">Deep Learning Framework</h4>
                  </div>
                </div>
                <a href="https://github.com/Geethaka09/Diabetic-Risk-prediction-Model" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-relaxed list-disc list-inside grow">
                <li>Built and trained a deep neural network on lifestyle datasets to predict diabetes risk.</li>
                <li>Performed comprehensive data preprocessing, feature selection, and model evaluation.</li>
                <li>Conducted accuracy analysis on structured health data to ensure high-performance predictive screening.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Python</span>
                <span className="px-2.5 py-1 bg-cyan-950/30 text-cyan-400 rounded-md text-xs font-mono border border-cyan-800/50">AI/ML</span>
                <span className="px-2.5 py-1 bg-purple-950/30 text-purple-400 rounded-md text-xs font-mono border border-purple-800/50">Deep Learning</span>
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">TensorFlow</span>
              </div>
            </div>

            {/* Project 2: Safety Helmet Classifier */}
            <div className="group flex flex-col p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-orange-950/50 text-orange-400 mb-2">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Image-Based Helmet Detection</h3>
                    <h4 className="text-orange-400 font-mono text-sm mt-1">Computer Vision & CNN</h4>
                  </div>
                </div>
                <a href="https://github.com/Geethaka09/Safety-Helmet-Classifier" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-relaxed list-disc list-inside grow">
                <li>Developed a CNN-based classification model trained on labelled image datasets for construction site safety monitoring.</li>
                <li>Applied transfer learning using MobileNet/YOLOv5 to dramatically improve model accuracy on real-world edge data.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Python</span>
                <span className="px-2.5 py-1 bg-cyan-950/30 text-cyan-400 rounded-md text-xs font-mono border border-cyan-800/50">AI/ML</span>
                <span className="px-2.5 py-1 bg-purple-950/30 text-purple-400 rounded-md text-xs font-mono border border-purple-800/50">Computer Vision</span>
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Keras</span>
              </div>
            </div>

            {/* Project 3: SkillQuest */}
            <div className="group flex flex-col p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-950/50 text-purple-400 mb-2">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">SkillQuest</h3>
                    <h4 className="text-purple-400 font-mono text-sm mt-1">AI-Driven Adaptive Learning</h4>
                  </div>
                </div>
                <a href="https://github.com/Geethaka09/SkillQuest" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-relaxed list-disc list-inside grow">
                <li>Developed an adaptive e-learning platform integrating a Deep Q-Network trained over 800 episodes to generate personalized study plans.</li>
                <li>Built a 4-agent LLM content pipeline (Cohere RAG → dual GPT-4o/Llama 3.3 → Auditor) achieving a 0% hallucination rate.</li>
                <li>Engineered a Gamification Engine bridging a risk-scoring algorithm with PyTorch DQN.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Python</span>
                <span className="px-2.5 py-1 bg-cyan-950/30 text-cyan-400 rounded-md text-xs font-mono border border-cyan-800/50">AI/ML</span>
                <span className="px-2.5 py-1 bg-purple-950/30 text-purple-400 rounded-md text-xs font-mono border border-purple-800/50">Deep Learning</span>
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">PyTorch</span>
              </div>
            </div>

            {/* Project 4: Ikman Valuator */}
            <div className="group flex flex-col p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-950/50 text-indigo-400 mb-2">
                    <TerminalSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Ikman Valuator</h3>
                    <h4 className="text-indigo-400 font-mono text-sm mt-1">AI Market Analysis Agent</h4>
                  </div>
                </div>
                <a href="https://github.com/Geethaka09/ikmanAgent" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-relaxed list-disc list-inside grow">
                <li>Architected a multi-stage data processing pipeline (Dispatcher/Performer) mirroring REFramework queue patterns to scrape and analyze market data.</li>
                <li>Applied statistical filtering and Regex extraction to eliminate noise listings for precise fair-market value estimates.</li>
                <li>Delivered actionable insights through an interactive Streamlit dashboard.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Python</span>
                <span className="px-2.5 py-1 bg-cyan-950/30 text-cyan-400 rounded-md text-xs font-mono border border-cyan-800/50">AI/ML</span>
                <span className="px-2.5 py-1 bg-emerald-950/30 text-emerald-400 rounded-md text-xs font-mono border border-emerald-800/50">Web Scraping</span>
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Streamlit</span>
              </div>
            </div>

            {/* Project 5: WhatsApp Triage */}
            <div className="group flex flex-col p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-950/50 text-blue-400 mb-2">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">WhatsApp Support Triage</h3>
                    <h4 className="text-blue-400 font-mono text-sm mt-1">Intelligent Automation</h4>
                  </div>
                </div>
                <a href="https://github.com/Geethaka09/whatsapp-ai-agent" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-relaxed list-disc list-inside grow">
                <li>Built automated customer support utilizing LLM-based sentiment analysis to classify and route incoming data streams.</li>
                <li>Designed following RPA Dispatcher-Performer logic: segregating queuing, classifying, and routing into separate stages.</li>
                <li>Implemented intelligent differentiation between routine FAQs (auto-resolved) and urgent escalations using Python APIs.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Python</span>
                <span className="px-2.5 py-1 bg-cyan-950/30 text-cyan-400 rounded-md text-xs font-mono border border-cyan-800/50">AI/ML</span>
                <span className="px-2.5 py-1 bg-blue-950/30 text-blue-400 rounded-md text-xs font-mono border border-blue-800/50">GenAI / LLMs</span>
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">APIs</span>
              </div>
            </div>

            {/* Project 6: JobTrackerBot */}
            <div className="group flex flex-col p-8 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-950/50 text-cyan-400 mb-2">
                    <GitMerge className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">JobTrackerBot</h3>
                    <h4 className="text-cyan-400 font-mono text-sm mt-1">End-to-End RPA Pipeline</h4>
                  </div>
                </div>
                <a href="https://github.com/Geethaka09/JobTrackerBot" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <ul className="space-y-3 mb-6 text-slate-400 text-sm leading-relaxed list-disc list-inside grow">
                <li>Engineered an automated job application pipeline leveraging Python, UiPath, a modular architecture, and robust error handling.</li>
                <li>Developed web scraping workflows to extract job board data directly to structured Excel tracker formats.</li>
                <li>Implemented UI automation to auto-fill web forms and leveraged SMTP for daily reporting outputs.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                <span className="px-2.5 py-1 bg-blue-950/30 text-blue-400 rounded-md text-xs font-mono border border-blue-800/50">RPA</span>
                <span className="px-2.5 py-1 bg-emerald-950/30 text-emerald-400 rounded-md text-xs font-mono border border-emerald-800/50">Web Scraping</span>
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">UiPath</span>
                <span className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-md text-xs font-mono border border-slate-700/50">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Extracurricular */}
      <footer className="py-12 border-t border-slate-900 text-center text-slate-500 font-mono text-xs">
        <p className="mb-2">Extracurricular: IEEE RUSL Branch Volunteer (2023-2024) • ARICT Club Committee Member</p>
        <p>&copy; {new Date().getFullYear()} Geethaka Virajith. System online.</p>
      </footer>
    </main>
  );
}
