import Link from "next/link";
import { ShieldCheck, Wrench, Clock, BadgePercent, Headphones, Compass, PhoneCall, ArrowLeft } from "lucide-react";

const features = [
  {
    icon: <Wrench className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />,
    titleTag: "أحدث تقنيات العزل والجودة العالمية",
    desc: "نعتمد في تنفيذ أعمالنا على ألياف ومواد ساندوتش بانل ذات العزل الحراري والمائي المعتمد، وواجهات كلادنج مقاوم للحريق، مع استخدام حديد مجلفن عالي المقاومة في تركيب الهناجر والمستودعات لضمان أقصى درجات الصلابة والاستدامة.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />,
    titleTag: "ضمان شامل على كافة أعمال التثبيت والتغطية",
    desc: "نمنح عملاءنا ثقة كاملة عبر تقديم ضمان معتمد ومكتوب يمتد حتى 10 سنوات على الهياكل الحديدية وألواح الساندوتش بانل، و3 سنوات على أقمشة المظلات والسواتر وخامات الشبوك، مما يضمن لك استثماراً آمناً وطويل الأمد.",
  },
  {
    icon: <Compass className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />,
    titleTag: "كشف مسبق ودراسة لموقع المشروع بدون تكلفة",
    desc: "نوفر خدمة المعاينة واستشارات الرفع المساحي مجاناً داخل جميع مناطق الخدمة، مع تقديم تصاميم هندسية ودراسات أحمال دقيقة لتركيب المستودعات ورفع واجهات الكلادنج وتجهيز بيوت الشعر بما يناسب المساحة والديكور المطلوبة.",
  },
  {
    icon: <Clock className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />,
    titleTag: "تسليم المشاريع وفق الخطة الزمنية المحددة",
    desc: "يضم فريقنا كوادر هندسية وفنيين متخصصين يلتزمون بتسليم مشروعات تغطية الهناجر وتثبيت السواتر والشبوك في الأوقات المحددة وبدقة عالية دون إهدار للوقت، مع توفير خيارات التنفيذ السريع للمشاريع الحساسة.",
  },
  {
    icon: <BadgePercent className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />,
    titleTag: "أسعار مناسبة ومنافسة لمختلف القطاعات",
    desc: "نقدم أفضل أسعار تركيب ساندوتش بانل والمظلات في السوق مع تقديم حلول متكاملة تدمج بين الجودة والتكلفة المناسبة، سواء للشركات أو المزارع أو الفلل السكنية والمرافق التجارية.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-colors" />,
    titleTag: "دعم فني وصيانة دورية بعد التسليم",
    desc: "لا ينتهي عملنا عند التسليم؛ بل نوفر خدمة عملاء متواجدة لتلبية طلبات الصيانة الدورية والمعاينة للـ مظلات والسواتر والشبوك والمستودعات، مع إمكانية التنفيذ المباشر في مختلف المناطق والمدن.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-28 px-4 bg-black overflow-hidden border-t border-neutral-900" aria-label="لماذا تختار مؤسسة السبيعي">
      
      {/* توهج ناري خلفي قوي جداً لزيادة العمق */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/15 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* عنوان السكشن H2 مع توهج ناري */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-black uppercase tracking-widest inline-block shadow-md">
            مميزاتنا الاستراتيجية
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
            لماذا تختارنا لخدمات <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_30px_rgba(220,38,38,0.7)]">الساندوتش بانل والمظلات</span> والإنشاءات المعدنية؟
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
        </div>

        {/* شبكة الكروت (بروز قوي، شادو عميق، وتفاعل ديناميكي) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-neutral-950 rounded-3xl p-8 border-2 border-neutral-900 hover:border-red-600 transition-all duration-500 flex flex-col justify-between shadow-[0_15px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_0_45px_rgba(220,38,38,0.35)] hover:-translate-y-2 overflow-hidden"
            >
              {/* تدرج أحمر خلفي خفيف يظهر عند الـ Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/0 via-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                {/* صندوق الأيقونة (يتحول لأبيض ساطع عند الـ Hover لتجنب تداخل الألوان) */}
                <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* عنوان H3 */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-red-400 transition-colors leading-snug">
                  {feature.titleTag}
                </h3>

                {/* النص الوصفي */}
                <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>

              {/* خط سفلي متوهج يظهر بقوة عند تمرير الماوس */}
              <div className="w-full h-1 bg-neutral-900 group-hover:bg-red-600 transition-colors mt-8 rounded-full shadow-[0_0_10px_rgba(220,38,38,0)] group-hover:shadow-[0_0_15px_rgba(220,38,38,1)]"></div>
            </div>
          ))}
        </div>

        {/* أزرار التواصل السريع (CTA) وزر المعاينة المجانية مع رقم الهاتف */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-lg transition-all duration-300 shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:shadow-[0_0_65px_rgba(220,38,38,0.9)] hover:-translate-y-1 flex items-center justify-center gap-3 border border-red-500/50 group"
            title="اطلب معاينة مجانية لمشروعك الآن"
          >
            <span>احصل على معاينة مجانية الآن</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:0501459686"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-black text-lg transition-all duration-300 border border-neutral-800 hover:border-red-600/50 backdrop-blur-md flex items-center justify-center gap-3 shadow-2xl group"
            title="اتصل مباشرة بمؤسسة السبيعي"
          >
            <PhoneCall className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform" />
            <span>اتصل بنا: 0501459686</span>
          </a>
        </div>

      </div>
    </section>
  );
}