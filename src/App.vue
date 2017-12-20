<template>
    <div id="app">
        <topbar :class="{ 'hide': $route.path === '/' || $route.name ==='login' }"></topbar>
        <router-view></router-view>
    </div>
</template>

<script>
import topbar from './components/shared/topbar/topbar.vue'

export default {
    name: 'app',
    components: {
        topbar
    }
}
</script>

<style lang="scss">
    @import './scss/main';
</style>