import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageSquare, Globe, Share2, ArrowLeft } from "lucide-react";

// روابط الهيدر السريعة
const quickLinks = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "المقالات الهندسية", href: "/blog" },
  { name: "سياسة الخصوصية", href: "/privacy-policy" },
  { name: "اتصل بنا", href: "/contact" },
];

// خدمات مؤسسة السبيعي مع الـ Slugs
const footerServices = [
  { name: "ساندوتش بانل", slug: "sandwich-panel" },
  { name: "مظلات", slug: "mazallat" },
  { name: "سواتر", slug: "sawater" },
  { name: "هناجر", slug: "hangar" },
  { name: "بيوت شعر", slug: "bayot-shaar" },
  { name: "شبوك", slug: "shobok" },
  { name: "كلادنج", slug: "cladding" },
  { name: "تركيب مستودعات", slug: "warehouses-installation" },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-12 overflow-hidden">
      
      {/* توهج خلفي ناري خفيف للفوتر */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* القسم العلوي: اللوجو، الوصف، وأزرار التواصل الفخمة */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          
          {/* اللوجو والوصف */}
          <div className="space-y-4 max-w-md">
            <Link href="/" className="flex items-center gap-3 group" title="مؤسسة السبيعي للمقاولات">
              <div className="relative w-40 h-14 flex items-center">
                <Image
                  src="/logo.webp"
                  alt="شعار مؤسسة السبيعي للمقاولات"
                  fill
                  className="object-contain object-right filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]"
                />
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              الرواد في المقاولات الإنشائية الحديثة، الساندوتش بانل، الهناجر، والمستودعات في جدة وكافة مناطق المملكة بمعايير جودة عالمية وضمان معتمد.
            </p>
          </div>

          {/* أزرار التواصل (الإيميل الرسمي، الهاتف، وأيقونات التواصل) */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* الإيميل الرسمي للشركة */}
            <a
              href="mailto:info@alsubaie-est.com"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 text-neutral-300 hover:text-white transition-all shadow-md group"
              title="الإيميل الرسمي لمؤسسة السبيعي"
            >
              <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold font-mono">info@alsubaie-est.com</span>
            </a>

            {/* رقم الهاتف */}
            <a
              href="tel:0501459686"
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600/50 text-neutral-300 hover:text-white transition-all shadow-md group"
              title="اتصل بمؤسسة السبيعي"
            >
              <div className="w-8 h-8 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold font-mono" dir="ltr">0501 459 686</span>
            </a>

            {/* أيقونات التواصل */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/966501459686"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all shadow-md hover:bg-red-600/20"
                aria-label="تواصل عبر واتساب"
              >
                <MessageSquare className="w-5 h-5 text-red-500" />
              </a>

              <a
                href="https://alsubaie-est.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all shadow-md hover:bg-red-600/20"
                aria-label="موقعنا الرسمي"
              >
                <Globe className="w-5 h-5 text-red-500" />
              </a>

              <a
                href="https://alsubaie-est.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all shadow-md hover:bg-red-600/20"
                aria-label="مشاركة"
              >
                <Share2 className="w-5 h-5 text-red-500" />
              </a>
            </div>

          </div>

        </div>

        {/* القسم الأوسط: الروابط السريعة والخدمات */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* القائمة الأولى: الروابط السريعة */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-white tracking-wide border-r-4 border-red-600 pr-3">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-red-600/60 text-neutral-300 hover:text-white transition-all shadow-md flex items-center justify-between group"
                >
                  <span className="font-bold text-sm">{link.name}</span>
                  <ArrowLeft className="w-4 h-4 text-neutral-600 group-hover:text-red-500 group-hover:-translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* القائمة الثانية: الخدمات مع الـ Slugs */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-white tracking-wide border-r-4 border-red-600 pr-3">
              Our Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {footerServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="px-6 py-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-red-600/60 text-neutral-300 hover:text-white transition-all shadow-md flex items-center justify-between group"
                >
                  <span className="font-bold text-sm">{service.name}</span>
                  <ArrowLeft className="w-4 h-4 text-neutral-600 group-hover:text-red-500 group-hover:-translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* القسم السفلي: حقوق النشر وتصميم يونيك عمرو سالم */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-neutral-400 text-xs font-semibold gap-4">
          <p>© 2026 مؤسسة السبيعي للمقاولات. جميع الحقوق محفوظة.</p>
          
          <p className="flex items-center gap-1.5">
            <span>تصميم وتطوير:</span>
            <a 
              href="https://www.uniquee-ws.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 font-bold transition-colors underline decoration-red-500/50 underline-offset-4"
            >
              يونيك عمرو سالم
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}