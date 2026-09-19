"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";

// بيانات خدمات مؤسسة السبيعي مع الصور المطلوبة والـ Slugs
const servicesList = [
  {
    title: "ساندوتش بانل",
    slug: "sandwich-panel",
    image: "/san.webp",
    desc: "عزل حراري ومائي فائق للمستودعات والمباني.",
  },
  {
    title: "مظلات",
    slug: "mazallat",
    image: "/mz.webp",
    desc: "تصاميم عصرية لمظلات السيارات والحدائق.",
  },
  {
    title: "سواتر",
    slug: "sawater",
    image: "/sw.webp",
    desc: "خصوصية تامة وحماية متينة للفلل والقصور.",
  },
  {
    title: "هناجر",
    slug: "hangar",
    image: "/hn.webp",
    desc: "إنشاء هناجر حديدية كبرى بأعلى معايير الأمان.",
  },
  {
    title: "بيوت شعر",
    slug: "bayot-shaar",
    image: "/by.webp",
    desc: "بيوت شعر ملكية وتراثية بتجهيزات داخلية فاخرة.",
  },
  {
    title: "شبك",
    slug: "shobok",
    image: "/sh.webp",
    desc: "شبوك أمنية وزراعية مقاومة للصدأ والتآكل.",
  },
  {
    title: "كلادنج",
    slug: "cladding",
    image: "/kl.webp",
    desc: "واجهات كلادنج عصرية ومقاومة للعوامل الجوية.",
  },
  {
    title: "مستودعات",
    slug: "warehouses-installation",
    image: "/mo.webp",
    desc: "حلول متكاملة لبناء وتجهيز المستودعات بالمملكة.",
  },
];

export default function ServicesGallerySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // نظام الحركة التلقائية (تغيير البطاقة النشطة كل 3.5 ثانية)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % servicesList.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative py-28 px-4 bg-black overflow-hidden border-t border-neutral-900" aria-label="معرض خدمات مؤسسة السبيعي التفاعلي">
      
      {/* توهج خلفي ناري فخم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 blur-[190px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* عنوان السكشن الرئيسي H2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-black uppercase tracking-widest inline-block shadow-md">
            <Sparkles className="w-3.5 h-3.5 inline-block ml-1 text-red-500" />
            استكشف خدماتنا الاحترافية
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
            معرض <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_30px_rgba(220,38,38,0.7)]">خدماتنا الهندسية</span> المتكاملة
          </h2>
          <p className="text-neutral-400 text-base">تتحرك الخدمات تلقائياً، أو ضع الماوس على أي خدمة لتثبيتها واستعراضها.</p>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
        </div>

        {/* حاوية الصور التفاعلية المتناسقة */}
        <div 
          className="flex flex-col lg:flex-row items-center justify-center gap-3 h-[520px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {servicesList.map((service, index) => {
            const isActive = activeIdx === index;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                onMouseEnter={() => setActiveIdx(index)}
                className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer border-2 ${
                  isActive
                    ? "w-full lg:w-[48%] h-[500px] border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.6)] z-20"
                    : "w-full lg:w-[6.5%] h-[80px] lg:h-[500px] border-neutral-800 hover:border-red-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.9)] z-10"
                } group flex flex-col justify-end`}
                title={`خدمة ${service.title} - مؤسسة السبيعي`}
              >
                {/* صورة الخدمة مع فلتر وزوم */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={service.image}
                    alt={`خدمة ${service.title} المقدمة من مؤسسة السبيعي في جدة والمملكة`}
                    title={`مؤسسة السبيعي - ${service.title}`}
                    fill
                    className="object-cover object-center filter brightness-[0.7] contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* تدرج لوني أسود وأحمر لإبراز النصوص */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* محتوى البطاقة النشطة (المكبرة) */}
                {isActive ? (
                  <div className="relative z-10 p-6 sm:p-8 animate-in fade-in duration-500 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-10 h-10 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                        0{index + 1}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/70 border border-red-500/50 text-red-400 text-xs font-bold backdrop-blur-md shadow-lg">
                        متاح الآن للتنفيذ
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white drop-shadow-md">
                      {service.title}
                    </h3>

                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 text-red-500 font-bold text-sm group-hover:text-red-400 pt-2">
                      <span>استعرض تفاصيل الخدمة</span>
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                ) : (
                  /* المحتوى للبطاقات غير النشطة (اسم الخدمة بشكل رأسي معتدل ومقروء تماماً) */
                  <div className="relative z-10 h-full flex flex-col items-center justify-between py-6">
                    {/* الرقم التسلسلي في الأعلى */}
                    <span className="w-8 h-8 rounded-lg bg-red-600/90 text-white font-bold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                      0{index + 1}
                    </span>

                    {/* اسم الخدمة مكتوب بشكل رأسي معتدل ومناسب للغة العربية */}
                    <div className="py-4" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                      <span className="text-white font-extrabold text-sm tracking-wider whitespace-nowrap drop-shadow-md group-hover:text-red-400 transition-colors">
                        {service.title}
                      </span>
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}