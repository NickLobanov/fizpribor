<template>
    <Popup :isOpen="isOpen" @close-popup="$emit('close-popup')" @popup-submit="addNewRole">
        <input class="popup__input" placeholder="Название роли" v-model="name"/>
        <input class="popup__input" placeholder="Название ключа" v-model="keyName"/>
        <input class="popup__input" placeholder="Функции" v-model="functions"/>
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
                keyName: '',
                functions: '',
            }
        },
        methods: {
            ...mapMutations(['createNewRole']),
            addNewRole() {
                this.createNewRole({
                    name: this.name,
                    keyName: this.keyName,
                    functions: [this.functions],
                    isChecked: false
                })
                this.name = this.keyName = this.functions = ''
                this.onClose()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>