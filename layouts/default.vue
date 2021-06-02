<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

nav.fixed {
  transition: background-color 0.5s;
}

nav .nav-search-bar {
  transition: display 0.5s;
}
</style>

<script>
export default {
  name: 'default',
  mounted() {
    window.onscroll = () => {
      const header = document.querySelector('nav.fixed')
      const topSearch = document.querySelector('nav .nav-search-bar')

      if (scrollY > 50) {
        header.classList.remove('bg-transparent')
        header.classList.add('bg-primary')
        topSearch.classList.remove('hidden')
      } else {
        header.classList.remove('bg-primary')
        header.classList.add('bg-transparent')
        topSearch.classList.add('hidden')
      }
    }
  },
}
</script>
