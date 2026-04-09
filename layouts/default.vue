<template>
  <div>


    <AppTopbar />
    <AppNavbar />

    <slot />

    <AppFooter />

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  </div>
</template>
