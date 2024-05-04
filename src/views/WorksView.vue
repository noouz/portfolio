<script>
import Detail from '@/components/DetailView.vue';
import top from '@/images/right-bottom.png';
import { mapState } from 'pinia';
import { practices } from '@/stores/practices.js';
import { gsap } from "gsap";

export default{
  components: {
    Detail, 
  },
  data() {
    return {
      top,
      detailShow: 0,
      viewData: this.practicesData,
    }
  },
  computed:{
    ...mapState( practices, ['practicesData']),
    ...mapState( practices, ['projectData']),
  },
  methods: {
    profectPage() {
      this.viewData = this.projectData,
      this.detailShow = 1;
    },
    page(index) {
      this.viewData = this.practicesData[index],
      this.detailShow = 1;
    },
    handleBack(value) {
    this.detailShow = value; 
    }
  },
  created() {
    this.viewData = this.projectData;
  },
  mounted() {
    // const practiceList = document.querySelectorAll('.practice-item');
    const tl = gsap.timeline({ delay: .3, paused:true });
    tl.from( this.$refs.project, { x: '-180', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.projectItem, { y: '-40', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.practice, { x: '-180', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.practiceItem, { y: '-40', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    // practiceList.forEach( item => {
    //   tl.from( item, { y: '-40', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    // });
    tl.play();
  },
}
</script>

<template>
  <main v-if="detailShow === 0">
    <img :src="top" class="top cloud">
    <div class="works-container">
      <div class="project">
        <div class="title">
          <img src="" alt="">
          <h2 ref="project">&diam;PROJECT</h2>
        </div>
        <ul class="works-list">
          <li class="list-content" @click="profectPage()" ref="projectItem">
            <div class="pic bg-wu-img">
              <div class="view">查看</div>
            </div>
            <h3>五術研究社</h3>
          </li>
        </ul>
      </div>
      <div class="mt-10 mb-20">
        <div class="title">
          <img src="" alt="">
          <h2 ref="practice">&diam;PRACTICE</h2>
        </div>
        <ul class="works-list" ref="practiceItem">
          <li class="list-content practice-item" @click="page(practice.id - 1)" v-for="practice in practicesData" :key="practice.id">
            <div class="pic" :class="practice.pic">
              <div class="view">查看</div>
            </div>
            <h3>{{ practice.name }}</h3>
          </li>
        </ul>
      </div>
    </div>
  </main>
  <Detail @back="handleBack" :workData="viewData" v-else></Detail>
</template>

<style scoped>
  main {
    @apply pt-[80px] pl-[30px] lg:pl-[120px] px-10 flex flex-col items-end relative z-[2] overflow-x-hidden
  }
  .works-container {
    @apply flex flex-col w-[95%] h-full overflow-hidden gap-y-5 pt-20 lg:pt-0
  }
  .works-list{
    @apply flex w-full flex-wrap gap-x-[3%]
  }
  .list-content{
    @apply leading-[40px] relative mt-5 pl-5 cursor-pointer inline-block
  }
  .view {
    visibility: hidden;
    opacity: 0;
    transition: visibility .5s, opacity .5s ease-in-out;
    @apply absolute inset-0 bg-text-color/60 text-bg-white items-center justify-center text-2xl tracking-widest rounded flex
  }
  .list-content:hover {
    .view {
      visibility: visible;
      opacity: 1;
      @apply flex
    }
  }
  h2 {
    @apply text-4xl md:text-5xl font-STIX tracking-wider font-bold text-text-color
  }
  h3 {
    @apply text-xl md:text-2xl font-mono tracking-wider font-bold text-text-color mt-3
  }
  .pic {
    @apply w-[350px] h-[220px] sm:w-[300px] sm:h-[200px] bg-slate-400 rounded-md bg-center bg-no-repeat bg-cover relative
  }
  .top {
    transition: all 1s ease-in-out;
    @apply absolute top-[30px] sm:top-[-30px] lg:top-[-120px] right-[-80px] sm:right-[-120px] lg:right-[-80px] w-[50%] sm:w-[48%] lg:w-[38%] max-w-[600px] opacity-0
  }
  .cloud {
    animation: cloud 3s ease-in-out forwards;
    animation-delay: .5s;
  }
  @keyframes cloud {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.9;
    }
  }
</style>
