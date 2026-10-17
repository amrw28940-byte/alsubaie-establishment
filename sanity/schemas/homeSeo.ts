export default {
  name: 'homeSeo',
  title: 'Home SEO Settings (إعدادات وميتا الصفحة الرئيسية)',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'عنوان محركات البحث (Meta Title)',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'وصف محركات البحث (Meta Description - حتى 160 حرف)',
      type: 'text',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'إعدادات سيو الصفحة الرئيسية'
      }
    }
  }
};