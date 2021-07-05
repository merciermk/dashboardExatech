<template>
  <div>
    <!--NavBar top-->
    <nav-bar-top></nav-bar-top>

    <!-- Side navigation -->
    <side-bar-left></side-bar-left>

    <!-- Page content -->
    <router-view></router-view>

  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import NavBarTop from '@/components/NavBarTop'
import SideBarLeft from '@/components/SideBarLeft.vue'

@Component({
  computed: {

  },
  components: {
    'nav-bar-top': NavBarTop,
    'side-bar-left': SideBarLeft
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
.col-w-etat {
  width: 3rem;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}
.cursor-pointer {
  cursor: pointer;
}
div.content {
  margin-left: 60px;
  // margin-right: 60px;
  padding: 1px 16px;
}
div.content_intervenant {
  padding: 1px 16px;
  background-color: #FCFDFF;
  height: 100vh;
}
div.espace-haut{
  margin-top: 6rem;
}
.max-width-card {
  max-width: 50rem;
}

// X-Small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  div.content {
    margin-left: 0px;
    margin-right: 0px;
    padding: 1px 16px;
  }
  div.content_intervenant {
    padding: 1px 16px;
    background-color: #FCFDFF;
    height: 100vh;
  }
  div.espace-haut{
    margin-top: 5rem;
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {}

// X-Large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) {}

// XX-Large devices (larger desktops)
// No media query since the xxl breakpoint has no upper bound on its width
</style>
