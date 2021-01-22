<template>
    <Popup>
        <input class="popup__input" placeholder="Введите имя"/>
        <input class="popup__input" placeholder="Введите фамилию"/>
        <input class="popup__input" placeholder="Введите отчество"/>
        <input class="popup__input" placeholder="Введите логин"/>
        <input class="popup__input" placeholder="Введите email"/>
        <input class="popup__input" placeholder="Введите роль"/>
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