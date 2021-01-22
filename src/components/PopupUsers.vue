<template>
    <Popup>
        <input class="popup__input" placeholder="Имя"/>
        <input class="popup__input" placeholder="Фамилия"/>
        <input class="popup__input" placeholder="Отчество"/>
        <input class="popup__input" placeholder="Логин"/>
        <input class="popup__input" placeholder="Email"/>
        <input class="popup__input" placeholder="Роль"/>
    </Popup>
</template>

<script>
    import Popup from '@/components/Popup.vue'
    export default {
        components: {
            Popup,
        },
    }
</script>

<style scoped>

</style>