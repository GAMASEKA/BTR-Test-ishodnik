<template>
    <button  v-on:click="setBool" v-if=home>Переход на вторую старницу</button>
    <button v-on:click="setBool" v-else>Возврат</button>
</template>

<script>
    export default {
            data() {
                return {
                    home: false
                }
            },
            methods: {
               setBool: function () {
                    this.home = !this.home;
                    this.$emit('home', this.home);
                }
            }, 
            
    }
</script>