<!--해당 부분(**) 삭제하고 아랫부분 주석 풀어 작업하세요-->
<!--***********************************************-->
<template>
  <div></div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<!--***********************************************-->
<!-- 
<_________>
  <div class="container">
    <div class="text-center">
      <input
        class="view"
        type="text"
        v-model="search"
        placeholder="이름을 입력하세요."
      />
      <button class="btn" @click="searchName">검색</button>
    </div>
    <br />
    <hr />
    <div>
      <h2>검색 결과</h2>
      <div v-if="users">
        <table class="user-list">
          <colgroup>
            <col style="width: 5%" />
            <col style="width: 40%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 15%" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>아이디</th>
              <th>이름</th>
              <th>이메일</th>
              <th>나이</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <a class="user-link" href="#" @click="detail(user.id)">{{
                  user.id
                }}</a>
              </td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.age }} 세</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>검색 결과가 없습니다.</div>
    </div>
    <br />
  </div>
</_________>
<_________>
export default {
  name: "UserSearch",
  data() {
    return {
      search: "",
      users: null,
    };
  },
  methods: {
    searchName() {
      let userList = JSON.parse(localStorage.getItem("userList"));

      this.users = [];
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].name.indexOf(this.search) >= 0) {
          this.users.push(userList[i]);
        }
      }
    },
  },
};
</_________> -->
