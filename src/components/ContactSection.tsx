import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/portfolioData';
import {
  Terminal,
  Mail,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Copy,
  Check,
  Send,
  FileText,
  MessageSquare
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const { language, t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 dark:bg-[#050505] border-b border-slate-300 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="font-mono text-xs text-orange-500 font-semibold tracking-widest flex items-center gap-2 uppercase">
            <Terminal className="w-4 h-4" />
            <span>./contact_engineer.sh</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {t({ en: "Let's Build Reliable Systems.", vi: "Cùng Triển Khai Hệ Thống Độ Tin Cậy Cao." })}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xs sm:text-sm font-mono">
            {t({
              en: "Whether you're interested in infrastructure, observability, automation, SRE or AI-assisted operations, feel free to connect.",
              vi: "Dù bạn đang tìm kiếm giải pháp hạ tầng, observability, tự động hóa, SRE hay AI Agent, hãy kết nối ngay."
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                {t({ en: "Contact Details", vi: "Thông Tin Liên Hệ" })}
              </h3>

              <div className="space-y-3">
                
                {/* Email Box */}
                <div className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-orange-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest">Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-orange-500 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-orange-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-orange-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest">Phone</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-orange-500 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-orange-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="font-mono text-[10px] text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-widest">Social Networks</div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500 transition-colors flex items-center gap-2 font-mono text-xs uppercase"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500 transition-colors flex items-center gap-2 font-mono text-xs uppercase"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:border-orange-500 transition-colors flex items-center gap-2 font-mono text-xs uppercase"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Resume CTA */}
              <div className="pt-4 border-t border-slate-300 dark:border-white/10">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t({ en: "Download Complete CV", vi: "Tải Hồ Sơ CV Đầy Đủ" })}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 bg-white dark:bg-[#080808] border border-slate-300 dark:border-white/10 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-2 pb-3 border-b border-slate-300 dark:border-white/10">
                <MessageSquare className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                  {t({ en: "Send Direct Message", vi: "Gửi Tin Nhắn Trực Tiếp" })}
                </h3>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-orange-600/10 border border-orange-600/30 text-center space-y-3">
                  <div className="w-10 h-10 bg-orange-600/20 text-orange-500 flex items-center justify-center mx-auto border border-orange-600/30">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-mono text-base font-bold text-orange-500 uppercase tracking-wider">
                    {t({ en: "Message Dispatched Successfully!", vi: "Đã Gửi Tin Nhắn Thành Công!" })}
                  </h4>
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                    {t({
                      en: "Thank you for connecting. I will review your inquiry and respond shortly.",
                      vi: "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại ngay sau khi nhận được thông tin."
                    })}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-600 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Recruiter / Engineering Manager"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-600 dark:text-slate-400 uppercase tracking-wider">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. contact@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-600 dark:text-slate-400 uppercase tracking-wider">Message / Opportunity</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your infrastructure needs, SRE opportunities, or technical inquiries..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full p-3 bg-slate-50 dark:bg-[#050505] border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t({ en: "Dispatch Message", vi: "Gửi Tin Nhắn" })}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
