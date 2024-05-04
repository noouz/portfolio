<script>
import github from '@/images/github.svg';
import top from '@/images/left-top.png';
import Rbottom from '@/images/right-bottom.png';
import desktop from '@/images/desktop.png';
import { gsap } from "gsap";

export default{
  data() {
    return {
      github, top, Rbottom, desktop,
    }
  },
  mounted() {
    const tl = gsap.timeline({ delay: .8, paused:true });
    tl.from( this.$refs.contact, { x: '-180', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.email, { y: '-80', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.phone, { y: '-80', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.git, { y: '-80', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.play();
  },
}
</script>


<template>
  <main>
    <img :src="desktop" class="desktop cloud3">
    <img :src="top" class="top cloud">
    <img :src="Rbottom" class="Rbottom cloud2 delay-100">
    <div class="contact-container">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-STIX font-bold text-text-color tracking-wider" ref="contact">CONTACT</h1>
      <div class="info" ref="email">
        <div class="flex items-center">
          <i class='bx bxs-envelope'></i>
          <h2 class="text-normal-text font-bold font-NotoSerif text-2xl lg:text-3xl">電子信箱</h2>
        </div>
        <span class="font-STIX text-[1.3rem] sm:text-2xl md:text-3xl">qaz15996398@gmail.com</span>
      </div>
      <div class="info" ref="phone">
        <div class="flex items-center font-NotoSerif">
          <i class='bx bxs-phone'></i>
          <h2 class="text-normal-text font-bold font-NotoSerif text-2xl lg:text-3xl">手機</h2>
        </div>
        <span class="font-STIX text-[1.3rem] sm:text-2xl md:text-3xl">09-58369636</span>
      </div>
      <div class="tracking-wider text-3xl mt-8" ref="git">
        <div class="flex items-center font-NotoSerif mb-3">
          <img :src="github" alt="github" class="flex h-7 w-7">
          <h2 class="text-normal-text font-bold font-NotoSerif ml-3 pb-2 text-2xl sm:text-3xl">github</h2>
        </div>
        <a class="git" href="https://github.com/noouz">@noouz(Mit4)</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    @apply pt-[80px] pl-[30px] lg:pl-[120px] px-10 flex flex-col items-end relative xl:flex overflow-x-hidden h-screen overflow-y-hidden
  }
  .contact-container {
    @apply flex flex-col w-[95%] h-full overflow-hidden gap-y-5 pt-20 lg:pt-0 z-[5]
  }
  .info {
    @apply tracking-wider text-3xl gap-y-5 flex flex-col mt-8
  }
  i {
    @apply text-text-color mr-3 pt-[2px]
  }
  .git {
    @apply font-STIX text-text-color hover:opacity-90 text-[1.3rem] sm:text-2xl md:text-3xl
  }
  .top {
    transition: all 1s ease-in-out;
    @apply absolute top-[30px] sm:top-[-30px] lg:top-[-120px] right-[-80px] sm:right-[-120px] lg:right-[-80px] w-[50%] sm:w-[48%] lg:w-[38%] z-[3] max-w-[600px] opacity-0
  }
  .Rbottom {
    transform: scale(-1) rotate(-30deg);
    transition: all 1s ease-in-out;
    @apply absolute bottom-[-45px] md:bottom-[-65px] lg:bottom-[-80px] left-[-40px] xl:left-[-30px] w-[28%] z-[3] min-w-[320px] opacity-0
  }
  .desktop {
    @apply absolute h-[30%] sm:h-[35%] lg:h-[40%] xl:h-[50%] bottom-[110px] sm:bottom-[80px] lg:bottom-[40px] right-[10px] sm:right-[20px] lg:right-[40px] opacity-0
  }
  .cloud {
    animation: cloud 3s ease-in-out forwards;
    animation-delay: .5s;
  }
  .cloud2 {
    animation: cloud 3s ease-in-out forwards;
    animation-delay: .8s;
  }
  .cloud3 {
    animation: cloud 3s ease-in-out forwards;
    animation-delay: 1.2s;
  }
  @keyframes cloud {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
