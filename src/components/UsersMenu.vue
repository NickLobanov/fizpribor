<template>
    <section class="section">
        <AccessMenuHeader :title="title"
            :buttonText="buttonText"
            :addButtonText="addButtonText"
            :deleteButtonText="deleteButtonText"
        />
        <div class="section__container">
            <div class="section__column">
                <input type="checkbox" class="section__checkbox test" id="select-all"/>
                <label for="select-all"></label>
                <p class="section__title section__title_name">ФИО</p>
                <p class="section__title section__title_login">Логин</p>
                <p class="section__title section__title_email">Электронная почта</p>
                <p class="section__title section__title_group">Роль (группа)</p>
            </div>
            <div class="section__users">
                <input type="checkbox" class="section__checkbox"/>
                <p class="section__text section__title_name">Белянин Алексей Васильевич</p>
                <p class="section__text section__title_login">BelianinA</p>
                <p class="section__text section__title_email">BelianinA@fizpribor.ru</p>
                <p class="section__text section__title_group">Разработчик</p>
                <button class="section__button">настройка</button>
            </div>
        </div>
    </section>
</template>

<script>
    import AccessMenuHeader from '@/components/AccessMenuHeader.vue'
    export default {
        data() {
            return {
                title: 'ПОЛЬЗОВАТЕЛИ',
                buttonText: 'Новый пользователь',
                addButtonText: 'Добавить в группу',
                deleteButtonText: 'Удалить из группы'
            }
        },
        components: {
            AccessMenuHeader,
        }
    }
</script>

<style scoped>
    .test {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .test+label::before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: #9BA8B7;
        border-radius: 4px;
        margin-left: 12.5px;
        margin-right: 12px;
    }

    .test:checked+label::before {
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

    .section__checkbox {
        width: 20px;
        height: 20px;
        margin-right: 12px;
        margin-left: 12.5px;
    }

    .section__title {
        font-size: 14px;
        line-height: 16px;
        color: #3E434A;
        opacity: 0.6;
        text-align: left;
    }
    
    .section__title_name {
        width: 220px;
        margin-right: 150px;
    }

    .section__title_login {
        width: 73px;
        margin-right: 130px;
    }

    .section__title_email {
        width: 150px;
        margin-right: 110px;
    }

    .section__title_group {
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
</style>