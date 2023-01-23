<template>
    <div>
        {{ city }}
    </div>
</template>

<script>
export default {
    props: [
        'city'
    ],
    data: function () {
        return {
            cities: {},
        };
    },

    // mounted: function () {
    //     this.axios.get('http://34.82.81.113:3000/students/' + this.id).then(response => {
    //         console.log(response.data)
    //         this.student = response.data;
    //     })
    // },
}
</script>

<style>

</style>