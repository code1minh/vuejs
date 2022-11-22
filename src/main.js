import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import axios from 'axios'
window.axios = axios;

import {
    Checkbox,
    Input,
    Select,
    Avatar,
    Table,
    Card,
    Menu,
    List,
    Drawer, 
    Button,
    message 
} from 'ant-design-vue';

import App from './App.vue';

// Sử dụng Icon Font Awesome cách 2
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// library.add(fas, fab, far);

// Sử dụng Icon Font Awesome cách 1
import './static/fontawesome/css/all.min.css';

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app = createApp(App);
// Sử dụng Icon Font Awesome cách 2
// app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(Checkbox);
app.use(Input);
app.use(Select);
app.use(Avatar);
app.use(Table);
app.use(Card);
app.use(Menu);
app.use(List);
app.use(Button);
app.use(Drawer);
app.mount('#app');

app.config.globalProperties.$message = message;