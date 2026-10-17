'use client';

import React, { useState, useEffect } from 'react';

export default function ShobokPage() {
  const whatsappNumber = "966501459686";
  const whatsappMessage = "السلام عليكم، أريد الاستفسار عن خدمة توريد وتركيب الشبوك في جدة";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // مصفوفة صور معرض الشبوك
  const galleryImages = [
    { src: "/shobok.jpg", title: "شبوك مزارع وأراضي وكسور" },
    { src: "/shoboka.jpg", title: "شبوك أمنية لحماية المنشآت" },
    { src: "/shobokb.jpg", title: "تسور وتسبيح الأراضي الكبرى" },
    { src: "/shobokc.jpg", title: "شبوك حديد مجلفن مقاوم للصدأ" },
    { src: "/shobokd.webp", title: "تركيب شبوك الملاعب والحدائق" },
  ];

  // حالة الصورة النشطة في السلايدر التلقائي
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
      q: "ما هي أنواع الشبوك التي تقومون بتوريدها وتركيبها في جدة؟",
      a: "نوفر شبوك مزارع، شبوك أمنية للمنشآت والمشاريع، شبوك ملاعب رياضية، وشبوك تسوير الأراضي البيضاء والقصور."
    },
    {
      q: "هل الشبوك مجلفنة ومقاومة للصدأ والعوامل الجوية بجدة؟",
      a: "نعم، جميع الشبوك لدينا مصنعة من أجود أنواع الحديد المجلفن المقاوم للصدأ والتآكل بفعل الرطوبة وأجواء مدينة جدة."
    },
    {
      q: "هل تقدمون ضماناً معتمداً على تركيب الشبوك؟",
      a: "نعم، نقدم ضماناً شاملاً لعدة سنوات على متانة القوائم والأعمدة وصلابة الشبك ضد التلف."
    },
    {
      q: "كم تستغرق مدة إنجاز وتركيب الشبوك للأراضي أو المزارع؟",
      a: "تعتمد المدة على مساحة وطول السور أو الأرض، مع التزامنا التام بالسرعة العالية في التنفيذ والتسليم في الموعد."
    },
    {
      q: "هل تشمل الخدمة زيارة الموقع ورفع القياسات في جدة؟",
      a: "نعم، نقوم بزيارة ميدانية لأي أرض أو مشروع بجدة لأخذ القياسات بدقة وتحديد مستلزمات التركيب."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ================= السكشن الأول: الهيرو لخدمة الشبوك ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white text-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/shobok.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10" />
        </div>

        <div className="relative z-20 container mx-auto px-4 md:px-8 py-20 flex flex-col items-center justify-center">
          <div className="max-w-3xl flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-500 uppercase bg-red-500/10 rounded-full border border-red-500/20 backdrop-blur-sm">
              مؤسسة السبيعي للمقاولات بجدة
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              توريد وتركيب <span className="text-red-600">الشبوك</span> الزراعية والأمنية في جدة
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              نقدم أقوى حلول تسوير الأراضي، المزارع، والمشاريع الأمنية بأجود أنواع الشبوك المجلفنة المقاومة للعوامل الجوية مع ضمان شامل.
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
            معرض أعمال الشبوك
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            أحدث مشاريع تسوير الشبوك في <span className="text-red-600">جدة</span>
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
                      مؤسسة السبيعي بجدة
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

      {/* ================= السكشن الثالث: المميزات ================= */}
      <section className="py-24 bg-black text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              حماية تامة وتسوير آمن
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              مميزات تركيب <span className="text-red-600">الشبوك الأمنية والزراعية</span>
            </h2>
            <p className="text-gray-400 text-lg">
              نوفر شبوك متينة وعالية الصلابة لحماية ممتلكاتك ومنع التعديات بأسس هندسية ثابتة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">01</div>
              <h3 className="text-xl font-bold mb-3">حديد مجلفن مقاوم للصدأ</h3>
              <p className="text-gray-400 leading-relaxed text-sm">أسلاك وشبوك مجلفنة بالكامل بطبقات حماية تمنع الصدأ وتتحمل رطوبة جدة.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">02</div>
              <h3 className="text-xl font-bold mb-3">متانة وصلابة عالية</h3>
              <p className="text-gray-400 leading-relaxed text-sm">أعمدة وقوائم حديدية مثبتة بصبات خرسانية قوية لتحمل الصدمات والضغط.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">03</div>
              <h3 className="text-xl font-bold mb-3">تغطية شاملة للأسوار</h3>
              <p className="text-gray-400 leading-relaxed text-sm">مناسبة لتسوير المزارع، الأراضي الكبيرة، المشاريع الحكومية، والملاعب.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">04</div>
              <h3 className="text-xl font-bold mb-3">سرعة التنفيذ والتسليم</h3>
              <p className="text-gray-400 leading-relaxed text-sm">فرق ميدانية مجهزة بالكامل لتركيب المساحات الشاسعة في أقصر وقت ممكن.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن الرابع: خطوات العمل (8 خطوات) ================= */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              منهجية التركيب والتسوير
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              خطوات توريد وتركيب <span className="text-red-600">الشبوك</span>
            </h2>
            <p className="text-gray-400 text-lg">
              نتبع خطوات هندسية مدروسة لضمان استقامة وقوة السور على طول حدود الأرض أو المشروع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">01</span>
              <h3 className="text-lg font-bold mb-2 pt-4">الاستقبال والاستفسار</h3>
              <p className="text-gray-400 text-sm leading-relaxed">التواصل عبر الواتساب لتحديد مساحة الأرض ونوع الشبك المطلوب (زراعي أو أمني).</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">02</span>
              <h3 className="text-lg font-bold mb-2 pt-4">معاينة الأرض والموقع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">زيارة ميدانية للأرض بجدة لتحديد الحدود وأخذ القياسات الإجمالية.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">03</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تحديد المواصفات والارتفاع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">اختيار ارتفاع السور، سماكة الشبك المجلفن، وقطر الأعمدة المعدنية.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">04</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تقديم عرض السعر</h3>
              <p className="text-gray-400 text-sm leading-relaxed">إعداد مقايسة دقيقة وشاملة لتوريد وتركيب الشبوك بأفضل الأسعار التنافسية.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">05</span>
              <h3 className="text-lg font-bold mb-2 pt-4">حفر القواعد والأساسات</h3>
              <p className="text-gray-400 text-sm leading-relaxed">حفر الجور على امتداد الحدود لتثبيت الأعمدة بمسافات هندسية مدروسة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">06</span>
              <h3 className="text-lg font-bold mb-2 pt-4">صب الخرسانة وتثبيت الأعمدة</h3>
              <p className="text-gray-400 text-sm leading-relaxed">وزن وتركيب الأعمدة الحديدية وصب الخرسانة المسلحة حولها لضمان الثبات التام.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">07</span>
              <h3 className="text-lg font-bold mb-2 pt-4">شد وتركيب الشبك المعدني</h3>
              <p className="text-gray-400 text-sm leading-relaxed">شد الشبك المجلفن بإحكام على طول القوائم مع ربطه ودعمه بالشكل المطلوب.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">08</span>
              <h3 className="text-lg font-bold mb-2 pt-4">التسليم والضمان المعتمد</h3>
              <p className="text-gray-400 text-sm leading-relaxed">فحص السور كاملاً وتسليمه للعميل مع تقديم شهادة الضمان المعتمدة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن الخامس: لماذا نحن ================= */}
      <section className="py-24 bg-black text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              الخبرة والاحترافية
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              لماذا تختار <span className="text-red-600">مؤسسة السبيعي</span> لشبوك مشروعك؟
            </h2>
            <p className="text-gray-400 text-lg">
              نضمن لك تسويراً آمناً ودقيقاً يحمي ممتلكاتك لأطول فترة زمنية ممكنة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <div className="text-red-500 text-3xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">خامات مطابقة للمواصفات</h3>
              <p className="text-gray-400 text-sm leading-relaxed">نستخدم أجود أنواع الأسلاك والشبوك المجلفنة التي تتحمل أقسى الظروف المناخية.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <div className="text-red-500 text-3xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">فريق ميداني سريع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">طاقم عمل متكامل لإنجاز تسوير المساحات الكبيرة والمزارع في أسرع وقت.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <div className="text-red-500 text-3xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">أسعار تنافسية وضمان</h3>
              <p className="text-gray-400 text-sm leading-relaxed">أفضل سعر للمتر الطولي بالسوق مع ضمان حقيقي على جودة وقوة التركيب.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن السادس: عوامل تحديد الأسعار ================= */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              شفافية التكلفة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              عوامل تحديد أسعار توريد وتركيب <span className="text-red-600">الشبوك</span>
            </h2>
            <p className="text-gray-400 text-lg">
              تتحدد التكلفة الإجمالية بناءً على الأمتار الطولية والمواصفات الفنية المطلوبة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">1. الأمتار الطولية والارتفاع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">إجمالي محيط الأرض المراد تسويره وارتفاع السور المطلوب.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">2. نوع وسماكة الشبك</h3>
              <p className="text-gray-400 text-sm leading-relaxed">اختيار الشبوك المجلفنة العادية أو الشبوك المغلفة بمادة البلاستيك (PVC).</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">3. قطر وسماكة الأعمدة</h3>
              <p className="text-gray-400 text-sm leading-relaxed">مواصفات وسماكة المواسير والأعمدة المعدنية الحاملة للشبك.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">4. حجم الأساسات الخرسانية</h3>
              <p className="text-gray-400 text-sm leading-relaxed">كمية الصبة الخرسانية وقواعد التثبيت الأرضية للأعمدة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">5. موقع الأرض بجدة</h3>
              <p className="text-gray-400 text-sm leading-relaxed">مكان الأرض وتضاريسها ومتطلبات نقل ونزول المعدات إليه.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-red-500">6. البوابات والإضافات</h3>
                <p className="text-gray-400 text-sm leading-relaxed">تفصيل بوابات دخول للمزارع أو الأراضي وأسلاك شائكة علوية إضافية.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all"
                >
                  استشرنا لتحديد السعر الدقيق
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن السابع: الأسئلة الشائعة (FAQ) ================= */}
      <section className="py-24 bg-black text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              كل ما ترغب بمعرفته
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              الأسئلة <span className="text-red-600">الشائعة</span> عن الشبوك
            </h2>
            <p className="text-gray-400 text-lg">
              إجابات وافية لأبرز الاستفسارات حول توريد وتركيب الشبوك بجدة.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300"
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
                  <div className="px-6 pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-zinc-800 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= السكشن الثامن: دعوة لاتخاذ إجراء قوي (Strong CTA) ================= */}
      <section className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-red-500 uppercase bg-red-500/10 rounded-full border border-red-500/20 backdrop-blur-sm">
            احمِ أرضك وممتلكاتك
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            ابدأ تسوير أرضك أو مزرعتك في <span className="text-red-600">جدة</span> الآن
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا عبر الواتساب لتستفيد من خدمة المعاينة الفورية وعرض السعر المخصص لمساحة أرضك.
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