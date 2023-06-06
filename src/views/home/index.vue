<template>
  <div class="home">
    <h1>一级路由：home</h1>
    <h2>setup</h2>
    <div>----------------</div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <button @click="sayHello">button</button>
    <br>
    <button @click="test1">测试在Vue2的配置中读取Vue3的数据</button>
    <p>可以读取，向下兼容</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { h } from 'vue'

export default defineComponent({
  name: 'home',
  data() {
    return {
      a: '123'
    }
  },
  methods: {
    test1() {
      console.log(this.a)
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
      this.sayHello()
    }
  },
  // 此处只是测试setup，暂时不考虑响应式
  setup() {
    // data
    let name = 'zhangsan'
    let age = 18
    // methods
    function sayHello() {
      alert(`My name is ${name}, ${age} years old, Hello!`)
    }
    // setup的第一种返回值：返回一个对象，对象中的属性、方法，在模板中均可以直接使用
    return {
      name,
      age,
      sayHello
    }
    // setup的第二种返回值：返回一个渲染函数，可以自定义渲染内容
    // return () => {
    //   h('h1', 'hxh')
    // }
  }
})
</script>

<style lang="scss" scoped>
.home {
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }
}
</style>
