<template>
    <Popup :isOpen="isOpen" :title="popupTitle" @close-popup="$emit('close-popup')" @popup-submit="addNewGroup">
        <input class="popup__input" placeholder="Название группы" v-model="name"/>
        <input class="popup__input" placeholder="Название проекта" v-model="project"/>
        <input class="popup__input" placeholder="Участники" v-model="competitors"/>
    </Popup>
</template>

<script>
    import Popup from '@/components/Popup.vue'
    import {mapMutations} from 'vuex'
    export default {
        components: {
            Popup
        },
        props: ['isOpen', 'onClose'],
        data() {
            return {
                name: '',
                project: '',
                competitors: '',
                popupTitle: 'Новая группа'
            }
        },
        methods: {
            ...mapMutations(['createNewGroup']),
            addNewGroup() {
                this.createNewGroup({
                    name: this.name,
                    project: this.project,
                    competitors: this.competitors,
                    isChecked: false
                })
                this.name = this.project = this.competitors = ''
                this.onClose()
            }
        }
    }
</script>

<style scoped>

</style>