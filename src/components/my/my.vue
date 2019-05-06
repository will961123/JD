<template>
<<<<<<< HEAD
    <Login/>
</template>

<script>
import Login from './components/login'
export default {
  components: {
    Login
=======
  <div class="my">
    <mHeader></mHeader>
    <foryou></foryou>
    <userInfo></userInfo>
  </div>
</template>

<script>
import mHeader from './components/mHeader'
import foryou from './components/foryou'
import userInfo from './components/userInfo'
export default {
  components: {
    mHeader,
    foryou,
    userInfo
>>>>>>> 47ae3d06f41ccfc6f7495ec1fe5de36a6087ac67
  }
}
</script>

<style lang="less" scoped>
.my{
  padding-bottom: 200px;
}
</style>
