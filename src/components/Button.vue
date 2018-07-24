<template>
  <div class="ButtonComponent">
    <div v-for="(itemVal, index) in vsType" :key="'div'+index">
      <h1 class="title-case">{{itemVal}}</h1>
      <div class="center">
        <vs-button
          v-for="(item, key) in filled"
          :key="'button-filled'+key"
          :vs-color="item.color"
          :disabled="item.disabled"
          :vs-type="itemVal"
        >
          {{item.title}}
        </vs-button>
      </div>
    </div>

    <div>
      <h1 class="title-case">Line Down</h1>
      <div class="center">
        <vs-button vs-type="line">Primary</vs-button>
        <vs-button vs-type="line" vs-color="success" vs-line-origin="left">Success</vs-button>
        <vs-button vs-type="line" vs-color="danger">Danger</vs-button>
        <vs-button vs-type="line" vs-color="warning" vs-line-origin="left" vs-line-position="top">Warning</vs-button>
        <vs-button vs-type="line" vs-color="dark" vs-line-origin="right" vs-line-position="top">Dark</vs-button>
        <vs-button vs-type="line" disabled>Disabled</vs-button>
      </div>
    </div>

    <div>
      <h1 class="title-case">Gradient</h1>
      <div class="center">
        <vs-button vs-type="gradient">primary</vs-button>
        <vs-button vs-type="gradient" vs-color="success">success</vs-button>
        <vs-button vs-type="gradient" vs-color="danger">danger</vs-button>
        <vs-button vs-type="gradient" vs-color="warning">warning</vs-button>
        <vs-button vs-type="gradient" vs-color="dark">dark</vs-button>
        <vs-button vs-type="gradient" vs-color="#3dd495" vs-gradient-color-secondary="rgb(130, 207, 23)">dark</vs-button>
        <vs-button vs-type="gradient" disabled>Disabled</vs-button>
      </div>
    </div>

    <div>
      <h1 class="title-case">Color</h1>
      <div class="center">
        <input type="color" v-model="colorx" name="" value="">
        <input type="color" v-model="colorx2" name="" value="">
        <vs-button :vs-color="colorx" vs-type="filled">Color</vs-button>
        <vs-button :vs-color="colorx" vs-type="border">Color</vs-button>
        <vs-button :vs-color="colorx" vs-type="flat">Color</vs-button>
        <vs-button :vs-color="colorx" vs-type="line">Color</vs-button>
        <vs-button :vs-color="colorx" :vs-gradient-color-secondary="colorx2" vs-type="gradient">Color</vs-button>
        <vs-button :vs-color="colorx"  vs-type="relief">Color</vs-button>
      </div>
    </div>

    <div>
      <h1 class="title-case">Icon</h1>
      <div class="center">
        <vs-button vs-type="border" vs-color="primary" vs-icon="home">Home</vs-button>
        <vs-button vs-type="filled" vs-color="warning" vs-icon="star">Star</vs-button>
        <vs-button vs-type="flat" vs-color="success" vs-icon="done">Done</vs-button>
        <vs-button vs-type="line" vs-color="dark" vs-icon="menu">menu</vs-button>
        <vs-button vs-type="gradient" vs-color="danger" vs-icon="favorite">favorite</vs-button>
        <vs-button disabled vs-color="primary" vs-type="border" vs-icon="home">Disabled</vs-button>
      </div>
    </div>

    <div>
      <h1 class="title-case">Icon only</h1>
      <div class="center">
        <vs-button vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
        <vs-button vs-color="warning" vs-type="filled" vs-icon="public"></vs-button>
        <vs-button vs-color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
        <vs-button vs-color="dark" vs-type="line" vs-icon="event_note"></vs-button>
        <vs-button vs-color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
        <vs-button disabled vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
        <br>
        <br>
        <vs-button style="border-radius: 50%" vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
        <vs-button style="border-radius: 50%" vs-color="warning" vs-type="filled" vs-icon="public"></vs-button>
        <vs-button style="border-radius: 50%" vs-color="success" vs-type="flat" vs-icon="photo_camera"></vs-button>
        <vs-button style="border-radius: 50%" vs-color="dark" vs-type="line" vs-icon="event_note"></vs-button>
        <vs-button style="border-radius: 50%" vs-color="danger" vs-type="gradient" vs-icon="person_add"></vs-button>
        <vs-button disabled style="border-radius: 50%" vs-color="primary" vs-type="border" vs-icon="search"></vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      colorx: '#000',
      colorx2: '#000',
      theme: ['primary', 'success', 'danger', 'warning', 'dark'],
      vsType: ['filled', 'border', 'flat', 'relief'],
      filled: [{
        title: 'Primary',
        color: 'primary'
      }, {
        title: 'Success',
        color: 'success'
      }, {
        title: 'Danger',
        color: 'danger'
      }, {
        title: 'Warning',
        color: 'warning'
      }, {
        title: 'Dark',
        color: 'dark'
      }, {
        title: 'RGB',
        color: 'rgb(134, 4, 98)'
      }, {
        title: 'Disabled',
        disabled: true
      }]
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
@import './style/common.scss';
</style>
