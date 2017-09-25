<template>
    <div>
        <form role="form" @submit="search(formParams.url)">
            <fieldset>
                <label for="inpURL">Website address</label>
                <input type="url" id="inpURL" placeholder="http://" v-model="formParams.url">
                <small v-if="error.data.message != ''" class="error">{{ error.data.message }}</small>
                <input class="button-primary" type="submit" value="Send">
            </fieldset>
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
#inpURL {
    margin-bottom: 1em 0;
}
.error {
    color: #ff0000;
}
.error:after {
    content: " ";
    display: block;
}
</style>
