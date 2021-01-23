<template>
    <section class="section">
        <AccessMenuHeader :title="title"
            :buttonText="buttonText"
            :addButtonText="addButtonText"
            :deleteButtonText="deleteButtonText"
            @add-button-click="addButtonClick"
            @handle-delete="deleteOrganization"
            :amountState="this.getOrganizations.length"
        />
        <div class="section__container">
            <div class="section__column">
                <input type="checkbox" id="select-all" :checked="allChecked" class="section__checkbox" @click="checkAllOrganization"/>
                <label for="select-all"></label>
                <p class="section__title section__title_name">Наименование органиазции</p>
                <p class="section__title section__title_projects">Проекты</p>
                <p class="section__title section__title_responible">Ответсвенный</p>
            </div>
            <div class="section__users" v-for="(organization, id) in getOrganizations" :key="organization.name">
                <input type="checkbox" :id="id" :checked="organization.isChecked" class="section__checkbox" @click="checkOrganization"/>
                <label :for="id"></label>
                <p class="section__text section__title_name">{{organization.name}}</p>
                <p class="section__text section__title_projects">{{organization.project}}</p>
                <p class="section__text section__title_responible">{{organization.responible}}</p>
                <button class="section__button">Настройка</button>
            </div>
        </div>
    </section>
</template>

<script>
    import AccessMenuHeader from '@/components/AccessMenuHeader.vue'
    import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                title: 'ОРГАНИЗАЦИИ',
                buttonText: 'Новая организация',
                addButtonText: 'Добавить в проект',
                deleteButtonText: 'Удалить из проекта',
                allChecked: false
            }
        },
        components: {
            AccessMenuHeader
        },
        methods: {
            addButtonClick() {
                this.$emit('add-button-click', 'Organization')
            },
            checkOrganization(evt) {
                this.$store.dispatch('checkOrganization', evt.target.id)
            },
            checkAllOrganization() {
                this.$store.dispatch('checkAllOrganization')
                this.allChecked = !this.allChecked
            },
            deleteOrganization() {
                this.$store.dispatch('deleteOrganization', this.getOrganizations)
                this.allChecked = false
            }
        },
        computed: mapGetters(['getOrganizations'])
    }
</script>

<style scoped> 
    .section__checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .section__checkbox+label::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: #9BA8B7;
        border-radius: 4px;
        margin-left: 12.5px;
        margin-right: 12px;
    }

    .section__checkbox:checked+label::before {
        background-image: url('../assets/checked.svg');
        background-repeat: no-repeat;
        background-position: center;
    }

    .section {
        width: 1447px;
        padding-top: 17px;
        padding-left: 16px;
    }

    .section__container {
        background-color: #ffffff;
        min-height: 768px;
    }

    .section__column {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #EDF2F8;
        padding-bottom: 10px;
        margin-bottom: 26px;
    }

    .section__title {
        font-size: 14px;
        line-height: 16px;
        color: #3E434A;
        opacity: 0.6;
        text-align: left;
    }
    
    .section__title_name {
        width: 193px;
        margin-right: 60px;
    }

    .section__title_projects {
        width: 411px;
        margin-right: 170px;
    }

    .section__title_responible {
        width: 99px;
        margin-right: 100px;
    }

    .section__users {
        display: flex;
        align-items: center;
        margin-bottom: 37px;
    }

    .section__text {
        font-size: 14px;
        line-height: 16px;
        color: #3E434A;
        text-align: left;
    }

    .section__button {
        font-size: 14px;
        line-height: 16px;
        color: #3E434A;
        border: none;
        background-color: #F1F5F9;
        opacity: 0.8;
        border-radius: 3px;
        padding: 10px 24px;
    }

    @media screen and (max-width: 1919px) {
        .section {
            width: 1100px;
        }

        .section__title_name {
            width: 193px;
            margin-right: 5%;
        }

        .section__title_projects {
            width: 411px;
            margin-right: 5%;
        }

        .section__title_responible {
            width: 99px;
            margin-right: 5%;
        }

        .section__checkbox+label::before {
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            background-color: #9BA8B7;
            border-radius: 4px;
            margin-left: 0;
            margin-right: 12px;
        }

        .section__column {
            width: 95%;
            margin: 0 auto;
            margin-bottom: 26px;
        }

        .section__users {
            width: 95%;
            margin: 0 auto;
            margin-bottom: 37px;
        } 
    }
</style>