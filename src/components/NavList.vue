<template>
    <ul class="navbar-list">
        <li class="navbar-list__item navbar-list__item_title"><h2 class="navbar-list__title">Общий вид</h2></li>
        <NavSublist>
            <li class="navbar-list__item" @click="$emit('dashboard-click')">Дэшборд</li>
            <li class="navbar-list__item">Аналитика</li>
            <li class="navbar-list__item">Системная информация</li>
            <li class="navbar-list__item">Проекты</li>
        </NavSublist>
        <li class="navbar-list__item navbar-list__item_title"><h2 class="navbar-list__title">Управление доступом</h2></li>
        <NavSublist>
            <li class="navbar-list__item">Пользователи</li>
            <li class="navbar-list__item">Организации</li>
            <li class="navbar-list__item">Группы</li>
            <li class="navbar-list__item">Роли</li>
        </NavSublist>
        <li class="navbar-list__item navbar-list__item_title"><h2 class="navbar-list__title">Интеграция</h2></li>
        <NavSublist>
            <li class="navbar-list__item">Импорты</li>
            <li class="navbar-list__item">Интеграция с электронной почтой</li>
        </NavSublist>
        <li class="navbar-list__item navbar-list__item_title"><h2 class="navbar-list__title">Параметры сервера</h2></li>
        <NavSublist>
            <li class="navbar-list__item">Глобальные параметры</li>
            <li class="navbar-list__item">Резервное копирование БД</li>
            <li class="navbar-list__item">Статистика</li>
        </NavSublist>
    </ul>
</template>

<script>
    import NavSublist from '@/components/NavSublist.vue'
    export default {
        components: {
            NavSublist,
        }
    }
</script>

<style scoped>
    .navbar-list {
        list-style: none;
        margin: 0;
        padding: 0;
        padding-left: 21px;
        margin-left: 24px;
    }

    .navbar-list__title {
        position: relative;
        text-align: left;
        font-size: 16px;
        line-height: 18px;
        color: #474747;
    }

    .navbar-list__title::before {
        content: '';
        position: absolute;
        left: -28px;
        display: block;
        width: 16px;
        height: 16px;
        background-image: url('../assets/arrow.svg');
        background-position: center;
        background-repeat: no-repeat;
    }

    .navbar-list__item {
        text-align: left;
        font-size: 14px;
        line-height: 22px;
        color: #666667;
        margin-left: 2px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 12px;
        border-radius: 3px;
    }

    .navbar-list__item_title {
        background-color: transparent;
        padding: 0;
        margin-bottom: 4px;
    }
</style>