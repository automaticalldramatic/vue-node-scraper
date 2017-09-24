<template>
    <div class="wrapper">
        <div class="grid container grid--gutters grid--full">
            <div class="hello">
                <h1></h1>
                <form-com></form-com>
            </div>
            <div class="result">
                <scraperesult></scraperesult>
            </div>
        </div>
    </div>
</template>

<script>
import ScrapeResult from '@/components/ScrapeResult.vue'
import FormCom from '@/components/Form.vue'

export default {
    name: 'home',
    components: {
        'form-com': FormCom,
        'scraperesult': ScrapeResult
    },
    data () {
        return {

        }
    },
    methods: {
        checkInputProtocol: () => {
            // myInput : myInput.indexOf("http") > -1 ? myInput : location.protocol + "//" + myInput
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
