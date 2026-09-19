"use client";

import { Building2, Sparkles } from "lucide-react";

// قائمة الـ 20 شركة الوهمية للعرض والتجربة
const fakeClients = [
  { id: 1, name: "شركة الأفق للمقاولات الكبرى", sector: "إنشاءات ومقاولات" },
  { id: 2, name: "مجموعة درع الجزيرة الصناعية", sector: "صناعات معدنية" },
  { id: 3, name: "مصانع العمران للساندوتش بانل", sector: "مواد بناء" },
  { id: 4, name: "شركة الطرق السريعة للإنشاءات", sector: "بنية تحتية" },
  { id: 5, name: "مؤسسة الرواد للمستودعات الحديثة", sector: "تخزين ولجستيات" },
  { id: 6, name: "شركة النخبة للهندسة المعمارية", sector: "تصميم وهندسة" },
  { id: 7, name: "مجموعة المشرق للمقاولات الإنشائية", sector: "مقاولات عامة" },
  { id: 8, name: "شركة البناء الذكي للأسقف المعدنية", sector: "هياكل حديدية" },
  { id: 9, name: "مصانع الواجهات الحديثة للكلادنج", sector: "تشطيبات واجهات" },
  { id: 10, name: "شركة الخليج العربي للتجارة والمقاولات", sector: "تجارة ومقاولات" },
  { id: 11, name: "مؤسسة الأركان الثابتة للمظلات والسواتر", sector: "أنظمة تظليل" },
  { id: 12, name: "شركة الأساسات المتينة للمستودعات", sector: "إنشاء مستودعات" },
  { id: 13, name: "مجموعة التفوق الصناعية", sector: "قطاع صناعي" },
  { id: 14, name: "شركة الشبوك الوطنية المعتمدة", sector: "تسوير أراضي" },
  { id: 15, name: "مصانع العزل الحراري المتقدم", sector: "عزل وتكييف" },
  { id: 16, name: "شركة القمة للمقاولات والإنشاءات", sector: "مقاولات كبرى" },
  { id: 17, name: "مؤسسة الدروع الأمنية للمستودعات", sector: "خدمات لوجستية" },
  { id: 18, name: "شركة الإتقان الهندسية", sector: "استشارات هندسية" },
  { id: 19, name: "مجموعة الفرسان للمقاولات العامة", sector: "مقاولات وبناء" },
  { id: 20, name: "شركة السبيعي الكبرى للإنشاءات", sector: "إنشاءات معدنية" },
];

export default function ClientsSection() {
  return (
    <section className="relative py-28 bg-black overflow-hidden border-t border-neutral-900" aria-label="شركات تعاملنا معها - مؤسسة السبيعي">
      
      {/* توهج خلفي ناري عميق */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-red-600/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-12 mb-12">
        {/* عنوان السكشن H2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-black uppercase tracking-widest inline-block shadow-md">
            <Sparkles className="w-3.5 h-3.5 inline-block ml-1 text-red-500" />
            شركاء النجاح والثقة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
            شركات كبرى <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_30px_rgba(220,38,38,0.7)]">تشرفنا بخدمتهم</span> والتعاون معهم
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
        </div>
      </div>

      {/* شريط الشركات المتحرك */}
      <div className="relative w-full overflow-hidden py-4" dir="ltr">
        
        {/* تدرج جانبي لإخفاء حواف الشريط بشكل سينمائي */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        <div 
          className="flex gap-6 w-max hover:[animation-play-state:paused]"
          style={{ animation: "smoothMarquee 45s linear infinite" }}
        >
          {/* نكرر القائمة 4 مرات لتغطية الشاشات الكبيرة تماماً ومنع أي فراغ */}
          {[...fakeClients, ...fakeClients, ...fakeClients, ...fakeClients].map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              dir="rtl"
              className="w-72 bg-neutral-950/95 rounded-2xl p-6 border-2 border-neutral-900 hover:border-red-600 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:shadow-[0_0_35px_rgba(220,38,38,0.35)] flex flex-col justify-between group cursor-pointer flex-shrink-0"
            >
              <div className="flex items-center gap-4">
                {/* أيقونة الشركة مع توهج */}
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all shadow-md flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-base group-hover:text-red-400 transition-colors line-clamp-1">
                    {client.name}
                  </h3>
                  <span className="text-neutral-500 text-xs font-semibold block mt-1">
                    {client.sector}
                  </span>
                </div>
              </div>

              {/* خط سفلي مضيء يظهر عند الـ Hover */}
              <div className="w-full h-1 bg-neutral-900 group-hover:bg-red-600 transition-colors mt-6 rounded-full shadow-[0_0_10px_rgba(220,38,38,0)] group-hover:shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
            </div>
          ))}
        </div>

      </div>

      {/* الـ Keyframes المعدلة لضمان استمرارية الحركة بنسبة 25% لتوافق التكرار الأربعيني */}
      <style jsx>{`
        @keyframes smoothMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-25% - 1.5rem));
          }
        }
      `}</style>
    </section>
  );
}