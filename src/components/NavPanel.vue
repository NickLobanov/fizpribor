<template>
    <nav class="navbar">
        <h1 class="navbar__title">Администрирование</h1>
        <NavList />
    </nav>
</template>

<script>
    import NavList from '@/components/NavList.vue'
    export default {
        components: {
           NavList, 
        }
    }
</script>

<style scoped>
    .navbar__list {
        list-style: none;
        border-left: 1px solid black;
    }

</style>