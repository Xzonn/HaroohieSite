// Nuxt config file (https://v3.nuxtjs.org/api/configuration/nuxt.config)
export default defineNuxtConfig({
    // Modules
    buildModules: ['@nuxtjs/google-fonts'],
    modules: ['nuxt-icon', '@nuxt/content'],

    // Fonts
    googleFonts: {
        families: {
            'Nunito': [400, 700],
            'Notica Text': [700],
        }
    },

    // Pre render the sitemap
    nitro: {
        prerender: {
            routes: ['/sitemap.xml', '/404.html']
        }
    },

    // Disable rehydration static approach
    ssr: false,

    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true,
        highlight: {
            theme: 'github-light',
            preload: [
                'c',
                'cpp',
                'csharp',
                'asm',
                'python'
            ]
        }
    }
})
