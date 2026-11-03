import React from "react";
import { Instagram, MessageCircle, ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function SocialMediaFooter() {
  return (
    <div className="border-b border-stone-800/80 pb-8 mb-8">
      {/* Header kicker and title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059] mb-0.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
            <span>Stay Connected • सोशल मीडियावर भेटा</span>
          </div>
          <h3 className="text-lg md:text-xl font-serif font-extrabold text-white tracking-wide">
            Connect With Annapurna Caterers
          </h3>
        </div>

        <div className="text-xs text-stone-400 font-sans flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#F27D26]" /> 24/7 Digital Inquiries
          </span>
          <span className="text-stone-600">|</span>
          <span className="text-emerald-400 font-medium">Nashik, MH 422003</span>
        </div>
      </div>

      {/* Social Buttons Grid - Website Standard Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Instagram Button */}
        <div className="w-full">
          <a
            href={BUSINESS_INFO.instagram_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Annapurna Caterers on Instagram @${BUSINESS_INFO.instagram_username}`}
            className="flex items-center justify-between w-full h-12 px-4 rounded-xl bg-gradient-to-r from-[#833ab4]/15 via-[#fd1d1d]/15 to-[#fcb045]/15 hover:from-[#833ab4]/25 hover:via-[#fd1d1d]/25 hover:to-[#fcb045]/25 border border-[#d62976]/35 hover:border-[#d62976]/80 text-white transition-all duration-200 group active:scale-[0.99] shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="flex items-baseline gap-2 min-w-0 truncate">
                <span className="text-sm font-bold text-white tracking-wide">Instagram</span>
                <span className="text-xs font-mono text-[#FACF91] truncate">@{BUSINESS_INFO.instagram_username}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-rose-300 font-medium group-hover:text-white transition-colors shrink-0">
              <span className="hidden xs:inline">Follow</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* WhatsApp Business Button */}
        <div className="w-full">
          <a
            href={BUSINESS_INFO.whatsapp_business_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp Business with Annapurna Caterers at ${BUSINESS_INFO.whatsapp_business_phone}`}
            className="flex items-center justify-between w-full h-12 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 hover:border-[#25D366]/80 text-white transition-all duration-200 group active:scale-[0.99] shadow-sm"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div className="flex items-baseline gap-2 min-w-0 truncate">
                <span className="text-sm font-bold text-white tracking-wide">WhatsApp Business</span>
                <span className="text-xs font-mono text-emerald-400 font-semibold truncate">{BUSINESS_INFO.whatsapp_business_phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium group-hover:text-white transition-colors shrink-0">
              <span className="hidden xs:inline">Chat</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

