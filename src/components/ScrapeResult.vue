<template>
    <div class="result" v-if="scrapedObj.fromParser">
        <h3>Current({{ scrapedObj.url }})</h3>
    </div>
</template>

<script>

export default {
    data () {
        return {
            // 'url ': this.$store.getters.scrapedURL
        //     'a': [],
        //     'html': {},
        //     'title': '',
        //     'headers': {},
        //     'forms': ''
        }
    },
    computed: {

        scrapedObj () {
            return this.$store.getters.scrapedObj
        }

    },
    watch: {
        scrapedObj (newObj) {}
    }
}
</script>
