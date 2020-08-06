<template>
  <div id="app">
    <vMainWrapper/>
    <vSelect
        :options="options"
        @select="optionSelect"
        :selected="selected"
    />
    <p>Selected option goes here: {{ selected }}</p>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'
import vSelect from './components/v-select'
export default {
  name: 'App',
  data() {
    return {
      options: [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 },
        { name: 'Option 4', value: 4 },
        { name: 'Option 5', value: 5 }
      ],
      selected: 'Select'
    }
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    }
  },
  components: {
    vMainWrapper,
    vSelect
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
