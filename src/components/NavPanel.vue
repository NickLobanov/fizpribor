<template>
    <nav class="navbar">
        <h1 class="navbar__title">Администрирование</h1>
        <ul class="navbar__list">
            <li>Общий вид</li>
            <ul>
                <li>Дэшборд</li>
                <li>Аналитика</li>
                <li>Системная информация</li>
                <li>Проекты</li>
            </ul>
            <li>Управление доступом</li>
            <ul>
                <li>Пользователи</li>
                <li>Организации</li>
                <li>Группы</li>
                <li>Роли</li>
            </ul>
            <li>Интеграция</li>
            <ul>
                <li>Импорты</li>
                <li>Интеграция с электронной почтой</li>
            </ul>
            <li>Параметры сервера</li>
            <ul>
                <li>Глобальные параметры</li>
                <li>Резервное копирование БД</li>
                <li>Статистика</li>
            </ul>
        </ul>
    </nav>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
    .navbar__list {
        list-style: none;
        border-left: 1px solid black;
    }

</style>