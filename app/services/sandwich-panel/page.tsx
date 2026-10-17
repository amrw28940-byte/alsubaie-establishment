'use client';

import React, { useState, useEffect } from 'react';

export default function SandwichPanelPage() {
  const whatsappNumber = "966501459686";
  const whatsappMessage = "السلام عليكم، أريد الاستفسار عن خدمة تركيب ساندوتش بانل";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // مصفوفة الصور الخاصة بالمعرض
  const galleryImages = [
    { src: "/sandwich_panel.jpg", title: "توريد ألواح عازلة" },
    { src: "/sandwich_panell.jpg", title: "تشطيبات غرف التبريد" },
    { src: "/sandwich_panelll.jpg", title: "مشاريع الهناجر الكبرى" },
    { src: "/sandwich_panellll.jpg", title: "تغطية المستودعات" },
    { src: "/sandwich_panelllll.jpg", title: "تركيب احترافي بدقة عالية" },
  ];

  // حالة الصورة النشطة الحالية في السلايدر التلقائي
  const [currentIndex, setCurrentIndex] = useState(0);

  // تشغيل السلايدر تلقائياً كل 3 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // حالة الأسئلة الشائعة المفتوحة
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "ما هي استخدامات ألواح الساندوتش بانل؟",
      a: "تُستخدم في تغطية الجدران والأسقف للمستودعات، الهناجر، غرف التبريد والتجميد، المصانع، والمباني الجاهزة نظراً لكفاءتها العالية في العزل الحراري والمائي."
    },
    {
      q: "هل تقدمون ضماناً على أعمال التركيب والعوازل؟",
      a: "نعم، نقدم ضماناً شاملاً ومعتمداً لعدة سنوات على أعمال التركيب والعوازل ضد التسربات وعيوب التركيب لراحة بالك التامة."
    },
    {
      q: "ما هي السماكات المتوفرة لألواح الساندوتش بانل؟",
      a: "توفر المؤسسة عدة سماكات مختلفة تبدأ من 5 سم وصولاً إلى 10 سم وأكثر، ويتم تحديد السماكة المناسبة حسب طبيعة المشروع واحتياجات العزل."
    },
    {
      q: "كم تستغرق مدة تنفيذ وتركيب المشروع؟",
      a: "تختلف المدة حسب مساحة المشروع وحجمه، ولكننا نتميز بالسرعة العالية في الإنجاز والتسليم في المواعيد المحددة دون إخلال بمعايير الجودة."
    },
    {
      q: "كيف يتم حساب التكلفة الإجمالية للمشروع؟",
      a: "يتم تحديد التكلفة بناءً على إجمالي المساحة بالمتر المربع، سمك ونوع مادة العزل (بولي يوريثان أو صوف صخري)، وطبيعة الهيكل المعدني المطلوب."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ================= السكشن الأول: الهيرو ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white text-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/sandwich_panel_hero_motion.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 py-20 flex flex-col items-center justify-center">
          <div className="max-w-3xl flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-500 uppercase bg-red-500/10 rounded-full border border-red-500/20 backdrop-blur-sm">
              مؤسسة السبيعي للمقاولات
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              توريد وتركيب <span className="text-red-600">ساندوتش بانل</span> بأعلى معايير الجودة
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              نقدم أفضل حلول العوازل، الهناجر، وغرف التبريد باستخدام ألواح الساندوتش بانل المقاومة للحرارة والعوامل الجوية مع ضمان شامل وتنفيذ سريع.
            </p>

            <div className="flex items-center justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 text-lg font-bold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن الثاني: المعرض المتحرك تلقائياً ================= */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 text-center mb-12">
          <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
            معرض الأعمال الاحترافي
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            لقطات حية من مشاريع تركيب <span className="text-red-600">الساندوتش بانل</span>
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto px-4 h-[400px] md:h-[500px] flex items-center justify-center">
          {galleryImages.map((img, index) => {
            const isCenter = index === currentIndex;
            const isLeft = index === (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            const isRight = index === (currentIndex + 1) % galleryImages.length;

            let transformStyle = "opacity-0 scale-75 pointer-events-none translate-x-0 z-0";
            if (isCenter) {
              transformStyle = "opacity-100 scale-100 z-30 translate-x-0 shadow-2xl border-2 border-red-600/60";
            } else if (isLeft) {
              transformStyle = "opacity-40 scale-90 z-10 -translate-x-[45%] md:-translate-x-[55%] blur-[1px]";
            } else if (isRight) {
              transformStyle = "opacity-40 scale-90 z-10 translate-x-[45%] md:translate-x-[55%] blur-[1px]";
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out rounded-3xl overflow-hidden bg-zinc-900 w-[280px] md:w-[600px] h-[320px] md:h-[420px] ${transformStyle}`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="px-3 py-1 bg-red-600 text-xs font-bold rounded-full mb-2 inline-block">
                      مشروع معتمد
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold text-white">{img.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-3 mt-8">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-red-600" : "w-3 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================= السكشن الثالث: مميزات الخدمة ولماذا تختارنا ================= */}
      <section className="py-24 bg-black text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              لماذا تختار مؤسسة السبيعي؟
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              مميزات خدمات <span className="text-red-600">الساندوتش بانل</span>
            </h2>
            <p className="text-gray-400 text-lg">
              نلتزم بمعايير الجودة العالمية في التوريد والتركيب لنضمن لك حماية كاملة وعمراً افتراضياً طويلاً لمشروعك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">01</div>
              <h3 className="text-xl font-bold mb-3">عوازل حرارية ومائية</h3>
              <p className="text-gray-400 leading-relaxed text-sm">ألواح مصممة خصيصاً لمقاومة درجات الحرارة العالية وأمطار المملكة بكفاءة هندسية عالية.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">02</div>
              <h3 className="text-xl font-bold mb-3">سرعة في التنفيذ</h3>
              <p className="text-gray-400 leading-relaxed text-sm">فريق فني محترف ومدرب على إنجاز وتسليم المشاريع في أسرع وقت وبأعلى معايير الدقة.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">03</div>
              <h3 className="text-xl font-bold mb-3">ضمان شامل معتمد</h3>
              <p className="text-gray-400 leading-relaxed text-sm">نقدم ضمانات معتمدة لعدة سنوات على أعمال التركيب والعوازل لراحة بالك التامة.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">04</div>
              <h3 className="text-xl font-bold mb-3">أسعار تنافسية</h3>
              <p className="text-gray-400 leading-relaxed text-sm">أفضل الأسعار التنافسية المناسبة لجميع المساحات للمستودعات، الهناجر، وغرف التبريد.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن الرابع: خطوات وسير العمل (8 خطوات) ================= */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              منهجية العمل والتركيب
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              خطوات تنفيذ مشروع <span className="text-red-600">الساندوتش بانل</span>
            </h2>
            <p className="text-gray-400 text-lg">
              نتبع خطوات هندسية مدروسة بدقة لضمان تنفيذ مشروعك بأعلى كفاءة وسرعة ممكنة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">01</span>
              <h3 className="text-lg font-bold mb-2 pt-4">الاستقبال والاستفسار</h3>
              <p className="text-gray-400 text-sm leading-relaxed">التواصل عبر الواتساب لتحديد متطلبات المشروع ونوع الخدمة المطلوبة بدقة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">02</span>
              <h3 className="text-lg font-bold mb-2 pt-4">معاينة الموقع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">زيارة ميدانية للموقع من قبل الفنيين لأخذ القياسات وتحديد المساحة الفعلية.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">03</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تحديد التصميم والمواصفات</h3>
              <p className="text-gray-400 text-sm leading-relaxed">اختيار سماكة الألواح العازلة (بولي يوريثان أو صوف صخري) والألوان المناسبة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">04</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تقديم عرض السعر</h3>
              <p className="text-gray-400 text-sm leading-relaxed">إعداد مقايسة دقيقة وشاملة للتوريد والتركيب بأسعار تنافسية ومدروسة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">05</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تجهيز وتوريد المواد</h3>
              <p className="text-gray-400 text-sm leading-relaxed">تجهيز ألواح الساندوتش بانل والهياكل المعدنية ونقلها للموقع بأمان تام.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">06</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تأسيس الهيكل المعدني</h3>
              <p className="text-gray-400 text-sm leading-relaxed">تركيب التيوبات والقوائم الحديدية بدقة هندسية عالية لضمان الثبات والمتانة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">07</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تركيب الألواح والعوازل</h3>
              <p className="text-gray-400 text-sm leading-relaxed">تثبيت ألواح الساندوتش بانل بإحكام مع تطبيق السيليكون والعوازل لمنع التسريب.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">08</span>
              <h3 className="text-lg font-bold mb-2 pt-4">التسليم والضمان</h3>
              <p className="text-gray-400 text-sm leading-relaxed">فحص العمل نهائياً وتسليمه للعميل مع تقديم شهادة الضمان المعتمدة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن الخامس: عوامل تحديد الأسعار ================= */}
      <section className="py-24 bg-black text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              شفافية التكلفة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              عوامل تحديد أسعار تركيب <span className="text-red-600">الساندوتش بانل</span>
            </h2>
            <p className="text-gray-400 text-lg">
              تختلف التكلفة الإجمالية للمشروع بناءً على عدة عوامل هندسية وميدانية يتم تحديدها بدقة بعد معاينة الموقع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-500">1. المساحة والأبعاد</h3>
              <p className="text-gray-400 leading-relaxed text-sm">إجمالي الأمتار المربعة المطلوبة للتغطية (أسقف والجدران)، حيث تتناسب التكلفة طردياً مع حجم المشروع.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-500">2. سمك الألواح العازلة</h3>
              <p className="text-gray-400 leading-relaxed text-sm">اختيار سمك العزل المناسب (5 سم، 7.5 سم، 10 سم أو أكثر) حسب طبيعة الاستخدام سواء مستودع أو غرفة تبريد.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-500">3. نوع مادة العزل</h3>
              <p className="text-gray-400 leading-relaxed text-sm">نوع الحشو الداخلي للألواح مثل بولي يوريثان (PUR/PIR) أو الصوف الصخري المقاوم للحريق.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-500">4. الهيكل المعدني الداعم</h3>
              <p className="text-gray-400 leading-relaxed text-sm">ما إذا كان المشروع يتطلب إنشاء هياكل حديدية وهناجر جديدة بالكامل أم التثبيت على هياكل قائمة مسبقاً.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-500">5. موقع وتضاريس الموقع</h3>
              <p className="text-gray-400 leading-relaxed text-sm">مكان تنفيذ المشروع في المدن أو المناطق المختلفة، ومتطلبات النقل واللوجستيات الخاصة بالموقع.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-red-500">6. التشطيبات والملحقات</h3>
                <p className="text-gray-400 leading-relaxed text-sm">إضافات مثل الأبواب المعزولة، الشبابيك، ومجاري الأمطار (الفلاشينغ والزوايا).</p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all"
                >
                  اطلب استشارة وسعر مشروعك
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن السادس: الأسئلة الشائعة (FAQ) ================= */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              استفساراتكم محط اهتمامنا
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              الأسئلة <span className="text-red-600">الشائعة</span>
            </h2>
            <p className="text-gray-400 text-lg">
              إليك إجابات شاملة على أبرز الأسئلة حول خدمة توريد وتركيب الساندوتش بانل.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black/80 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-right font-bold text-lg hover:text-red-500 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-red-600 text-2xl font-bold transition-transform duration-300">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-zinc-900/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= السكشن السابع: دعوة لاتخاذ إجراء قوي (Strong CTA) ================= */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-500 uppercase bg-red-500/10 rounded-full border border-red-500/20 backdrop-blur-sm">
            جاهزون لبدء مشروعك اليوم
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            ابدأ مشروعك الآن مع <span className="text-red-600">مؤسسة السبيعي</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا عبر الواتساب الآن واحصل على استشارة هندسية فورية وعرض سعر مخصص لمشروعك بأفضل الأسعار وأسرع تنفيذ.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 text-lg font-bold text-white bg-green-600 hover:bg-green-700 rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              تواصل عبر الواتساب الآن (0501459686)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}