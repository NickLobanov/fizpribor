<template>
    <ul class="navbar-list">
        <li class="navbar-list__item_title" @click="generalViewClick">
            <h2 class="navbar-list__title" :class="{list_close: !generalViewIsOpen}">Общий вид</h2>
        </li>
        <NavSublist :isOpen="generalViewIsOpen">
            <li class="navbar-list__item" @click="$emit('dashboard-click')">Дэшборд</li>
            <li class="navbar-list__item">Аналитика</li>
            <li class="navbar-list__item">Системная информация</li>
            <li class="navbar-list__item">Проекты</li>
        </NavSublist>
        <li class="navbar-list__item_title" @click="accessControlClick">
            <h2 class="navbar-list__title" :class="{list_close: !accessControlIsOpen}">Управление доступом</h2>
        </li>
        <NavSublist :isOpen="accessControlIsOpen">
            <li class="navbar-list__item">Пользователи</li>
            <li class="navbar-list__item">Организации</li>
            <li class="navbar-list__item">Группы</li>
            <li class="navbar-list__item">Роли</li>
        </NavSublist>
        <li class="navbar-list__item_title" @click="integrationClick">
            <h2 class="navbar-list__title" :class="{list_close: !integrationIsOpen}">Интеграция</h2>
        </li>
        <NavSublist :isOpen="integrationIsOpen">
            <li class="navbar-list__item">Импорты</li>
            <li class="navbar-list__item">Интеграция с электронной почтой</li>
        </NavSublist>
        <li class="navbar-list__item_title" @click="serverDataClick">
            <h2 class="navbar-list__title" :class="{list_close: !serverDataIsOpen}">Параметры сервера</h2>
        </li>
        <NavSublist :isOpen="serverDataIsOpen">
            <li class="navbar-list__item">Глобальные параметры</li>
            <li class="navbar-list__item">Резервное копирование БД</li>
            <li class="navbar-list__item">Статистика</li>
        </NavSublist>
    </ul>
</template>

<script>
    import NavSublist from '@/components/NavSublist.vue'
    export default {
        data() {
            return {
                generalViewIsOpen: true,
                accessControlIsOpen: true,
                integrationIsOpen: true,
                serverDataIsOpen: true,
            }
        },
        methods: {
            generalViewClick() {
                this.generalViewIsOpen = !this.generalViewIsOpen
            },
            accessControlClick() {
                this.accessControlIsOpen = !this.accessControlIsOpen
            },
            integrationClick() {
                this.integrationIsOpen = !this.integrationIsOpen
            },
            serverDataClick() {
                this.serverDataIsOpen = !this.serverDataIsOpen
            }
        },
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

    .list_close::before {
        transform: rotate(90deg);
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
        cursor: pointer;
    }

    .navbar-list__item:hover {
        background-color: #3F6AD8;
        color: #ffffff;
    }

    .navbar-list__item_title {
        background-color: transparent;
        padding: 0;
        margin-bottom: 4px;
        cursor: pointer;
    }
</style>