export default {
  name: 'flexiblePage',
  title: 'Flexible Pages (الصفحات المرنة)',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'عنوان الصفحة (مثلاً: مظلات وسواتر الرياض)',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'رابط الصفحة (Slug)',
      type: 'slug',
      options: { 
        source: (doc: any) => doc.pageTitle || 'page', 
        maxLength: 96 
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'sections',
      title: 'أقسام الصفحة (Page Builder Sections)',
      type: 'array',
      of: [
        // 1. سكشن الهيرو (الرئيسي)
        {
          type: 'object',
          name: 'heroSection',
          title: 'Hero Section (الهيرو والعنوان الرئيسي)',
          fields: [
            {
              name: 'badge',
              title: 'الشارة العليا (مثلاً: الأفضل في المملكة)',
              type: 'string'
            },
            {
              name: 'title',
              title: 'العنوان الرئيسي',
              type: 'string'
            },
            {
              name: 'subtitle',
              title: 'الوصف أو العنوان الفرعي',
              type: 'array',
              of: [{ type: 'block' }]
            },
            {
              name: 'bgImage',
              title: 'صورة الخلفية',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'ctaText',
              title: 'نص زر الانتقال (CTA Text)',
              type: 'string'
            },
            {
              name: 'ctaUrl',
              title: 'رابط زر الانتقال',
              type: 'string'
            }
          ]
        },

        // 2. سكشن قسمين (صورة + نص)
        {
          type: 'object',
          name: 'splitSection',
          title: 'Split Section (قسم من جزأين: صورة + نص وزر)',
          fields: [
            {
              name: 'layoutDirection',
              title: 'اتجاه العرض',
              type: 'string',
              options: {
                list: [
                  { title: 'صورة يمين / نص يسار', value: 'imageRight' },
                  { title: 'صورة يسار / نص يمين', value: 'imageLeft' }
                ],
                layout: 'radio'
              },
              initialValue: 'imageRight'
            },
            {
              name: 'image',
              title: 'الصورة',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'title',
              title: 'العنوان',
              type: 'string'
            },
            {
              name: 'description',
              title: 'الوصف (يدعم التنسيق والتنقيط)',
              type: 'array',
              of: [{ type: 'block' }]
            },
            {
              name: 'ctaText',
              title: 'نص الزر',
              type: 'string'
            },
            {
              name: 'ctaUrl',
              title: 'رابط الزر',
              type: 'string'
            }
          ]
        },

        // 3. سكشن شبكة الكروت (الخدمات والأنواع مثل المظلات، السواتر، الساندويتش بانل)
        {
          type: 'object',
          name: 'gridCardsSection',
          title: 'Grid Cards Section (شبكة الكروت والخدمات)',
          fields: [
            {
              name: 'sectionTitle',
              title: 'عنوان السكشن (مثلاً: أنواع المظلات المتوفرة)',
              type: 'string'
            },
            {
              name: 'cards',
              title: 'الكروت أو الخدمات',
              type: 'array',
              of: [
                {
                  type: 'object',
                  title: 'كارت / خدمة',
                  fields: [
                    {
                      name: 'cardTitle',
                      title: 'عنوان الكارت (مثلاً: مظلات سيارات هيدروليك)',
                      type: 'string'
                    },
                    {
                      name: 'cardDesc',
                      title: 'وصف الكارت / نبذة مختصرة',
                      type: 'array',
                      of: [{ type: 'block' }]
                    },
                    {
                      name: 'cardImage',
                      title: 'صورة الكارت',
                      type: 'image',
                      options: { hotspot: true }
                    },
                    {
                      name: 'priceText',
                      title: 'نص السعر أو الضمان (مثل: ضمان 10 سنوات)',
                      type: 'string'
                    },
                    {
                      name: 'badgeText',
                      title: 'نص الشارة المميزة (مثل: الأكثر طلباً)',
                      type: 'string'
                    },
                    {
                      name: 'features',
                      title: 'مميزات الخدمة (نقاط سريعة)',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            {
                              name: 'featureText',
                              title: 'نص الميزة',
                              type: 'string'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'cardCtaText',
                      title: 'نص زر الكارت (مثلاً: اطلب الخدمة الآن)',
                      type: 'string'
                    },
                    {
                      name: 'cardCtaUrl',
                      title: 'رابط زر الكارت',
                      type: 'string'
                    },
                    {
                      name: 'showWhatsApp',
                      title: 'تفعيل زر الواتساب في هذا الكارت؟',
                      type: 'boolean',
                      initialValue: true
                    }
                  ]
                }
              ]
            }
          ]
        },

        // 4. سكشن نموذج الاستعلام أو طلب الاقتباس
        {
          type: 'object',
          name: 'bookingFormSection',
          title: 'Inquiry Form Section (نموذج طلب تسعير أو استعلام)',
          fields: [
            {
              name: 'formTitle',
              title: 'عنوان النموذج (مثلاً: احصل على عرض سعر مجاني)',
              type: 'string'
            }
          ]
        },

        // 5. سكشن الروابط الداخلية
        {
          type: 'object',
          name: 'internalLinksSection',
          title: 'Related Services / Internal Links (خدمات ذات صلة)',
          fields: [
            {
              name: 'sectionTitle',
              title: 'عنوان السكشن (مثلاً: تصفح خدماتنا الأخرى)',
              type: 'string'
            },
            {
              name: 'pages',
              title: 'اختر الصفحات المرتبطة',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'flexiblePage' }]
                }
              ]
            }
          ]
        }
      ]
    },
    // إعدادات محركات البحث SEO
    {
      name: 'seo',
      title: 'SEO Settings (إعدادات محركات البحث)',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'عنوان الصفحة لمحركات البحث (Meta Title)',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'وصف الصفحة لمحركات البحث (Meta Description)',
          type: 'text'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'pageTitle',
      subtitle: 'slug.current'
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      return {
        title: selection.title || 'صفحة بدون عنوان',
        subtitle: selection.subtitle ? `/${selection.subtitle}` : ''
      };
    }
  }
};