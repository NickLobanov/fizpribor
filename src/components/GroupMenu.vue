<template>
    <section class="section">
        <AccessMenuHeader />
        <div class="section__container">
            <div class="section__column">
                <input type="checkbox" class="section__checkbox"/>
                <p class="section__title section__title_name">Название группы</p>
                <p class="section__title section__title_projects">Проекты</p>
                <p class="section__title section__title_competitors">Участники</p>
            </div>
            <div class="section__users">
                <input type="checkbox" class="section__checkbox"/>
                <p class="section__text section__title_name">АО "Атомтехэнерго"</p>
                <p class="section__text section__title_projects">АЭС Нововоронежская, АЭС Ленинградская, АЭС Калинская</p>
                <p class="section__text section__title_competitors">5</p>
                <button class="section__button">Настройка</button>
            </div>
        </div>
    </section>
</template>

<script>
    import AccessMenuHeader from '@/components/AccessMenuHeader.vue'
    export default {
        components: {
            AccessMenuHeader
        }
    }
</script>

<style scoped>
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
        width: 193px;
        margin-right: 60px;
    }

    .section__title_projects {
        width: 411px;
        margin-right: 170px;
    }

    .section__title_competitors {
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