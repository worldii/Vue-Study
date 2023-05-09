<template>
    <div>
      <div>time: {{ time }}</div>
      <button @click="start">start</button>
      <button @click="stop">stop</button>
      <button @click="reset">reset</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
        time: 0,
        timer: null,
      };
    },
    methods: {
      start() {
        //let that = this;

        // arrow function을 사용하면 this가 Vue instance를 가리키게 된다.
        this.timer = setInterval(() => {
          this.time++;
        }, 1000);
        // 만약 arrow function을 사용하지 않으면 this가 window를 가리키게 된다.
        // this.timer = setInterval(function () {
        //  console.log(that);
        //  that.time++;
        //  해결 방법 : that = this; 를 사용한다.
        //   this.time++;
        // }, 1000);
      },
      stop() {
        clearInterval(this.timer);
      },
      reset() {
        this.time = 0;
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
