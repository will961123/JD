<template>
  <div class="Outsports">
    <ul v-for="(item, index) in outsports" :key="index">
      <li>
        <title>{{item.title}}</title>
        <ul>
          <li v-for="(item, index) in outsports" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.span}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { getOutsports } from '@/api'
export default {
  data () {
    return {
      outsports: null
    }
  },
  async created () {
    this.outsports = await getOutsports()
  }
}
</script>
<style scoped>

</style>
