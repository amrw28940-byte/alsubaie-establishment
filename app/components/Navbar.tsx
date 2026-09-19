"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowLeft, Menu, X, ChevronLeft } from "lucide-react";

// قائمة الخدمات والـ Slugs الخاصة بها للسيو والروابط الدقيقة
const servicesDropdown = [
  { name: "ساندوتش بانل", slug: "sandwich-panel" },
  { name: "مظلات", slug: "mazallat" },
  { name: "سواتر", slug: "sawater" },
  { name: "هناجر", slug: "hangar" },
  { name: "بيوت شعر", slug: "bayot-shaar" },
  { name: "شبوك", slug: "shobok" },
  { name: "كلادنج", slug: "cladding" },
  { name: "تركيب مستودعات", slug: "warehouses-installation" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-800" role="banner">
      
      {/* الحافة السفلية للـ هيدر: بروز وتوهج ناري أحمر قوي */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_25px_rgba(220,38,38,1)]"></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* تم ضبط ارتفاع الهيدر ليكون ثابت ومناسب لأخذ الأزرار الارتفاع بالكامل */}
        <div className="flex items-center justify-between h-20">
          
          {/* 1. اللوجو (مع تحسينات الـ SEO ووصف alt دقيق) */}
          <Link href="/" className="flex items-center gap-3 group px-2 sm:px-4" title="مؤسسة السبيعي للمقاولات - الصفحة الرئيسية">
            <div className="relative w-32 sm:w-36 h-12 flex items-center">
              <Image
                src="/logo.webp"
                alt="شعار مؤسسة السبيعي للمقاولات العامة والساندوتش بانل"
                fill
                className="object-contain object-right filter drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]"
                priority
              />
            </div>
          </Link>

          {/* 2. الأزرار الملتصقة بأخذ ارتفاع الهيدر بالكامل وبينهما خطوط فاصلة */}
          <div className="flex items-center h-full border-r border-neutral-800">
            
            {/* زر البحث (يأخذ ارتفاع الهيدر بالكامل) */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="h-full px-4 sm:px-6 bg-transparent hover:bg-neutral-900 text-neutral-300 hover:text-red-500 border-l border-neutral-800 flex items-center justify-center transition-all group"
              title="بحث في الموقع"
              aria-label="فتح نافذة البحث"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* زر اتصل بنا (يأخذ ارتفاع الهيدر بالكامل مع السهم) */}
            <Link
              href="/contact"
              className="h-full px-4 sm:px-8 bg-transparent hover:bg-red-600/10 text-white font-bold text-xs sm:text-sm border-l border-neutral-800 flex items-center gap-2 sm:gap-3 transition-all group"
              title="تواصل مع مؤسسة السبيعي"
            >
              <span className="group-hover:text-red-500 transition-colors">اتصل بنا</span>
              <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform hidden sm:inline-block" />
            </Link>

            {/* زر القائمة الموحد (الهمبرجر) يأخذ ارتفاع الهيدر بالكامل */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-full px-5 sm:px-7 bg-neutral-900/60 hover:bg-neutral-900 text-white border-l border-neutral-800 flex items-center justify-center transition-all group relative z-50 cursor-pointer"
              aria-label="فتح القائمة الرئيسية"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-red-500 rotate-90 transition-transform" />
              ) : (
                <Menu className="w-6 h-6 group-hover:text-red-500 transition-colors" />
              )}
            </button>

          </div>

        </div>
      </div>

      {/* نافذة البحث السريعة (تظهر عند الضغط على أيقونة البحث) */}
      {isSearchOpen && (
        <div className="bg-neutral-950 border-b border-neutral-900 px-4 py-4 animate-in fade-in duration-200">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث عن خدمة (ساندوتش بانل، هناجر، مظلات...)"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 text-sm"
                autoFocus
              />
            </div>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="px-4 py-3 rounded-xl bg-neutral-900 text-neutral-400 hover:text-white text-sm font-bold border border-neutral-800"
            >
              إلغاء
            </button>
          </div>
        </div>
      )}

      {/* القائمة الجانبية المنسدلة الكاملة عند الضغط على زر الهمبرجر */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-neutral-950/98 border-b border-neutral-800 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] px-6 py-10 animate-in slide-in-from-top-4 duration-300 z-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* روابط التنقل الأساسية */}
            <div className="space-y-4">
              <span className="text-xs text-red-500 font-extrabold uppercase tracking-widest block border-b border-neutral-900 pb-2">
                القائمة الرئيسية
              </span>
              <ul className="space-y-3 font-bold text-lg">
                <li>
                  <Link 
                    href="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-200 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    الصفحة الرئيسية
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-200 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-200 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                    المقالات الهندسية
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy-policy" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-200 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-200 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* قسم خدمات مؤسسة السبيعي (مع الـ Slugs) */}
            <div className="space-y-4">
              <span className="text-xs text-red-500 font-extrabold uppercase tracking-widest block border-b border-neutral-900 pb-2">
                خدماتنا الإنشائية
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {servicesDropdown.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-xl bg-neutral-900/40 hover:bg-red-600/10 border border-neutral-900 hover:border-red-600/50 text-sm text-neutral-300 hover:text-white transition-all flex items-center justify-between group"
                    title={`خدمة ${service.name} - مؤسسة السبيعي`}
                  >
                    <span>{service.name}</span>
                    <ChevronLeft className="w-4 h-4 text-neutral-600 group-hover:text-red-500 group-hover:-translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}