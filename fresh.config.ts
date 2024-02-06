import { defineConfig } from '$fresh/server.ts';
import tailwind from '$fresh/plugins/tailwind.ts';
import { islandsConfig as atomicIslandsConfig } from '@fathym/atomic';
import { PluginIslands } from '$fresh/server.ts';

export default defineConfig({
  plugins: [
    tailwind(),
    {
      name: 'atomic_islands',
      islands: atomicIslandsConfig().map((i) => i as PluginIslands),
    },
  ],
});
