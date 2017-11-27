<template>
    <el-menu class="side-bar"
             unique-opened
             background-color="#304156" text-color="#fff" active-text-color="#409EFF">
        <!--:collapse="true"-->

        <h3 class="title">后台管理系统</h3>
        <el-submenu index="1">
            <template slot="title">
                <!--<svg-icon></svg-icon>-->
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
    </el-menu>
</template>
<style lang="scss" scoped>
@import 'src/styles/variables.scss';

.side-bar{
    height: 100%;
    background: $menuBg;
    .title{
        font-size: 16px;
        color: #fff;
        padding-left: 20px;
        margin-top: 15px;
        margin-bottom: 10px;
    }
}

.el-submenu .el-menu-item{
    min-width: inherit;
}

</style>
<script>
import SvgIcon from '@/components/svgIcon/SvgIcon.vue'

export default {
    components: {SvgIcon},
    name: 'SideBar',
    data () {
        return {}
    },
    methods: {
        handleScroll (e) {
            console.log(e)
        }
    }
}
</script>
