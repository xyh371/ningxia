<template>
    <div class="img">
       <div class="swiper-container">
           <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="(i,k) in image" :key="k">
                   <img :src="i.img" alt="" />
               </div>
           </div>
           <div class="swiper-pagination">
             <p>
             </p>
           </div>
       </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'WheelPlanting',
  data () {
    return {
      image: [{
        img: '/static/image/1.jpg'
      },
      {
        img: '/static/image/2.jpg'
      },
      {
        img: '/static/image/3.jpg'
      }]
    }
  },
  mounted () {
    // 不校验
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .img {
    width: 100%;
    height: 224px;
    background: red;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 100%;
          height: 100%;
          img {
              width: 100%;
              height: 100%;
          }
        }
      }
    }
  }
</style>
