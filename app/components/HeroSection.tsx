import Link from "next/link";
import { Phone, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4">
      
      {/* 1. الفيديو يملأ الشاشة بالكامل ليصبح هو البرواز السينمائي الأساسي */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-110"
        >
          <source src="/alsubaie.mp4" type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
        
        {/* طبقات عزل تدريجية خفيفة لضمان تباين النصوص فوق الفيديو مباشرة بدون صناديق */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40"></div>
      </div>

      {/* 2. توهج أحمر سينمائي خلف النصوص */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/25 blur-[160px] rounded-full pointer-events-none z-0"></div>

      {/* 3. المحتوى حر وبارز مباشرة على الفيديو بدون صناديق خلفية */}
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 pt-10">
        
        {/* شارة علوية متوهجة */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/40 border border-red-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(220,38,38,0.3)] text-red-400 text-sm font-bold tracking-wide">
          <Sparkles className="w-4 h-4 text-red-500 animate-pulse" />
          <span>المقاولات الإنشائية والحلول الهندسية المتقدمة</span>
        </div>

        {/* العنوان الرئيسي ببروز قوي */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
          صرح من القوة والجودة في <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_35px_rgba(220,38,38,0.8)]">
            مؤسسة السبيعي
          </span>
        </h1>

        {/* الوصف */}
        <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
          نُنفذ أضخم مشاريع الساندوتش بانل، الهناجر، المظلات، السواتر، والكلادنج بأعلى معايير الابتكار الهندسي والمتانة.
        </p>

        {/* أزرار التفاعل (بدون ظهور الرقم، فقط "اتصل بنا") */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          
          {/* زر اتصل بنا المباشر مع التوهج الناري */}
          <a
            href="tel:0501459686"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-lg transition-all duration-300 shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:shadow-[0_0_55px_rgba(220,38,38,0.9)] hover:-translate-y-1 flex items-center justify-center gap-3 group border border-red-400/40"
          >
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span>اتصل بنا</span>
          </a>

          {/* زر استعراض المشاريع */}
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black/50 hover:bg-black/80 text-white border border-white/20 hover:border-red-500/50 font-bold text-lg transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-3 group shadow-xl"
          >
            <span>استكشف مشاريعنا</span>
            <ArrowLeft className="w-5 h-5 text-red-500 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* إحصائيات سفلية خفيفة */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-white/15">
          <div className="flex items-center justify-center gap-2 text-neutral-300 text-sm font-semibold drop-shadow">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <span>ضمان معتمد على كافة الأعمال</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-neutral-300 text-sm font-semibold drop-shadow">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)]"></span>
            <span>تنفيذ بأسرع وقت هندسي</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-neutral-300 text-sm font-semibold drop-shadow">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)]"></span>
            <span>استشارات وهندسة ميدانية</span>
          </div>
        </div>

      </div>
    </section>
  );
}