<template>
    <ul class="navbar-sublist" :class="{navbar_close: !isOpen}">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        props: ['isOpen']
    }
</script>

<style scoped>
    .navbar-sublist {
        width: 258px;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 16px;
        border-left: 1px solid #979797;
    }

    .navbar_close {
        display: none;
    }

    @media screen and (max-width: 1919px) {
        .navbar-sublist {
            width: 230px;
        }
    }
</style>