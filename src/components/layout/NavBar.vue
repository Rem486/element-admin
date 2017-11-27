<template>
    <div class="nav-bar">
        <div>

        </div>
        <div class="nav-right">
            <span class="fs16">欢迎您，{{}}</span>
            <span class="logout">退出</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.nav-bar{
    height: 50px;
    line-height: 50px;
}

.nav-right{
    float: right;
}

.logout{

}
</style>
<script>
import userService from '@/services/http/user'

export default {
    name: 'NavBar',
    data () {
        return {userName: ''}
    },
    methods: {
        getUser () {

        },
        async logout () {
            let res = await userService.logout()
            console.log(res)
        }
    }
}
</script>
