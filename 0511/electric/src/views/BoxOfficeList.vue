<template>
    <div>
        <h1>박스오피스</h1>
        조회 대상 : <input v-model="targetDt">
        <button @click="search" :disabled="status.ing">조회</button>
        <table>
          <thead>
          <tr>
            <th>순위</th>
            <th>제목</th>
            <th>개봉일</th>
            <th>당일 관객수</th>
            <th>당일 수입</th>
            <th>누적 관객수</th>
            <th>누적 수입</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="elem in list" :key="elem.movieCd">
            <td>{{ elem.rank }}</td>
            <td>{{ elem.movieNm }}</td>
            <td>{{ elem.openDt }}</td>
            <td>{{ elem.audiCnt }}</td>
            <td>{{ elem.salesAmt }}</td>
            <td>{{ elem.audiAcc }}</td>
            <td>{{ elem.salesAcc }}</td>
          </tr>
          </tbody>
        </table>
        <div id="overlay" v-if="status.ing"> 아쫌...</div>
    </div>
</template>

<script>
import { kobisAxios, status} from '@/ajax/ajax.js'
export default {
    name: 'BoxOfficeList',
    components: {
    },
    data() {
        return {
            list: [],
            targetDt: '20230510',
            status
        };
    },
    created() {
    },
    methods: {
        async search() {
            console.log(this.targetDt);
            let res = await kobisAxios({
                method: 'get',
                url : '/searchDailyBoxOfficeList.json',
                params: {
                    key: "f5eef3421c602c6cb7ea224104795888",
                    targetDt: this.targetDt, 
                },
                }
            ); 
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList);
            this.list = res.data.boxOfficeResult.dailyBoxOfficeList;
        },
    },
};
</script>

<style scoped>


#overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left : 0px;
    z-index: 99;
    background: rgba(red, green, blue, 0.1);
}
</style>