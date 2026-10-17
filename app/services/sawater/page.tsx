'use client';

import React, { useState, useEffect } from 'react';

export default function SawaterPage() {
  const whatsappNumber = "966501459686";
  const whatsappMessage = "السلام عليكم، أريد الاستفسار عن خدمة تركيب السواتر في جدة";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // مصفوفة صور معرض السواتر
  const galleryImages = [
    { src: "/sawater.jpg", title: "سواتر حديد مودرن" },
    { src: "/sawatera.jpg", title: "سواتر قماش شرائح ومجدول" },
    { src: "/sawaterb.jpg", title: "سواتر لكسان شفافة وملونة" },
    { src: "/sawaterc.jpg", title: "سواتر شرائح بلاستيك خشبية" },
    { src: "/sawaterd.jpg", title: "سواتر حدود الفلل والقصور" },
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
      q: "ما هي أبرز أنواع السواتر المتوفرة لديكم في جدة؟",
      a: "نوفر سواتر حديد (شرائح ومجدول)، سواتر قماش (PVC وبولي إثيلين عالي الكثافة)، سواتر بلاستيكية خشبية، وسواتر لكسان للخصوصية التامة."
    },
    {
      q: "هل السواتر توفر خصوصية كاملة وتحجب الرؤية؟",
      a: "نعم، جميع تصاميم السواتر لدينا مصممة خصيصاً لتوفير أقصى درجات الخصوصية للمنازل والفلل والحدائق بنسبة حجب رؤية تصل إلى 100%."
    },
    {
      q: "هل تقدمون ضماناً على أعمال تركيب السواتر بجدة؟",
      a: "نعم، نقدم ضماناً معتمداً لعدة سنوات على ثبات الهيكل المعدني ومتانة المواد ضد الصدأ والتلف بفعل عوامل الجو."
    },
    {
      q: "كم تستغرق مدة تفصيل وتركيب السواتر؟",
      a: "تختلف المدة حسب مساحة وطول الساتر المطلوب، وغالباً ما يتم إنجاز العمل وتسليمه في أسرع وقت وبدقة هندسية عالية."
    },
    {
      q: "هل تشمل الخدمة زيارة الموقع ورفع القياسات في جدة؟",
      a: "نعم، نوفر فريقاً فنياً لمعاينة الموقع في أي حي بجدة وأخذ القياسات الدقيقة لضمان جودة التركيب."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ================= السكشن الأول: الهيرو لخدمة السواتر ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white text-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/sawater.mp4" type="video/mp4" />
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
              توريد وتركيب <span className="text-red-600">السواتر</span> بأعلى معايير الخصوصية في جدة
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              نقدم أحدث تصاميم السواتر الحديدية، القماشية، والخشبية لحماية الفلل والحدائق وتوفير الخصوصية التامة بأسعار تنافسية وضمان شامل.
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
            معرض أعمال السواتر
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            أحدث تركيبات <span className="text-red-600">السواتر</span> في جدة
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
              خصوصية وأمان تام
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              مميزات تركيب <span className="text-red-600">السواتر</span>
            </h2>
            <p className="text-gray-400 text-lg">
              نصمم سواترنا بمعايير هندسية تضمن حجب الرؤية تماماً مع مظهر جمالي راقٍ يتناسب مع منزلك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">01</div>
              <h3 className="text-xl font-bold mb-3">خصوصية بنسبة 100%</h3>
              <p className="text-gray-400 leading-relaxed text-sm">حجب كامل للرؤية الخارجية لضمان الراحة والاستقرار التام لعائلتك داخل الفيلا أو الحديقة.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">02</div>
              <h3 className="text-xl font-bold mb-3">مقاومة للرياح والصدأ</h3>
              <p className="text-gray-400 leading-relaxed text-sm">هياكل حديدية صلبة مطلية بدهانات حرارية مقاومة لرطوبة وعوامل مدينة جدة.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">03</div>
              <h3 className="text-xl font-bold mb-3">تنوع التصاميم والخامات</h3>
              <p className="text-gray-400 leading-relaxed text-sm">خيارات متعددة تشمل الحديد، القماش، والشرائح الخشبية لتلائم كافة الأذواق.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 text-2xl font-bold mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">04</div>
              <h3 className="text-xl font-bold mb-3">ألوان ثابتة وعصرية</h3>
              <p className="text-gray-400 leading-relaxed text-sm">ألوان متناسقة مع واجهات المنازل والفلل ولا تتأثر بأشعة الشمس الحارقة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن الرابع: خطوات العمل (8 خطوات) ================= */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              منهجية التنفيذ بجدة
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              خطوات تركيب <span className="text-red-600">السواتر</span>
            </h2>
            <p className="text-gray-400 text-lg">
              نتبع خطوات مدروسة لضمان تركيب ساتر متين وآمن وبأعلى مستوى من التشطيبات.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">01</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تلقي الطلب والاستفسار</h3>
              <p className="text-gray-400 text-sm leading-relaxed">التواصل عبر الواتساب لتحديد نوع الساتر والمساحة المبدئية المطلوبة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">02</span>
              <h3 className="text-lg font-bold mb-2 pt-4">الزيارة الميدانية بجدة</h3>
              <p className="text-gray-400 text-sm leading-relaxed">معاينة الموقع ورفع القياسات الدقيقة لتحديد ارتفاع وطول الساتر المناسب.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">03</span>
              <h3 className="text-lg font-bold mb-2 pt-4">اختيار التصميم والخامات</h3>
              <p className="text-gray-400 text-sm leading-relaxed">تحديد نوع الساتر (حديد، قماش، شرائح خشبية) والألوان المناسبة للواجهة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">04</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تقديم عرض السعر</h3>
              <p className="text-gray-400 text-sm leading-relaxed">اعتماد التكلفة الإجمالية ومقايسة العمل بشفافية تامة ومناسبة لميزانيتك.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">05</span>
              <h3 className="text-lg font-bold mb-2 pt-4">التفصيل والتجهيز بالمصنع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">قص وتجهيز الهياكل المعدنية والشرائح وفق القياسات الفنية المعتمدة.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">06</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تثبيت القوائم والركائز</h3>
              <p className="text-gray-400 text-sm leading-relaxed">نقل المواد للموقع وبدء أعمال التثبيت واللحام بأعلى معايير الأمان والاتزان.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">07</span>
              <h3 className="text-lg font-bold mb-2 pt-4">تركيب الألواح والشرائح</h3>
              <p className="text-gray-400 text-sm leading-relaxed">تركيب ألواح الساتر بإحكام تام لضمان حجب الرؤية وتحمل ضغط الرياح.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-6 rounded-2xl relative group hover:border-red-600/60 transition-all duration-300">
              <span className="text-4xl font-black text-red-600/30 absolute top-4 left-6 group-hover:text-red-600 transition-colors">08</span>
              <h3 className="text-lg font-bold mb-2 pt-4">التسليم والضمان</h3>
              <p className="text-gray-400 text-sm leading-relaxed">فحص العمل وتسليمه للعميل مع تقديم شهادة الضمان المعتمدة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= السكشن الخامس: لماذا نحن ================= */}
      <section className="py-24 bg-black text-white border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-3 block">
              رواد المقاولات في الغربية
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              لماذا تختار <span className="text-red-600">مؤسسة السبيعي</span> لتركيب سواترك؟
            </h2>
            <p className="text-gray-400 text-lg">
              نضمن لك أعلى جودة في الخامات والتركيب لنحقق لك الخصوصية والأمان الكامل.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <div className="text-red-500 text-3xl font-bold mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">خبرة واسعة بجدة</h3>
              <p className="text-gray-400 text-sm leading-relaxed">معرفة تامة بكافة متطلبات واشتراطات تركيب السواتر في أحياء جدة.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <div className="text-red-500 text-3xl font-bold mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">فريق فني محترف</h3>
              <p className="text-gray-400 text-sm leading-relaxed">فريق مدرب على أحدث أساليب التركيب واللحام لضمان متانة وثبات الساتر.</p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300">
              <div className="text-red-500 text-3xl font-bold mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">ضمان شامل معتمد</h3>
              <p className="text-gray-400 text-sm leading-relaxed">نقدم ضمانات حقيقية على خلو السواتر من أي عيوب تركيب أو تلف بمرور السنوات.</p>
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
              عوامل تحديد أسعار تركيب <span className="text-red-600">السواتر</span>
            </h2>
            <p className="text-gray-400 text-lg">
              تتحدد التكلفة الإجمالية للمشروع بناءً على معايير هندسية دقيقة يتم تحديدها بعد معاينة الموقع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">1. المساحة والارتفاع</h3>
              <p className="text-gray-400 text-sm leading-relaxed">إجمالي الأمتار الطولية وارتفاع الساتر المطلوب لحجب الرؤية.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">2. نوع خامة الساتر</h3>
              <p className="text-gray-400 text-sm leading-relaxed">اختيار سواتر حديدية، أقمشة PVC، أو شرائح بلاستيكية خشبية.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">3. سماكة الحديد والهيكل</h3>
              <p className="text-gray-400 text-sm leading-relaxed">سماكة التيوبات والـ مواسير المعدنية المستخدمة في تثبيت وقوام الساتر.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">4. التصميم والشكل الهندسي</h3>
              <p className="text-gray-400 text-sm leading-relaxed">سواتر شرائح أو مجدول أو تصاميم المودرن الخاصة بالواجهات.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3 text-red-500">5. موقع التركيب بجدة</h3>
              <p className="text-gray-400 text-sm leading-relaxed">موقع الفيلا أو الموقع واحتياجات النقل واللوجستيات الخاصة بالعمل.</p>
            </div>

            <div className="bg-black/60 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-red-500">6. التشطيبات والدهانات</h3>
                <p className="text-gray-400 text-sm leading-relaxed">جودة وأنواع الدهانات النارية والحرارية المقاومة للرطوبة.</p>
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
              الأسئلة <span className="text-red-600">الشائعة</span> عن السواتر
            </h2>
            <p className="text-gray-400 text-lg">
              إجابات وافية لأبرز الاستفسارات حول تركيب السواتر بجدة.
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
            نحن بانتظار اتصالك
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            احصل على أفضل ساتر في <span className="text-red-600">جدة</span> الآن
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا عبر الواتساب لتستفيد من العروض الحصرية وخدمة المعاينة الفورية بجدة.
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