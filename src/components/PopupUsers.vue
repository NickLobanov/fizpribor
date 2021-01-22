<template>
    <Popup :isOpen="isOpen" :title="popupTitle" @close-popup="$emit('close-popup')" @popup-submit="addNewUser">
        <input class="popup__input" placeholder="Имя" v-model="name"/>
        <input class="popup__input" placeholder="Фамилия" v-model="secondName"/>
        <input class="popup__input" placeholder="Отчество" v-model="patronymic"/>
        <input class="popup__input" placeholder="Логин" v-model="login"/>
        <input class="popup__input" type="email" placeholder="Email" v-model="email"/>
        <input class="popup__input" placeholder="Роль" v-model="role"/>
    </Popup>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Popup from '@/components/Popup.vue'
    export default {
        components: {
            Popup,
        },
        props: ['isOpen', 'onClose'],
        data() {
            return {
                name: '',
                secondName: '',
                patronymic: '',
                login: '',
                email: '',
                role: '',
                popupTitle: 'Новый пользователь'
            }
        },
        methods: {
            ...mapMutations(['createNewUser']),
            //Добавление нового пользователя
            addNewUser() {
                this.createNewUser({
                    name: this.name,
                    secondName: this.secondName,
                    patronymic: this.patronymic,
                    login: this.login,
                    email: this.email,
                    role: this.role,
                    isChecked: false
                })
                this.name = this.secondName = this.patronymic = this.login = this.email = this.role = ''
                this.onClose()
            }
        }
    }
</script>

<style scoped>

</style>