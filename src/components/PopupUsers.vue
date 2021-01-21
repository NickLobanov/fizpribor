<template>
    <Popup>
        <input class="popup__input" :placeholder="popupUserName"/>
        <input class="popup__input" :placeholder="popupUserSecondName"/>
        <input class="popup__input" :placeholder="popupUserPatronymic"/>
        <input class="popup__input" :placeholder="popupUserLogin"/>
        <input class="popup__input" :placeholder="popupUserEmail"/>
        <input class="popup__input" :placeholder="popupUserRole"/>
    </Popup>
</template>

<script>
    import Popup from '@/components/Popup.vue'
    export default {
        components: {
            Popup,
        },
        props: ['popupUserName', 'popupUserSecondName', 'popupUserPatronymic', 'popupUserLogin', 'popupUserEmail', 'popupUserRole']
    }
</script>

<style scoped>

</style>