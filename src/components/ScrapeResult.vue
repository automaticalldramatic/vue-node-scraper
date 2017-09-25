<template>
    <div class="result" v-if="scrapedObj.fromParser">
        <button class="float-left go-back" @click="back">
            &#x2190;
        </button>
        <h6 class="float-right result-url-heading">Results from <a :href="scrapedObj.url" target="_blank">{{ scrapedObj.url }}</a></h6>
        <div class="clearfix"></div>
        <hr>
        <titleInfo></titleInfo>
        <anchorsInfo></anchorsInfo>
        <headersInfo></headersInfo>
    </div>
</template>

<script>

import Anchors from '@/components/result/Anchors.vue'
import TitleInfo from '@/components/result/Titles.vue'
import FormsInfo from '@/components/result/Forms.vue'
import HeadersInfo from '@/components/result/Headers.vue'

export default {
    components: {
        'anchorsInfo': Anchors,
        'titleInfo': TitleInfo,
        'formsInfo': FormsInfo,
        'headersInfo': HeadersInfo
    },
    data () {
        return {}
    },
    computed: {

        scrapedObj () {
            return this.$store.getters.scrapedObj
        }

    },
    watch: {
        scrapedObj (newObj) {}
    },
    methods: {
        back () {
            return this.$store.commit('reset')
        }
    }
}
</script>
<style scoped>
.result-url-heading {
    line-height: 1em;
    padding-top: 1em;
}
.result {
    margin: 1em auto;
}
.go-back {
    border: 1px solid;
    border-radius: 20px;
    font-size: 1em;
    padding: 0px 10px;
}
</style>
