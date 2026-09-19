import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, ArrowLeft, PhoneCall } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-28 px-4 bg-black overflow-hidden border-t border-neutral-900" aria-label="من نحن - مؤسسة السبيعي">
      
      {/* تأثيرات التوهج الخلفي الناري العميق (Glow Effects) */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/15 blur-[170px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-800/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* بطاقة رئيسية بتصميم زجاجي بارز جداً مع شادو وتوهج قوي */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-neutral-950/90 border-2 border-neutral-800/80 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden">
          
          {/* القسم البصري والصورة (اليمين) مع إطار وتأثيرات سينمائية */}
          <div className="lg:col-span-6 relative min-h-[450px] lg:min-h-full bg-neutral-900 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-l border-neutral-800">
            
            {/* تأثير إضاءة علوية فوق الصورة */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-black/80 z-10 pointer-events-none"></div>

            {/* الصورة المطلوبة about.webp مع تحسينات الـ SEO ووصف alt دقيق */}
            <div className="relative w-full h-full min-h-[550px]">
              <Image
                src="/about.webp"
                alt="مؤسسة السبيعي للإنشاءات الحديثة والساندوتش بانل في جدة والمملكة"
                title="خبرة واسعة في الإنشاءات والهناجر - مؤسسة السبيعي"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 filter contrast-110"
              />
            </div>

            {/* شارة عائمة بارزة ومضيئة على الصورة */}
            <div className="absolute bottom-8 right-8 z-20 bg-neutral-950/90 backdrop-blur-xl border border-red-500/40 px-6 py-4 rounded-2xl shadow-[0_10px_35px_rgba(220,38,38,0.4)] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-red-400 font-bold block">سنوات من الريادة</span>
                <span className="text-sm text-white font-black">جودة هندسية معتمدة</span>
              </div>
            </div>

          </div>

          {/* القسم النصي (اليسار) */}
          <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* شارة علوية */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-black uppercase tracking-widest shadow-md">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>تعرف على مؤسسة السبيعي</span>
              </div>

              {/* العنوان الرئيسي H2 مع تدرج ناري */}
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.2] text-white">
                نحن وجهتك الأولى للإنشاءات الحديثة و <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_25px_rgba(220,38,38,0.7)]">أنظمة التظليل المتكاملة</span>
              </h2>

              {/* الفقرة الأولى التي طلبتها */}
              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                نحن مؤسسة سُعودية/محلية متخصصة في تقديم حلول الإنشاءات الحديثة وأنظمة التظليل المتكاملة. نملك خبرة واسعة تمتد لسنوات في تنفيذ وتوريد ألواح الساندوتش بانل المعتمدة، وبناء الهناجر وتركيب المستودعات للقطاعات الصناعية والتجارية وفق أعلى معايير السلامة والجودة الهندسيّة.
              </p>

              {/* الفقرة الثانية التي طلبتها */}
              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                تكمن قوتنا في تقديم قائمة خيارات متنوعة تشمل تركيب المظلات والسواتر، وتغطية الواجهات بأحدث خامات الكلادنج المقاوم للحريق، إلى جانب تميزنا في تنفيذ بيوت الشعر التراثية والملكية وتسوير المزارع والأراضي بـ الشبوك المجلفنة. نحن لا نكتفي بتقديم خدمة فقط، بل نقدم حلولاً هندسية متكاملة تبدأ من المعاينة المجانية والتصميم، وحتى التنفيذ والتسليم بالضمان المكتوب.
              </p>
            </div>

            {/* نقاط مميزة تؤكد الاحترافية */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-neutral-200 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>معاينة مجانية للموقع</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-200 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>ضمان معتمد ومكتوب</span>
              </div>
            </div>

            {/* أزرار التحويل المباشر (CTA) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-base transition-all duration-300 shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:shadow-[0_0_55px_rgba(220,38,38,0.9)] hover:-translate-y-1 flex items-center justify-center gap-3 border border-red-500/50 group"
                title="تواصل معنا لبدء مشروعك"
              >
                <span>تواصل معنا الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:0501459686"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-black text-base transition-all duration-300 border border-neutral-800 hover:border-red-600/50 backdrop-blur-md flex items-center justify-center gap-3 shadow-xl group"
                title="اتصل مباشرة بمؤسسة السبيعي"
              >
                <PhoneCall className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform" />
                <span>0501459686</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}