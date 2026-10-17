import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import flexiblePage from './sanity/schemas/flexiblePage';
import homeSeo from './sanity/schemas/homeSeo'; 

export default defineConfig({
  name: 'default',
  title: 'Alsubaie CMS',
  projectId: 'yod616zq',
  dataset: 'production',
  plugins: [
    structureTool({
      // تفعيل الهيكل الافتراضي لضمان ظهور أزرار النشر والمسودات بشكل سليمه
      structure: (S) =>
        S.list()
          .title('محتوى الموقع')
          .items([
            S.documentTypeListItem('flexiblePage').title('الصفحات المرنة'),
            S.documentTypeListItem('homeSeo').title('إعدادات وميتا السيو'),
          ]),
    }), 
    visionTool()
  ],
  schema: {
    types: [flexiblePage, homeSeo],
  },
});