<template>
    <Popup :isOpen="isOpen" @close-popup="$emit('close-popup')">
        <input class="popup__input" placeholder="Наиминование организации"/>
        <input class="popup__input" placeholder="Название проекта"/>
        <input class="popup__input" placeholder="Ответственный"/>
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

<style scoped>

</style>