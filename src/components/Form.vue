<template>
    <div>
        <form role="form" @submit="search(formParams.url)">
            <h2>Page Insights</h2>
            <p>Enter a URL to get information about a URL</p>
            <div class="alert alert-danger" v-if="error">
                <p>{{ error }}</p>
            </div>
            <div class="form-group">
                <label for="inpURL">Website address</label>
                <input type="url" id="inpURL" placeholder="http://" v-model="formParams.url">
            </div>
            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'form-com',
    data () {
        return {
            formParams: {
                url: ''
            },
            error: ''
        }
    },
    methods: {
        search (inputURL) {
            // myInput.indexOf("http") > -1 ? myInput : location.protocol + "//" + myInput
            // if (!this.key.trim()) return

            // console.log(this.key)
            this.$store.dispatch('search', inputURL)
        }
    }

}
</script>

<style scoped>

</style>
