<template>
  <div class="SelectComponent">

    <div>
      <h1 class="title-case">single</h1>
      <div class="center">
        <vs-select label="single" v-model="select1">
          <vs-select-item
            v-for="(item,index) in options1"
            :key="'single-select'+index"
            :vs-value="item.value"
            :vs-text="item.text"
          />
        </vs-select>
      </div>
    </div>

    <div>
      <h1 class="title-case">color</h1>
      <div class="center">
        <input v-model="colorx" type="color" name="ColorInput" value="">
        <vs-select label="color" v-model="select2" :vs-color="colorx">
          <vs-select-item
            v-for="(item,index) in options1"
            :key="'color-select'+index"
            :vs-value="item.value"
            :vs-text="item.text"
          />
        </vs-select>
      </div>
    </div>

    <div>
      <h1 class="title-case">autocomplete</h1>
      <div class="center">
        <vs-select label="autocomplete" v-model="select3"  vs-autocomplete>
          <vs-select-item
            v-for="(item,index) in options1"
            :key="'autocomplete-select'+index"
            :vs-value="item.value"
            :vs-text="item.text"
          />
        </vs-select>
      </div>
    </div>

    <div>
      <h1 class="title-case">multiple</h1>
      <div class="center">
        <vs-select label="multiple" v-model="select4" vs-multiple>
          <vs-select-item
            v-for="(item,index) in options1"
            :key="'multiple-select'+index"
            :vs-value="item.value"
            :vs-text="item.text"
          />
        </vs-select>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      select1: 3,
      select2: 2,
      select3: 0,
      select4: [],
      colorx: '#000000',
      options1: [
        {text: 'IT', value: 0},
        {text: 'Blade Runner', value: 2},
        {text: 'Thor Ragnarok', value: 3}
      ]
    }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
@import './style/common.scss';
</style>
