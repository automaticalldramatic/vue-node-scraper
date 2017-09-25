<template>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th class="">{{scrapedObj.data.title}}</th>
            </tr>
            <tr>
                <th>HTML Version</th>
                <th class="">{{scrapedObj.data.html.version}}</th>
            </tr>
            <tr>
                <th>There is a </th>
                <th v-if="scrapedObj.data.forms == 0" class="">This page has no forms</th>
                <th v-if="scrapedObj.data.forms > 0" class="">{{scrapedObj.data.forms * 10}} % chance of this page having a login form</th>
            </tr>
        </thead>
    </table>
</template>

<script>

export default {
    data () {
        return {
            scrapedObj: this.$store.getters.scrapedObj
        }
    }
}
</script>
