import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export default function MethodologySection() {
  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden border-t border-neutral-900" aria-label="نبذة عن مؤسسة السبيعي وخدماتها">
      
      {/* تأثيرات التوهج العميق (Glow Effects) */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-600/15 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-800/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* بطاقة رئيسية بتصميم زجاجي بارز مع شادو وتوهج قوي */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* القسم النصي (اليمين) */}
          <div className="lg:col-span-6 p-8 md:p-14 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* شارة علوية توضح نطاق العمل والمقر */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-bold tracking-wide shadow-md">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>المقر الرئيسي في جدة - نخدم جميع أنحاء المملكة</span>
              </div>

              {/* العنوان الرئيسي المعبر */}
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.2] text-white">
                حلول هندسية متكاملة بـ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_25px_rgba(220,38,38,0.6)]">معايير عالمية</span>
              </h2>

              {/* النص الوصفي الجديد الذي طلبته */}
              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                تقدم مؤسسة السبيعي حلولاً هندسية وتكاملية متطورة تلبي تطلعات القطاعات السكنية والصناعية والتجارية في جميع أنحاء المملكة. نختص في تركيب الساندوتش بانل (Sandwich Panel) ذو العزل الحراري والمائي الفائق لضمان أعلى مستويات الحماية والتوفير في الطاقة، إلى جانب تصميم وبناء الهناجر وتركيب المستودعات بأعلى معايير الأمن والسلامة للهياكل المعدنية.
              </p>

              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                كما نوفر تشكيلة واسعة من المظلات والسواتر بأحدث التصاميم المبتكرة لحماية السيارات والحدائق وتوفير الخصوصية التامة للمباني. ولمن يبحث عن الأصالة والتفرد، نبدع في تجهيز بيوت الشعر الملكية والتراثية بلمسات عصرية وتركيب الشبوك الأستراتيجية لتسوير الأراضي والمزارع. ولإضفاء طابع معماري حديث ومقاوم للظروف الجوية، نُنفّذ واجهات الكلادنج الفاخرة بأعلى مستويات الإتقان، مع إعطاء ضمان معتمد وعروض أسعار تنافسية.
              </p>
            </div>

            {/* مميزات سريعة تؤكد الجودة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
              <div className="flex items-center gap-3 text-neutral-300 text-sm font-semibold">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>ضمان معتمد على كافة الأعمال</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300 text-sm font-semibold">
                <div className="w-8 h-8 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 shadow-[0_0_10px_rgba(220,38,38,0.2)]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>عروض أسعار تنافسية</span>
              </div>
            </div>

            {/* زر التواصل المرتبط بصفحة اتصل بنا */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] hover:-translate-y-1 border border-red-500/50 group"
                title="تواصل مع مؤسسة السبيعي لبدء مشروعك"
              >
                <span>اتصل بنا لطلب الخدمة</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* القسم البصري والصورة (اليسار) */}
          <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-full bg-neutral-900 flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-r border-neutral-800">
            
            {/* تأثير إضاءة خلفية للصورة */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-red-600/10 z-10 pointer-events-none"></div>

            {/* الصورة المطلوبة Warehouses.webp مع تحسينات الـ SEO ووصف alt دقيق وعنوان */}
            <div className="relative w-full h-full min-h-[500px]">
              <Image
                src="/Warehouses.webp"
                alt="تنفيذ وتركيب مستودعات، هناجر، وساندوتش بانل بمؤسسة السبيعي في جدة والمملكة"
                title="مشاريع مستودعات وهناجر مؤسسة السبيعي"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 filter contrast-110"
              />
            </div>

            {/* شارة بارزة على الصورة تزيد العمق */}
            <div className="absolute bottom-6 right-6 z-20 bg-black/80 backdrop-blur-md border border-neutral-700 px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <span className="text-xs text-red-500 font-bold block">تغطية شاملة</span>
              <span className="text-sm text-white font-extrabold">جميع أنحاء المملكة</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}