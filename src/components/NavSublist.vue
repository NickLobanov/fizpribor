<template>
    <ul class="navbar-sublist">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar-sublist {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 16px;
        border-left: 1px solid #979797;
    }
</style>