<template>
    <div>
        <h1>
            사용자의 쇼핑 목록입니다.
        </h1>    

            <div>{{ $route.params }} {{ $route.query }} {{ $route.path }}</div>

    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() {},
    methods: {},
};
</script>

<style scoped></style>