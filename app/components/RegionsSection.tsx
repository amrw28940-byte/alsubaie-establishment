import Link from "next/link";
import { MapPin, ArrowLeft, Sparkles, Building2 } from "lucide-react";

const regionsData = [
  {
    name: "منطقة الرياض",
    slug: "riyadh",
    title: "مؤسسة مقاولات وهياكل معدنية بالرياض",
    desc: "تركيب هناجر، ساندوتش بانل، مظلات وسواتر بأعلى معايير الجودة بالعاصمة.",
  },
  {
    name: "منطقة مكة المكرمة",
    slug: "makkah",
    title: "حدادة ومظلات وساندوتش بانل بمكة",
    desc: "خدمات شاملة لتجهيز المستودعات، الكلادنج، وبيوت الشعر في مكة وجدة.",
  },
  {
    name: "منطقة المدينة المنورة",
    slug: "madinah",
    title: "مقاول هناجر ومستودعات بالمدينة المنورة",
    desc: "توريد وتركيب الهياكل المعدنية، الشبوك الأمنية، والمظلات بطابة المنورة.",
  },
  {
    name: "منطقة القصيم",
    slug: "qassim",
    title: "متخصص ساندوتش بانل ومظلات بالقصيم",
    desc: "حلول العزل الحراري، بناء الهناجر، وتشييد المستودعات ببريدة وعنيزة.",
  },
  {
    name: "المنطقة الشرقية",
    slug: "eastern-province",
    title: "شركة إنشاءات معدنية وكلادنج بالشرقية",
    desc: "تنفيذ أضخم مشاريع الهناجر، والسواتر في الدمام، الخبر، والجبيل.",
  },
  {
    name: "منطقة عسير",
    slug: "asir",
    title: "مقاول مظلات وسواتر وبيوت شعر بعسير",
    desc: "توريد وتركيب المظلات الحديثة، بيوت الشعر، وتسوير الأراضي بأبها.",
  },
  {
    name: "منطقة تبوك",
    slug: "tabuk",
    title: "تركيب هناجر ومستودعات بتبوك",
    desc: "تصميم وتنفيذ الهياكل المعدنية، الكلادنج، وشبوك المزارع بأعلى جودة.",
  },
  {
    name: "منطقة حائل",
    slug: "hail",
    title: "مؤسسة مقاولات وتظليل بحائل",
    desc: "أعمال الساندوتش بانل، المظلات، السواتر، وبيوت الشعر بمعايير معتمدة.",
  },
  {
    name: "منطقة الحدود الشمالية",
    slug: "northern-borders",
    title: "مقاول هناجر وساندوتش بانل بالحدود الشمالية",
    desc: "تغطية المستودعات، تركيب الشبوك، وهياكل الكلادنج في عرعر ورفحاء.",
  },
  {
    name: "منطقة جازان",
    slug: "jazan",
    title: "مظلات وسواتر وهياكل معدنية بجازان",
    desc: "حلول التظليل المتكاملة، بيوت الشعر، وواجهات الكلادنج المقاومة للرطوبة.",
  },
  {
    name: "منطقة نجران",
    slug: "najran",
    title: "مقاولات عامة وتركيب مستودعات بنجران",
    desc: "بناء الهناجر المعدنية، الساندوتش بانل، وشبوك الحماية بأعلى متانة.",
  },
  {
    name: "منطقة الباحة",
    slug: "al-bahah",
    title: "توريد وتركيب مظلات وسواتر بالباحة",
    desc: "تصميم وتنفيد المظلات، السواتر، وبيوت الشعر التراثية والملكية.",
  },
];

export default function RegionsSection() {
  return (
    <section className="relative py-28 px-4 bg-black overflow-hidden border-t border-neutral-900" aria-label="مناطق خدمة مؤسسة السبيعي في المملكة">
      
      {/* توهج خلفي ناري عميق */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-red-600/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* عنوان السكشن الرئيسي H2 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-black uppercase tracking-widest inline-block shadow-md">
            <Sparkles className="w-3.5 h-3.5 inline-block ml-1 text-red-500" />
            تغطية شاملة لكافة مناطق المملكة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2] text-white">
            خدماتنا الهندسية في <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_0_30px_rgba(220,38,38,0.7)]">جميع مناطق السعودية</span>
          </h2>
          <p className="text-neutral-400 text-base">نصلك أينما كنت، انقر على أي منطقة لاستعراض تفاصيل الخدمات والمدن التابعة لها.</p>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
        </div>

        {/* شبكة الكروت (12 كارت للمحافظات والمناطق بتصميم بارز وشادو وتوهج) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionsData.map((region) => (
            <Link
              key={region.slug}
              href={`/regions/${region.slug}`}
              className="group relative bg-neutral-950 rounded-3xl p-8 border-2 border-neutral-900 hover:border-red-600 transition-all duration-500 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.9)] hover:shadow-[0_0_40px_rgba(220,38,38,0.35)] hover:-translate-y-2 overflow-hidden"
              title={`${region.title} - مؤسسة السبيعي`}
            >
              {/* تدرج أحمر خفي عند الـ Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/0 via-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="space-y-5 relative z-10">
                
                {/* رأس البطاقة (أيقونة الموقع واسم المنطقة) */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold text-neutral-300 group-hover:text-red-400 transition-colors">
                    {region.name}
                  </span>
                </div>

                {/* عنوان H3 (مستهدف للسيو لكل محافظة) */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-red-400 transition-colors leading-snug">
                  {region.title}
                </h3>

                {/* الوصف القصير */}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {region.desc}
                </p>

              </div>

              {/* تذييل البطاقة وزر الانتقال */}
              <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between relative z-10">
                <span className="text-xs text-neutral-500 font-semibold group-hover:text-white transition-colors flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-red-500" />
                  <span>تغطية مدن ومحافظات المنطقة</span>
                </span>
                <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}