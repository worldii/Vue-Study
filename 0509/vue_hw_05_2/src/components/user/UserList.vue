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
    <h2>사용자 목록</h2>
    <h4>등록된 사용자의 수 : {{ userCnt }}</h4>
    <div v-if="users.length">
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
              <a class="user-link" href="#">{{
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
    <div v-else>등록된 사용자가 없습니다.</div>
  </div>
</_________>
<_________>
export default {
  name: "UserList",
  data() {
    return {
      users: [],
    };
  },
  computed: {
    userCnt() {
      return this.users.length;
    },
  },
  created() {
    let userList = JSON.parse(localStorage.getItem("userList"));
    if (userList) {
      this.users = userList;
    }
  },
};
</_________> -->
