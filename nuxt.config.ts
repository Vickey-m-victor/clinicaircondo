// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: [
        'previgilantly-juiceless-latoya.ngrok-free.dev'
      ]
    }
  },
  app: {
    head: {
      title: 'Charitize - Charity Organization Website Template',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', href: '/img/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Open+Sans&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css' },
        { rel: 'stylesheet', href: '/lib/animate/animate.min.css' },
        { rel: 'stylesheet', href: '/lib/owlcarousel/assets/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.4.1.min.js', tagPosition: 'bodyClose' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', tagPosition: 'bodyClose' },
        { src: '/lib/wow/wow.min.js', tagPosition: 'bodyClose' },
        { src: '/lib/easing/easing.min.js', tagPosition: 'bodyClose' },
        { src: '/lib/waypoints/waypoints.min.js', tagPosition: 'bodyClose' },
        { src: '/lib/owlcarousel/owl.carousel.min.js', tagPosition: 'bodyClose' },
        { src: '/lib/counterup/counterup.min.js', tagPosition: 'bodyClose' },
        { src: '/js/main.js', tagPosition: 'bodyClose' }
      ]
    }
  }
})
