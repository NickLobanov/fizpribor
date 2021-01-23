<template>
    <nav class="navbar">
        <h1 class="navbar__title">Администрирование</h1>
        <NavList @menu-click='menuClick' :currentItem="currentItem"/>
    </nav>
</template>

<script>
    import NavList from '@/components/NavList.vue'
    export default {
        props: ['currentItem'],
        components: {
           NavList, 
        },
        methods: {
            menuClick(event) {
                this.$emit('menu-click', event.target.id)
            }
        }
    }
</script>

<style scoped>
    .navbar {
        width: 348px;
        max-height: 999px;
        border-top: 1px solid #666666;
        background-color: #ffffff;
    }

    .navbar__title {
        text-align: left;
        font-size: 20px;
        line-height: 22px;
        color: #474747;
        margin-bottom: 13px;
        padding-left: 21px;
        padding-top: 22px
    }

    @media screen and (max-width: 1919px) {
        .navbar {
            width: 300px;
        }
    }

</style>