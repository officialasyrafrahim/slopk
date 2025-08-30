import { defineConfig } from '@lynx-js/rspeedy';

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss';

export default defineConfig({
  source: {
    entry: './src/index.jsx',
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=false`;
      },
    }),
    pluginReactLynx(),
    pluginTailwindCSS({
      config: './config/tailwind.config.js',
      include: /\.[jt]sx?/,
      exclude: ['./src/store/**', /[\\/]node_modules[\\/]/],
    }),
  ],
});
