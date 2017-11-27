<template>
    <div class="wrapper">
        <side-bar class="side-bar"></side-bar>
        <div class="main-container">
            <nav-bar></nav-bar>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrapper{
    height: 100%;
    min-width: 1280px;
}

.side-bar{
    width: 180px;
    float: left;
}

.main-container{
    width: calc(100% - 180px);
    float: left;
}
</style>
<script>
import SideBar from './SideBar.vue'
import NavBar from './NavBar.vue'

export default {
    name: 'Layout',
    data () {
        return {}
    },
    methods: {},
    components: {SideBar, NavBar}
}
</script>
