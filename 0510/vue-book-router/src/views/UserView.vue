<template>
    <div>
        <h1>
            사용자 정보
        </h1>
        <ul>
            <li>
                사용자 ID :   {{$route.params.id}}
                사용자 ID :   {{this.$route.query.name}}
                사용자 ID :   {{this.$route.query.age}}
            </li>
        </ul>

        <h2>하위 컴포넌트 자리</h2>

        <router-view></router-view>
    </div>
</template>


<script>
export default {
    
    data() {
        return {
            message: '',
        };
    },
    created() {
        console.log("created: ", this.$route);
    },
    updated() {
        console.log("updated: ", this.$route);
    },
    methods: {},
};
</script>

<style scoped></style>