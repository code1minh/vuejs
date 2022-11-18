<template>
    Đây là Trang quản lý Settings
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-settings"]);
    },
}
</script>