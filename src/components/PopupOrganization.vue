<template>
    <Popup :isOpen="isOpen" :title="popupTitle" @close-popup="$emit('close-popup')" @popup-submit="addNewOrganization">
        <input class="popup__input" placeholder="Наиминование организации" v-model="name"/>
        <input class="popup__input" placeholder="Название проекта" v-model="project"/>
        <input class="popup__input" placeholder="Ответственный" v-model="responible"/>
    </Popup>
</template>

<script>
    import Popup from '@/components/Popup.vue'
    import {mapMutations} from 'vuex'
    export default {
        components: {
            Popup
        },
        props: ['isOpen', 'onClose', 'title'],
        data() {
            return {
                name: '',
                project: '',
                responible: '',
                popupTitle: 'Новая организация'
            }
        },
        methods: {
            ...mapMutations(['createNewOrganization']),
            addNewOrganization() {
                this.createNewOrganization({
                    name: this.name,
                    project: this.project,
                    responible: this.responible,
                    isChecked: false
                })
                this.name = this.project = this.responible = ''
                this.onClose()
            }
        }
    }
</script>

<style scoped>

</style>