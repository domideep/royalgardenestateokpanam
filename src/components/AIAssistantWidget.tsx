import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Sparkles,
  Briefcase,
  Home,
  CheckCircle2,
  Calendar,
  Loader2,
  Minimize2,
  ExternalLink
} from 'lucide-react';
import { A1EliteLogo } from './A1EliteLogo';
import { COMPANY_INFO } from '../data/portfolioData';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
  isDealPrompt?: boolean;
}

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: `Welcome to **A1 Elite Service & Properties Limited**. I am your dedicated **Royal Garden Estate & Business Consultant**.\n\nHow may I assist you today?\n• Inquire about our **2-Bedroom (250 SQM)** & **4-Bedroom (450 SQM)** bungalows in Okpanam\n• Review payment plans, title documentation & infrastructure\n• **Reach out for a Joint Venture (JV), bulk diaspora acquisition, or corporate business deal**\n• Book a verified on-site inspection with CEO Onyema Chukwuma's civil team`,
      timestamp: new Date()
    }
  ]);
  const [dealFormOpen, setDealFormOpen] = useState(false);
  const [dealFormData, setDealFormData] = useState({
    name: '',
    company: '',
    phone: '',
    dealType: 'Joint Venture (JV) Partnership',
    proposalSummary: ''
  });
  const [dealSubmitted, setDealSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content
          })),
          userMessage: text
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'Thank you for reaching out. Please feel free to call our executive desk at +234 803 000 1234 or +234 812 345 6789.',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I am currently experiencing a connection hiccup. For urgent bungalow purchases, site inspections, or strategic business deals, please reach our direct developer line at **+234 803 000 1234** or **+234 812 345 6789**, or message us on WhatsApp. Our on-site management team is available Monday–Saturday.`,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDealSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dealFormData.name || !dealFormData.phone) return;

    setIsLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: dealFormData.name,
          phone: dealFormData.phone,
          company: dealFormData.company,
          dealType: dealFormData.dealType,
          message: dealFormData.proposalSummary,
          unitInterest: 'Business Deal / Partnership'
        })
      });

      setDealSubmitted(true);
      const confirmMsg: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Thank you, **${dealFormData.name}** (${dealFormData.company || 'Private Investor'}). Your **${dealFormData.dealType}** proposal has been officially routed to the executive desk of **CEO Onyema Chukwuma**.\n\nA senior investment liaison will contact you via **${dealFormData.phone}** within 24 business hours.\n\nYou can also speak with our managing director's office directly at **${COMPANY_INFO.contact.phone}** or **${COMPANY_INFO.contact.secondaryPhone}**.`,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, confirmMsg]);
      setDealFormOpen(false);
      setDealSubmitted(false);
      setDealFormData({
        name: '',
        company: '',
        phone: '',
        dealType: 'Joint Venture (JV) Partnership',
        proposalSummary: ''
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Assistant"
            className="group relative flex items-center gap-3 bg-gradient-to-r from-[#180509] via-[#2A0D14] to-[#180509] hover:from-[#2A0D14] hover:to-[#38101A] text-white p-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl border-2 border-[#D4AF37] hover:border-[#F5D061] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {/* Subtle glow effect */}
            <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/20 blur-sm group-hover:bg-[#D4AF37]/40 transition-all pointer-events-none" />

            {/* Official Logo Seal */}
            <A1EliteLogo size={36} />

            <div className="hidden sm:flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
                  A1 Elite AI Assistant
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 text-[9px] font-mono font-bold text-[#180509] bg-[#D4AF37] rounded-full">
                  <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                  ONLINE
                </span>
              </div>
              <span className="text-[10px] text-[#D8BAC0] font-sans">
                Customer Inquiries & Business Deals
              </span>
            </div>

            <div className="sm:hidden flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37] text-[#180509]">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
          </button>
        )}
      </div>

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] max-h-[88vh] h-[640px] bg-[#1E080D] text-white rounded-lg shadow-2xl border-2 border-[#D4AF37]/60 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#140306] via-[#24080F] to-[#140306] border-b border-[#D4AF37]/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <A1EliteLogo size={38} />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm tracking-tight text-white uppercase">
                    A1 Elite Assistant
                  </h3>
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 rounded-xs">
                    Official AI
                  </span>
                </div>
                <p className="text-[11px] text-[#D4AF37] font-mono">
                  Royal Garden Estate · Sales & Deals
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                className="p-1.5 text-[#C4A4AC] hover:text-white hover:bg-white/10 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Direct Hotline Strip */}
          <div className="px-4 py-2 bg-[#120306] border-b border-[#D4AF37]/20 flex items-center justify-between text-[11px] text-[#D8BAC0] font-mono shrink-0">
            <span className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              Brochure Hotline:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="hover:text-white hover:underline text-[#FFFFFF]"
              >
                {COMPANY_INFO.contact.phone}
              </a>
              <span className="text-white/30">|</span>
              <a
                href={`tel:${COMPANY_INFO.contact.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                className="hover:text-white hover:underline text-[#FFFFFF]"
              >
                {COMPANY_INFO.contact.secondaryPhone}
              </a>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#1A060B]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#9B111E] to-[#780D17] text-white border border-[#D4AF37]/40'
                      : 'bg-[#260A10] text-[#F3E8EA] border border-[#D4AF37]/30 shadow-md'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">
                    {msg.content.split('\n').map((line, i) => {
                      if (line.startsWith('• ') || line.startsWith('- ')) {
                        return (
                          <div key={i} className="flex items-start gap-1.5 my-1 ml-1 text-xs sm:text-[13px]">
                            <span className="text-[#D4AF37] font-bold">›</span>
                            <span>{formatMarkdown(line.substring(2))}</span>
                          </div>
                        );
                      }
                      return <p key={i} className={i > 0 ? 'mt-2' : ''}>{formatMarkdown(line)}</p>;
                    })}
                  </div>
                </div>
                <span className="text-[10px] text-[#A67C85] mt-1 font-mono px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 p-3 bg-[#260A10] text-[#D4AF37] rounded-lg border border-[#D4AF37]/30 w-fit text-xs font-mono">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#D4AF37]" />
                <span>Consulting A1 Elite Estate Desk...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="p-2.5 bg-[#140306] border-t border-[#D4AF37]/20 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            <button
              onClick={() => handleSend('Tell me about the 2 Bedroom Bungalow on 250 SQM land.')}
              className="px-2.5 py-1 bg-[#260A10] hover:bg-[#3B1019] text-[#D4AF37] text-[11px] font-mono border border-[#D4AF37]/30 rounded-full whitespace-nowrap transition-colors flex items-center gap-1"
            >
              <Home className="w-3 h-3" />
              2-Bed (250 SQM)
            </button>
            <button
              onClick={() => handleSend('Give me the details and floor plan of the 4 Bedroom Bungalow (450 SQM).')}
              className="px-2.5 py-1 bg-[#260A10] hover:bg-[#3B1019] text-[#D4AF37] text-[11px] font-mono border border-[#D4AF37]/30 rounded-full whitespace-nowrap transition-colors flex items-center gap-1"
            >
              <Home className="w-3 h-3" />
              4-Bed (450 SQM)
            </button>
            <button
              onClick={() => setDealFormOpen(true)}
              className="px-2.5 py-1 bg-[#9B111E] hover:bg-[#B31423] text-white text-[11px] font-mono font-bold border border-[#D4AF37] rounded-full whitespace-nowrap transition-colors flex items-center gap-1 shadow-sm"
            >
              <Briefcase className="w-3 h-3 text-[#D4AF37]" />
              Propose Business Deal / JV
            </button>
            <button
              onClick={() => handleSend('How do I book a site inspection to visit Royal Garden Estate Okpanam?')}
              className="px-2.5 py-1 bg-[#260A10] hover:bg-[#3B1019] text-[#D4AF37] text-[11px] font-mono border border-[#D4AF37]/30 rounded-full whitespace-nowrap transition-colors flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              Book Inspection
            </button>
          </div>

          {/* Deal Intake Form Modal (In-Assistant Overlay) */}
          {dealFormOpen && (
            <div className="p-4 bg-[#180509] border-t-2 border-[#D4AF37] shrink-0 animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] font-mono uppercase">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Executive Business Deal Intake</span>
                </div>
                <button
                  type="button"
                  onClick={() => setDealFormOpen(false)}
                  className="text-xs text-[#A67C85] hover:text-white"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleDealSubmit} className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={dealFormData.name}
                    onChange={(e) => setDealFormData({ ...dealFormData, name: e.target.value })}
                    className="p-2 bg-[#260A10] border border-[#D4AF37]/30 text-white rounded text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="text"
                    placeholder="Company / Org (Optional)"
                    value={dealFormData.company}
                    onChange={(e) => setDealFormData({ ...dealFormData, company: e.target.value })}
                    className="p-2 bg-[#260A10] border border-[#D4AF37]/30 text-white rounded text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={dealFormData.phone}
                    onChange={(e) => setDealFormData({ ...dealFormData, phone: e.target.value })}
                    className="p-2 bg-[#260A10] border border-[#D4AF37]/30 text-white rounded text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                  <select
                    value={dealFormData.dealType}
                    onChange={(e) => setDealFormData({ ...dealFormData, dealType: e.target.value })}
                    className="p-2 bg-[#260A10] border border-[#D4AF37]/30 text-white rounded text-xs focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Joint Venture (JV) Partnership">Joint Venture (JV) Partnership</option>
                    <option value="Bulk Diaspora Investment Syndicate">Bulk Diaspora Syndicate</option>
                    <option value="Land Banking / Bulk Acquisition">Land Banking / Acquisition</option>
                    <option value="Corporate / Institutional Allocation">Corporate Allocation</option>
                    <option value="Contractor / Vendor Proposal">Contractor / Vendor Proposal</option>
                  </select>
                </div>

                <textarea
                  rows={2}
                  placeholder="Brief proposal details or question for CEO Onyema Chukwuma..."
                  value={dealFormData.proposalSummary}
                  onChange={(e) => setDealFormData({ ...dealFormData, proposalSummary: e.target.value })}
                  className="w-full p-2 bg-[#260A10] border border-[#D4AF37]/30 text-white rounded text-xs focus:outline-none focus:border-[#D4AF37]"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 bg-gradient-to-r from-[#D4AF37] via-[#E5A91E] to-[#D4AF37] text-[#180509] font-bold text-xs uppercase tracking-wider rounded hover:brightness-105 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Submit Deal Directly to CEO's Office</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}

          {/* Input Bar */}
          {!dealFormOpen && (
            <div className="p-3 bg-[#140306] border-t border-[#D4AF37]/30 flex items-center gap-2 shrink-0">
              <input
                type="text"
                placeholder="Ask about bungalows, pricing, or pitch a deal..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                disabled={isLoading}
                className="flex-1 bg-[#24080E] border border-[#D4AF37]/30 text-white placeholder-[#8B646D] px-3 py-2 text-xs sm:text-sm rounded focus:outline-none focus:border-[#D4AF37]"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-gradient-to-r from-[#D4AF37] to-[#E5A91E] disabled:opacity-40 text-[#180509] rounded hover:brightness-105 transition-all font-bold"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

// Helper function to format basic bold text in responses
function formatMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="text-[#FFFFFF] font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
