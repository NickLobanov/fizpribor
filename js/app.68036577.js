(function(t){function e(e){for(var s,a,c=e[0],l=e[1],r=e[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},o=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/fizpribor/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0443":function(t,e,n){"use strict";n("6b86")},"0b39":function(t,e,n){"use strict";n("50bf")},2903:function(t,e,n){"use strict";n("99fd")},3428:function(t,e,n){"use strict";n("b92f")},"3abf":function(t,e,n){},"3e6d":function(t,e,n){"use strict";n("3abf")},"3f9d":function(t,e,n){"use strict";n("ae85")},4674:function(t,e,n){},4975:function(t,e,n){"use strict";n("d2ac")},"50bf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=n("2f62"),o=(n("4de4"),n("4160"),n("159b"),{actions:{checkUser:function(t,e){t.commit("checkUser",e)},checkAllUsers:function(t){t.commit("checkAllUsers")},deleteUser:function(t,e){var n=e.filter((function(t){return!0!==t.isChecked}));t.commit("deleteUser",n)}},mutations:{createNewUser:function(t,e){t.users.push(e)},checkUser:function(t,e){t.users[e].isChecked=!t.users[e].isChecked},checkAllUsers:function(t){t.users.forEach((function(t){t.isChecked=!t.isChecked}))},deleteUser:function(t,e){t.users=e}},state:{users:[{name:"Алексей",secondName:"Белянин",patronymic:"Васильевич",login:"BelianinA",email:"BelianinA@fizpribor.ru",role:"Разработчик",isChecked:!1},{name:"Максим",secondName:"Ничаев",patronymic:"Артурович",login:"NechaevM",email:"NechaevM@fizpribor.ru",role:"Руководитель",isChecked:!1}]},getters:{getUsers:function(t){return t.users}}}),a={actions:{checkOrganization:function(t,e){t.commit("checkOrganization",e)},checkAllOrganization:function(t){t.commit("checkAllOrganization")},deleteOrganization:function(t,e){var n=e.filter((function(t){return!0!==t.isChecked}));t.commit("deleteOrganization",n)}},mutations:{createNewOrganization:function(t,e){t.organizations.push(e)},checkOrganization:function(t,e){t.organizations[e].isChecked=!t.organizations[e].isChecked},checkAllOrganization:function(t){t.organizations.forEach((function(t){t.isChecked=!t.isChecked}))},deleteOrganization:function(t,e){t.organizations=e}},state:{organizations:[{name:"ООО «Физприбор»",project:"АЭС Аккую, АЭС Нововоронежская",responible:"Нечаев М.А.",isChecked:!1},{name:'АО "Атомтехэнерго"',project:"АЭС Нововоронежская, АЭС Ленинградская, АЭС Калинская",responible:"Руководитель",isChecked:!1}]},getters:{getOrganizations:function(t){return t.organizations}}},c={actions:{checkGroup:function(t,e){t.commit("checkGroup",e)},checkAllGroup:function(t){t.commit("checkAllGroup")},deleteGroup:function(t,e){var n=e.filter((function(t){return!0!==t.isChecked}));t.commit("deleteGroup",n)}},mutations:{createNewGroup:function(t,e){t.groups.push(e)},checkGroup:function(t,e){t.groups[e].isChecked=!t.groups[e].isChecked},checkAllGroup:function(t){t.groups.forEach((function(t){t.isChecked=!t.isChecked}))},deleteGroup:function(t,e){t.groups=e}},state:{groups:[{name:"ООО «Физприбор»",project:"АЭС Аккую, АЭС Нововоронежская",competitors:5,isChecked:!1},{name:'АО "Атомтехэнерго"',project:"АЭС Нововоронежская, АЭС Ленинградская, АЭС Калинская",competitors:10,isChecked:!1}]},getters:{getGroups:function(t){return t.groups}}},l={actions:{checkRole:function(t,e){t.commit("checkRole",e)},checkAllRole:function(t){t.commit("checkAllRole")},deleteRole:function(t,e){var n=e.filter((function(t){return!0!==t.isChecked}));t.commit("deleteRole",n)}},mutations:{createNewRole:function(t,e){t.role.push(e)},checkRole:function(t,e){t.role[e].isChecked=!t.role[e].isChecked},checkAllRole:function(t){t.role.forEach((function(t){t.isChecked=!t.isChecked}))},deleteRole:function(t,e){t.role=e}},state:{role:[{name:"Разработчик",keyName:"developer",functions:["Конфигуратор БД (редактирование)","Редактор блоков (редкатирование)"],isChecked:!1},{name:"Руководитель",keyName:"CEO",functions:["Дешборд проектов","Конфигуратор БД (чтение)","Редактор блоков (чтение)"],isChecked:!1}]},getters:{getRole:function(t){return t.role}}};s["a"].use(i["a"]);var r=new i["a"].Store({modules:{users:o,organization:a,group:c,role:l}}),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{on:{"edit-click":t.editClick}}),n("main",{staticClass:"main"},[n("ModulePanel"),n("NavPanel",{attrs:{currentItem:t.currentTub},on:{"menu-click":t.menuClick}}),n(t.currentTubComponent,{tag:"component",on:{"add-button-click":t.buttonClick,"dashboard-click":t.buttonClick}}),n("PopupUsers",{attrs:{isOpen:t.popupUsersIsOpen,onClose:t.closeAllPopup},on:{"close-popup":t.closeAllPopup}}),n("PopupOrganization",{attrs:{isOpen:t.popupOrganizationIsOpen,onClose:t.closeAllPopup},on:{"close-popup":t.closeAllPopup}}),n("PopupGroup",{attrs:{isOpen:t.popupGroupIsOpen,onClose:t.closeAllPopup},on:{"close-popup":t.closeAllPopup}}),n("PopupRole",{attrs:{isOpen:t.popupRoleIsOpen,onClose:t.closeAllPopup},on:{"close-popup":t.closeAllPopup}})],1)],1)},p=[],d=(n("fb6a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("img",{staticClass:"header__logo",attrs:{src:n("9b19")}}),s("button",{staticClass:"header__button",on:{click:function(e){return t.$emit("edit-click")}}})])}),_=[],m={},h=m,b=(n("d495"),n("2877")),f=Object(b["a"])(h,d,_,!1,null,"ee404df8",null),v=f.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"module-panel"},[n("button",{staticClass:"module-panel__button module-panel__button_boolean"}),n("button",{staticClass:"module-panel__button module-panel__button_db"}),n("button",{staticClass:"module-panel__button module-panel__button_generator"})])}],g={},O=g,x=(n("a065"),Object(b["a"])(O,C,k,!1,null,"a5af2ae4",null)),T=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("h1",{staticClass:"navbar__title"},[t._v("Администрирование")]),n("NavList",{attrs:{currentItem:t.currentItem},on:{"menu-click":t.menuClick}})],1)},P=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navbar-list"},[n("li",{staticClass:"navbar-list__item_title",on:{click:t.generalViewClick}},[n("h2",{staticClass:"navbar-list__title",class:{list_close:!t.generalViewIsOpen}},[t._v("Общий вид")])]),n("NavSublist",{attrs:{isOpen:t.generalViewIsOpen}},[n("li",{staticClass:"navbar-list__item",class:{navbar_active:"Dashboard"===t.currentItem},attrs:{id:"dashboard"},on:{click:function(e){return t.$emit("menu-click",e)}}},[t._v("Дэшборд ")]),n("li",{staticClass:"navbar-list__item"},[t._v("Аналитика")]),n("li",{staticClass:"navbar-list__item"},[t._v("Системная информация")]),n("li",{staticClass:"navbar-list__item"},[t._v("Проекты")])]),n("li",{staticClass:"navbar-list__item_title",on:{click:t.accessControlClick}},[n("h2",{staticClass:"navbar-list__title",class:{list_close:!t.accessControlIsOpen}},[t._v("Управление доступом")])]),n("NavSublist",{attrs:{isOpen:t.accessControlIsOpen}},[n("li",{staticClass:"navbar-list__item",class:{navbar_active:"Users"===t.currentItem},attrs:{id:"users"},on:{click:function(e){return t.$emit("menu-click",e)}}},[t._v("Пользователи")]),n("li",{staticClass:"navbar-list__item",class:{navbar_active:"Organization"===t.currentItem},attrs:{id:"organization"},on:{click:function(e){return t.$emit("menu-click",e)}}},[t._v("Организации")]),n("li",{staticClass:"navbar-list__item",class:{navbar_active:"Group"===t.currentItem},attrs:{id:"group"},on:{click:function(e){return t.$emit("menu-click",e)}}},[t._v("Группы")]),n("li",{staticClass:"navbar-list__item",class:{navbar_active:"Role"===t.currentItem},attrs:{id:"role"},on:{click:function(e){return t.$emit("menu-click",e)}}},[t._v("Роли")])]),n("li",{staticClass:"navbar-list__item_title",on:{click:t.integrationClick}},[n("h2",{staticClass:"navbar-list__title",class:{list_close:!t.integrationIsOpen}},[t._v("Интеграция")])]),n("NavSublist",{attrs:{isOpen:t.integrationIsOpen}},[n("li",{staticClass:"navbar-list__item"},[t._v("Импорты")]),n("li",{staticClass:"navbar-list__item"},[t._v("Интеграция с электронной почтой")])]),n("li",{staticClass:"navbar-list__item_title",on:{click:t.serverDataClick}},[n("h2",{staticClass:"navbar-list__title",class:{list_close:!t.serverDataIsOpen}},[t._v("Параметры сервера")])]),n("NavSublist",{attrs:{isOpen:t.serverDataIsOpen}},[n("li",{staticClass:"navbar-list__item"},[t._v("Глобальные параметры")]),n("li",{staticClass:"navbar-list__item"},[t._v("Резервное копирование БД")]),n("li",{staticClass:"navbar-list__item"},[t._v("Статистика")])])],1)},w=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navbar-sublist",class:{navbar_close:!t.isOpen}},[t._t("default")],2)},y=[],z={props:["isOpen"]},I=z,A=(n("4975"),Object(b["a"])(I,$,y,!1,null,"62abbfcf",null)),U=A.exports,G={props:["currentItem"],data:function(){return{generalViewIsOpen:!0,accessControlIsOpen:!0,integrationIsOpen:!0,serverDataIsOpen:!0}},methods:{generalViewClick:function(){this.generalViewIsOpen=!this.generalViewIsOpen},accessControlClick:function(){this.accessControlIsOpen=!this.accessControlIsOpen},integrationClick:function(){this.integrationIsOpen=!this.integrationIsOpen},serverDataClick:function(){this.serverDataIsOpen=!this.serverDataIsOpen}},components:{NavSublist:U}},R=G,B=(n("3428"),Object(b["a"])(R,N,w,!1,null,"68591955",null)),S=B.exports,E={props:["currentItem"],components:{NavList:S},methods:{menuClick:function(t){this.$emit("menu-click",t.target.id)}}},D=E,M=(n("7581"),Object(b["a"])(D,j,P,!1,null,"466bb6bc",null)),H=M.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dashboard"},[n("DashboardItemWithProject",{attrs:{dashboardTitle:t.newProject,buttonText:t.btnTextProject,amountState:this.getUsers}}),n("DashboardItemWithoutProject",{attrs:{dashboardTitle:t.newOrganization,buttonText:t.btnTextOrganization,amountState:this.getOrganizations},on:{"dashboard-click":function(e){return t.$emit("dashboard-click","Organization")}}}),n("DashboardItemWithProject",{attrs:{dashboardTitle:t.newUser,buttonText:t.btnTextUser,amountState:this.getGroups},on:{"dashboard-click":function(e){return t.$emit("dashboard-click","Users")}}}),n("DashboardItemWithoutProject",{attrs:{dashboardTitle:t.newGroup,buttonText:t.btnTextGroup,amountState:this.getRole},on:{"dashboard-click":function(e){return t.$emit("dashboard-click","Group")}}})],1)},W=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-item"},[n("DashboardHeader",{attrs:{dashboardTitle:t.dashboardTitle,buttonText:t.buttonText,amountState:t.amountState.length},on:{"dashboard-click":t.dashboardClick}}),t._m(0),n("div",{staticClass:"dashboard-item__project"},[n("h2",{staticClass:"dashboard-item__title"},[t._v("Список проектов")]),n("ul",{staticClass:"dashboard-item__list"},t._l(3,(function(e,s){return n("li",{key:s,staticClass:"dashboard-item__list-item"},[t._v("101KAC20AP001_1")])})),0)]),n("div",{staticClass:"dashboard-item__empty"})],1)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-item__statistics"},[n("h2",{staticClass:"dashboard-item__title"},[t._v("Статистика")])])}],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-header"},[n("h2",{staticClass:"dashboard-header__title"},[t._v(t._s(t.dashboardTitle)+" ("+t._s(t.amountState)+")")]),n("button",{staticClass:"dashboard-header__button",on:{click:function(e){return t.$emit("dashboard-click")}}},[t._v(t._s(t.buttonText))])])},q=[],F={props:["dashboardTitle","buttonText","amountState"]},Q=F,X=(n("0b39"),Object(b["a"])(Q,K,q,!1,null,"6a757bd8",null)),Y=X.exports,Z={components:{DashboardHeader:Y},props:["dashboardTitle","buttonText","amountState"],methods:{dashboardClick:function(){this.$emit("dashboard-click")}}},tt=Z,et=(n("ce40"),Object(b["a"])(tt,J,L,!1,null,"2969289c",null)),nt=et.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-item"},[n("DashboardHeader",{attrs:{dashboardTitle:t.dashboardTitle,buttonText:t.buttonText,amountState:t.amountState.length},on:{"dashboard-click":t.dashboardClick}}),t._m(0),n("div",{staticClass:"dashboard-item__empty-first"}),n("div",{staticClass:"dashboard-item__empty-second"})],1)},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-item__statistics"},[n("h2",{staticClass:"dashboard-item__title"},[t._v("Статистика")])])}],ot={components:{DashboardHeader:Y},props:["dashboardTitle","buttonText","amountState"],methods:{dashboardClick:function(){this.$emit("dashboard-click")}}},at=ot,ct=(n("3f9d"),Object(b["a"])(at,st,it,!1,null,"12c97f31",null)),lt=ct.exports,rt={components:{DashboardItemWithProject:nt,DashboardItemWithoutProject:lt},data:function(){return{newProject:"Проекты",btnTextProject:"Новый проект",newOrganization:"Организации",btnTextOrganization:"Новая организация",newUser:"Пользователи",btnTextUser:"Новый пользователь",newGroup:"Группы",btnTextGroup:"Новая группа"}},computed:Object(i["b"])(["getUsers","getOrganizations","getGroups","getRole"])},ut=rt,pt=(n("98e4"),Object(b["a"])(ut,V,W,!1,null,"48e792d8",null)),dt=pt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("AccessMenuHeader",{attrs:{title:t.title,buttonText:t.buttonText,addButtonText:t.addButtonText,deleteButtonText:t.deleteButtonText,amountState:this.getUsers.length},on:{"add-button-click":t.addButtonClick,"handle-delete":t.deleteUser}}),n("div",{staticClass:"section__container"},[n("div",{staticClass:"section__column"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:"select-all"},domProps:{checked:t.allChecked},on:{click:t.checkAllUser}}),n("label",{attrs:{for:"select-all"}}),n("p",{staticClass:"section__title section__title_name"},[t._v("ФИО")]),n("p",{staticClass:"section__title section__title_login"},[t._v("Логин")]),n("p",{staticClass:"section__title section__title_email"},[t._v("Электронная почта")]),n("p",{staticClass:"section__title section__title_group"},[t._v("Роль (группа)")])]),t._l(t.getUsers,(function(e,s){return n("div",{key:e.name,staticClass:"section__users"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:s},domProps:{checked:e.isChecked},on:{click:t.checkUser}}),n("label",{attrs:{for:s}}),n("p",{staticClass:"section__text section__title_name"},[t._v(t._s(e.secondName+" "+e.name+" "+e.patronymic))]),n("p",{staticClass:"section__text section__title_login"},[t._v(t._s(e.login))]),n("p",{staticClass:"section__text section__title_email"},[t._v(t._s(e.email))]),n("p",{staticClass:"section__text section__title_group"},[t._v(t._s(e.role))]),n("button",{staticClass:"section__button"},[t._v("Настройка")])])}))],2)],1)},mt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-header"},[n("div",{staticClass:"menu-header__search"},[n("h2",{staticClass:"menu-header__title"},[t._v(t._s(t.title)+" ("+t._s(t.amountState)+")")]),t._m(0),n("button",{staticClass:"menu-header__add-btn",on:{click:function(e){return t.$emit("add-button-click")}}},[t._v(t._s(t.buttonText))])]),n("div",{staticClass:"menu-header__controllers"},[n("button",{staticClass:"menu-header__button menu-header__button_selector"},[t._v(t._s(t.addButtonText))]),n("button",{staticClass:"menu-header__button menu-header__button_selector"},[t._v(t._s(t.deleteButtonText))]),n("button",{staticClass:"menu-header__button "},[t._v("Блокировать")]),n("button",{staticClass:"menu-header__button",on:{click:function(e){return t.$emit("handle-delete")}}},[t._v("Удалить")])])])},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"menu-header__label"},[n("input",{staticClass:"menu-header__input"})])}],ft={props:["title","buttonText","addButtonText","deleteButtonText","amountState"]},vt=ft,Ct=(n("aaa4"),Object(b["a"])(vt,ht,bt,!1,null,"224723b2",null)),kt=Ct.exports,gt={data:function(){return{title:"ПОЛЬЗОВАТЕЛИ",buttonText:"Новый пользователь",addButtonText:"Добавить в группу",deleteButtonText:"Удалить из группы",allChecked:!1}},components:{AccessMenuHeader:kt},methods:{addButtonClick:function(){this.$emit("add-button-click","Users")},checkUser:function(t){this.$store.dispatch("checkUser",t.target.id)},checkAllUser:function(){this.$store.dispatch("checkAllUsers"),this.allChecked=!this.allChecked},deleteUser:function(){this.$store.dispatch("deleteUser",this.getUsers),this.allChecked=!1}},computed:Object(i["b"])(["getUsers"])},Ot=gt,xt=(n("2903"),Object(b["a"])(Ot,_t,mt,!1,null,"13ebfb5c",null)),Tt=xt.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("AccessMenuHeader",{attrs:{title:t.title,buttonText:t.buttonText,addButtonText:t.addButtonText,deleteButtonText:t.deleteButtonText,amountState:this.getOrganizations.length},on:{"add-button-click":t.addButtonClick,"handle-delete":t.deleteOrganization}}),n("div",{staticClass:"section__container"},[n("div",{staticClass:"section__column"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:"select-all"},domProps:{checked:t.allChecked},on:{click:t.checkAllOrganization}}),n("label",{attrs:{for:"select-all"}}),n("p",{staticClass:"section__title section__title_name"},[t._v("Наименование органиазции")]),n("p",{staticClass:"section__title section__title_projects"},[t._v("Проекты")]),n("p",{staticClass:"section__title section__title_responible"},[t._v("Ответсвенный")])]),t._l(t.getOrganizations,(function(e,s){return n("div",{key:e.name,staticClass:"section__users"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:s},domProps:{checked:e.isChecked},on:{click:t.checkOrganization}}),n("label",{attrs:{for:s}}),n("p",{staticClass:"section__text section__title_name"},[t._v(t._s(e.name))]),n("p",{staticClass:"section__text section__title_projects"},[t._v(t._s(e.project))]),n("p",{staticClass:"section__text section__title_responible"},[t._v(t._s(e.responible))]),n("button",{staticClass:"section__button"},[t._v("Настройка")])])}))],2)],1)},Pt=[],Nt={data:function(){return{title:"ОРГАНИЗАЦИИ",buttonText:"Новая организация",addButtonText:"Добавить в проект",deleteButtonText:"Удалить из проекта",allChecked:!1}},components:{AccessMenuHeader:kt},methods:{addButtonClick:function(){this.$emit("add-button-click","Organization")},checkOrganization:function(t){this.$store.dispatch("checkOrganization",t.target.id)},checkAllOrganization:function(){this.$store.dispatch("checkAllOrganization"),this.allChecked=!this.allChecked},deleteOrganization:function(){this.$store.dispatch("deleteOrganization",this.getOrganizations),this.allChecked=!1}},computed:Object(i["b"])(["getOrganizations"])},wt=Nt,$t=(n("7180"),Object(b["a"])(wt,jt,Pt,!1,null,"2b2b1758",null)),yt=$t.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("AccessMenuHeader",{attrs:{title:t.title,buttonText:t.buttonText,addButtonText:t.addButtonText,deleteButtonText:t.deleteButtonText,amountState:this.getGroups.length},on:{"add-button-click":t.addButtonClick,"handle-delete":t.deleteGroup}}),n("div",{staticClass:"section__container"},[n("div",{staticClass:"section__column"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:"select-all"},domProps:{checked:t.allChecked},on:{click:t.checkAllGroup}}),n("label",{attrs:{for:"select-all"}}),n("p",{staticClass:"section__title section__title_name"},[t._v("Название группы")]),n("p",{staticClass:"section__title section__title_projects"},[t._v("Проекты")]),n("p",{staticClass:"section__title section__title_competitors"},[t._v("Участники")])]),t._l(t.getGroups,(function(e,s){return n("div",{key:e.name,staticClass:"section__users"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:s},domProps:{checked:e.isChecked},on:{click:t.checkGroup}}),n("label",{attrs:{for:s}}),n("p",{staticClass:"section__text section__title_name"},[t._v(t._s(e.name))]),n("p",{staticClass:"section__text section__title_projects"},[t._v(t._s(e.project))]),n("p",{staticClass:"section__text section__title_competitors"},[t._v(t._s(e.competitors))]),n("button",{staticClass:"section__button"},[t._v("Настройка")])])}))],2)],1)},It=[],At={data:function(){return{title:"ГРУППЫ",buttonText:"Новая группа",addButtonText:"Добавить в проект",deleteButtonText:"Удалить из проекта",allChecked:!1}},components:{AccessMenuHeader:kt},methods:{addButtonClick:function(){this.$emit("add-button-click","Group")},checkGroup:function(t){this.$store.dispatch("checkGroup",t.target.id)},checkAllGroup:function(){this.$store.dispatch("checkAllGroup"),this.allChecked=!this.allChecked},deleteGroup:function(){this.$store.dispatch("deleteGroup",this.getGroups),this.allChecked=!1}},computed:Object(i["b"])(["getGroups"])},Ut=At,Gt=(n("0443"),Object(b["a"])(Ut,zt,It,!1,null,"66690c31",null)),Rt=Gt.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("AccessMenuHeader",{attrs:{title:t.title,buttonText:t.buttonText,addButtonText:t.addButtonText,deleteButtonText:t.deleteButtonText,amountState:this.getRole.length},on:{"add-button-click":t.addButtonClick,"handle-delete":t.deleteRole}}),n("div",{staticClass:"section__container"},[n("div",{staticClass:"section__column"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:"select-all"},domProps:{checked:t.allChecked},on:{click:t.checkAllRole}}),n("label",{attrs:{for:"select-all"}}),n("p",{staticClass:"section__title section__title_name"},[t._v("Название роли")]),n("p",{staticClass:"section__title section__title_keys"},[t._v("Ключ")]),n("p",{staticClass:"section__title section__title_functions"},[t._v("Функции")])]),t._l(t.getRole,(function(e,s){return n("div",{key:s,staticClass:"section__users"},[n("input",{staticClass:"section__checkbox",attrs:{type:"checkbox",id:s},domProps:{checked:e.isChecked},on:{click:t.checkRole}}),n("label",{attrs:{for:s}}),n("p",{staticClass:"section__text section__title_name"},[t._v(t._s(e.name))]),n("p",{staticClass:"section__text section__title_keys"},[t._v(t._s(e.keyName))]),n("p",{staticClass:"section__text section__title_functions"},[t._v(t._s(e.functions.join(", ")))]),n("button",{staticClass:"section__button"},[t._v("Настройка")])])}))],2)],1)},St=[],Et={data:function(){return{title:"РОЛИ",buttonText:"Новая роль",addButtonText:"Добавить в проект",deleteButtonText:"Удалить из проекта",allChecked:!1}},components:{AccessMenuHeader:kt},methods:{addButtonClick:function(){this.$emit("add-button-click","Role")},checkRole:function(t){this.$store.dispatch("checkRole",t.target.id)},checkAllRole:function(){this.$store.dispatch("checkAllRole"),this.allChecked=!this.allChecked},deleteRole:function(){this.$store.dispatch("deleteRole",this.getRole),this.allChecked=!1}},computed:Object(i["b"])(["getRole"])},Dt=Et,Mt=(n("f2c2"),Object(b["a"])(Dt,Bt,St,!1,null,"5f86a96e",null)),Ht=Mt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Popup",{attrs:{isOpen:t.isOpen,title:t.popupTitle},on:{"close-popup":function(e){return t.$emit("close-popup")},"popup-submit":t.addNewUser}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"popup__input",attrs:{placeholder:"Имя"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.secondName,expression:"secondName"}],staticClass:"popup__input",attrs:{placeholder:"Фамилия"},domProps:{value:t.secondName},on:{input:function(e){e.target.composing||(t.secondName=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.patronymic,expression:"patronymic"}],staticClass:"popup__input",attrs:{placeholder:"Отчество"},domProps:{value:t.patronymic},on:{input:function(e){e.target.composing||(t.patronymic=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"popup__input",attrs:{placeholder:"Логин"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"popup__input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],staticClass:"popup__input",attrs:{placeholder:"Роль"},domProps:{value:t.role},on:{input:function(e){e.target.composing||(t.role=e.target.value)}}})])},Wt=[],Jt=(n("b0c0"),n("5530")),Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup",class:{popup_opened:t.isOpen}},[n("form",{staticClass:"popup__form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("h2",{staticClass:"popup__title"},[t._v(t._s(t.title))]),t._t("default"),n("button",{staticClass:"popup__button"},[t._v("Создать")]),n("button",{staticClass:"popup__close-btn",attrs:{type:"button"},on:{click:function(e){return t.$emit("close-popup")}}})],2)])},Kt=[],qt={props:["isOpen","title"],methods:{handleSubmit:function(){this.$emit("popup-submit")}}},Ft=qt,Qt=(n("3e6d"),Object(b["a"])(Ft,Lt,Kt,!1,null,"0dfe42e6",null)),Xt=Qt.exports,Yt={components:{Popup:Xt},props:["isOpen","onClose"],data:function(){return{name:"",secondName:"",patronymic:"",login:"",email:"",role:"",popupTitle:"Новый пользователь"}},methods:Object(Jt["a"])(Object(Jt["a"])({},Object(i["c"])(["createNewUser"])),{},{addNewUser:function(){this.createNewUser({name:this.name,secondName:this.secondName,patronymic:this.patronymic,login:this.login,email:this.email,role:this.role,isChecked:!1}),this.name=this.secondName=this.patronymic=this.login=this.email=this.role="",this.onClose()}})},Zt=Yt,te=Object(b["a"])(Zt,Vt,Wt,!1,null,"31fa5418",null),ee=te.exports,ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Popup",{attrs:{isOpen:t.isOpen,title:t.popupTitle},on:{"close-popup":function(e){return t.$emit("close-popup")},"popup-submit":t.addNewOrganization}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"popup__input",attrs:{placeholder:"Наиминование организации"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.project,expression:"project"}],staticClass:"popup__input",attrs:{placeholder:"Название проекта"},domProps:{value:t.project},on:{input:function(e){e.target.composing||(t.project=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.responible,expression:"responible"}],staticClass:"popup__input",attrs:{placeholder:"Ответственный"},domProps:{value:t.responible},on:{input:function(e){e.target.composing||(t.responible=e.target.value)}}})])},se=[],ie={components:{Popup:Xt},props:["isOpen","onClose","title"],data:function(){return{name:"",project:"",responible:"",popupTitle:"Новая организация"}},methods:Object(Jt["a"])(Object(Jt["a"])({},Object(i["c"])(["createNewOrganization"])),{},{addNewOrganization:function(){this.createNewOrganization({name:this.name,project:this.project,responible:this.responible,isChecked:!1}),this.name=this.project=this.responible="",this.onClose()}})},oe=ie,ae=Object(b["a"])(oe,ne,se,!1,null,"eae2e1e6",null),ce=ae.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Popup",{attrs:{isOpen:t.isOpen,title:t.popupTitle},on:{"close-popup":function(e){return t.$emit("close-popup")},"popup-submit":t.addNewGroup}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"popup__input",attrs:{placeholder:"Название группы"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.project,expression:"project"}],staticClass:"popup__input",attrs:{placeholder:"Название проекта"},domProps:{value:t.project},on:{input:function(e){e.target.composing||(t.project=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.competitors,expression:"competitors"}],staticClass:"popup__input",attrs:{placeholder:"Участники"},domProps:{value:t.competitors},on:{input:function(e){e.target.composing||(t.competitors=e.target.value)}}})])},re=[],ue={components:{Popup:Xt},props:["isOpen","onClose"],data:function(){return{name:"",project:"",competitors:"",popupTitle:"Новая группа"}},methods:Object(Jt["a"])(Object(Jt["a"])({},Object(i["c"])(["createNewGroup"])),{},{addNewGroup:function(){this.createNewGroup({name:this.name,project:this.project,competitors:this.competitors,isChecked:!1}),this.name=this.project=this.competitors="",this.onClose()}})},pe=ue,de=Object(b["a"])(pe,le,re,!1,null,"4fd14d70",null),_e=de.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Popup",{attrs:{isOpen:t.isOpen,title:t.popupTitle},on:{"close-popup":function(e){return t.$emit("close-popup")},"popup-submit":t.addNewRole}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"popup__input",attrs:{placeholder:"Название роли"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyName,expression:"keyName"}],staticClass:"popup__input",attrs:{placeholder:"Название ключа"},domProps:{value:t.keyName},on:{input:function(e){e.target.composing||(t.keyName=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.functions,expression:"functions"}],staticClass:"popup__input",attrs:{placeholder:"Функции"},domProps:{value:t.functions},on:{input:function(e){e.target.composing||(t.functions=e.target.value)}}})])},he=[],be={components:{Popup:Xt},props:["isOpen","onClose","title"],data:function(){return{name:"",keyName:"",functions:"",popupTitle:"Новая роль"}},methods:Object(Jt["a"])(Object(Jt["a"])({},Object(i["c"])(["createNewRole"])),{},{addNewRole:function(){this.createNewRole({name:this.name,keyName:this.keyName,functions:[this.functions],isChecked:!1}),this.name=this.keyName=this.functions="",this.onClose()}})},fe=be,ve=Object(b["a"])(fe,me,he,!1,null,"37b54e46",null),Ce=ve.exports,ke={name:"App",data:function(){return{currentTub:"Dashboard",popupUsersIsOpen:!1,popupOrganizationIsOpen:!1,popupGroupIsOpen:!1,popupRoleIsOpen:!1}},components:{Header:v,ModulePanel:T,NavPanel:H,Dashboard:dt,Users:Tt,Organization:yt,Group:Rt,Role:Ht,PopupUsers:ee,PopupOrganization:ce,PopupGroup:_e,PopupRole:Ce},methods:{menuClick:function(t){this.currentTub=t[0].toUpperCase()+t.slice(1)},buttonClick:function(t){"Users"===t&&(this.popupUsersIsOpen=!0),"Organization"===t&&(this.popupOrganizationIsOpen=!0),"Group"===t&&(this.popupGroupIsOpen=!0),"Role"===t&&(this.popupRoleIsOpen=!0)},closeAllPopup:function(){this.popupUsersIsOpen=!1,this.popupOrganizationIsOpen=!1,this.popupGroupIsOpen=!1,this.popupRoleIsOpen=!1},editClick:function(){this.currentTub="Dashboard"}},computed:{currentTubComponent:function(){return this.currentTub}}},ge=ke,Oe=(n("034f"),Object(b["a"])(ge,u,p,!1,null,null,null)),xe=Oe.exports;n("4674");s["a"].config.productionTip=!1,new s["a"]({store:r,render:function(t){return t(xe)}}).$mount("#app")},"6b86":function(t,e,n){},7180:function(t,e,n){"use strict";n("9e74")},7391:function(t,e,n){},7581:function(t,e,n){"use strict";n("d207")},"85ec":function(t,e,n){},"98e4":function(t,e,n){"use strict";n("d1b1")},"99fd":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.809fd6b7.svg"},"9e74":function(t,e,n){},a065:function(t,e,n){"use strict";n("e3f7")},aaa4:function(t,e,n){"use strict";n("7391")},ae85:function(t,e,n){},b3d2:function(t,e,n){},b92f:function(t,e,n){},ce40:function(t,e,n){"use strict";n("b3d2")},d1b1:function(t,e,n){},d207:function(t,e,n){},d2ac:function(t,e,n){},d495:function(t,e,n){"use strict";n("edf2")},e3f7:function(t,e,n){},e853:function(t,e,n){},edf2:function(t,e,n){},f2c2:function(t,e,n){"use strict";n("e853")}});
//# sourceMappingURL=app.68036577.js.map