import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schema} from './sanity/schema';
export default defineConfig({name:'yul',title:'Yul Catalog',projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing',dataset:process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',plugins:[structureTool(),visionTool()],schema});
