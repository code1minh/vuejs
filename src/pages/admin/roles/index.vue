<template>
    Đây là Trang quản lý Roles
</template>

<script>
import { useMenu } from "../../../stores/use-menu.js";
export default {
    setup() {
        useMenu().onSelectedKeys(["admin-roles"]);
    },
}
</script>