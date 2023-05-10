<template>
    <div>
        <h1>
            사용자의 profile 입니다.
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