<template>
    <Popup :isOpen="isOpen" @close-popup="$emit('close-popup')">
        <input class="popup__input" placeholder="Название роли"/>
        <input class="popup__input" placeholder="Название ключа"/>
        <input class="popup__input" placeholder="Функции"/>
    </Popup>
</template>

<script>
    import Popup from '@/components/Popup.vue'
    export default {
        components: {
           Popup 
        },
        props: ['isOpen']
    }
</script>

<style lang="scss" scoped>

</style>