<template>
    <Popup>
        <input class="popup__input" placeholder="Название группы"/>
        <input class="popup__input" placeholder="Название проекта"/>
        <input class="popup__input" placeholder="Участники"/>
    </Popup>
</template>

<script>
    import Popup from '@/components/Popup.vue'
    export default {
        components: {
            Popup
        }
    }
</script>

<style lang="scss" scoped>

</style>