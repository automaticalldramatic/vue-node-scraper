<template>
    <div>
        <form role="form" @submit="search(formParams.url)">
            <h2>Page Insights</h2>
            <p>Enter a URL to get information about a URL</p>
            <div class="form-group">
                <label for="inpURL">Website address</label>
                <input type="url" id="inpURL" placeholder="http://" v-model="formParams.url">
            </div>
            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
        <div class="alert alert-danger" v-if="error.data.message != ''">
            <br><hr><br>
            <p>{{ error.data.message }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'form-com',
    data () {
        return {
            formParams: {
                url: ''
            }
        }
    },
    methods: {
        search (inputURL) {
            if (inputURL === '') {
                return
            }
            let URL = inputURL.indexOf('http') > -1 ? inputURL : 'http://' + inputURL
            this.$store.dispatch('search', URL)
        }
    },
    computed: {
        error () {
            return this.$store.getters.getError
        }
    },
    watch: {
        error (newError) {}
    }

}
</script>

<style scoped>

</style>
