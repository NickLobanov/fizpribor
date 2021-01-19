<template>
    <ul class="navbar__list">
            <li>Общий вид</li>
            <NavSublist>
                <li>Дэшборд</li>
                <li>Аналитика</li>
                <li>Системная информация</li>
                <li>Проекты</li>
            </NavSublist>
            <li>Управление доступом</li>
            <NavSublist>
                <li>Пользователи</li>
                <li>Организации</li>
                <li>Группы</li>
                <li>Роли</li>
            </NavSublist>
            <li>Интеграция</li>
            <NavSublist>
                <li>Импорты</li>
                <li>Интеграция с электронной почтой</li>
            </NavSublist>
            <li>Параметры сервера</li>
            <NavSublist>
                <li>Глобальные параметры</li>
                <li>Резервное копирование БД</li>
                <li>Статистика</li>
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

</style>