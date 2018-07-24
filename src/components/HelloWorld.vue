<template>
  <div class="hello">
    <!-- Buttons -->
    <div class="con-colors">
      <ul>
        <li v-for="(item, index) in colorList" :key="index" :class="item">{{ item }}</li>
      </ul>
    </div>

    <div class="center">
      <vs-button v-for="(item, index) in colorList" :key="'vsbutton' + index" :vs-color="item" vs-type="border">{{item}}</vs-button>
    </div>

    <vs-row v-for="(item, key) in [1, 2, 3, 4, 6, 12]" :key="'vsrow' + key">
      <vs-col v-for="(col,index) in item" :key="'vscol' + index" v-tooltip="'col - '+item" vs-type="flex" vs-justify="center" vs-align="center" :vs-w="12/item">
        {{ (1 / item * 100).toFixed(2) + '%' }}
      </vs-col>
    </vs-row>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      colorList: ['primary', 'success', 'danger', 'warning', 'dark'],
      colorLoading: '#7d0c3f',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.initData()
  },
  computed: {
    ...mapState(['userName', 'age'])
  },
  methods: {
    ...mapMutations(['GET_USERINFO']),
    ...mapActions(['getUserInfo']),
    async initData () {
      this.getUserInfo()
    },
    openLading () {
      this.$vs.loading({ color: this.colorLoading })
      setTimeout(() => {
        this.$vs.loading.close()
      }, 2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
@import './style/common.scss';
</style>
