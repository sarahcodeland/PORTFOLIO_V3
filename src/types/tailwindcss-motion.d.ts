declare module 'tailwindcss-motion' {
  import type { PluginCreator } from 'tailwindcss/types/config';

  // interface MotionPluginOptions {
  //   /**
  //    * Optional configuration for the motion plugin
  //    * Customize motion-related settings for Tailwind CSS
  //    */
  //   variants?: string[];
  //   prefix?: string;
  //   theme?: Record<string, unknown>;
  // }

  const plugin: PluginCreator;
  export default plugin;
}
