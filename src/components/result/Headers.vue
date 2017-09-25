<template>
    <div>
        <h5>
            Information on headings found<br>
            <em>Total: {{headersObj.total}}</em>
        </h5>
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>h1</th>
                    <th>h2</th>
                    <th>h3</th>
                    <th>h4</th>
                    <th>h5</th>
                    <th>h6</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Headers</td>
                    <td>{{headersObj.h1.length}}</td>
                    <td>{{headersObj.h2.length}}</td>
                    <td>{{headersObj.h3.length}}</td>
                    <td>{{headersObj.h4.length}}</td>
                    <td>{{headersObj.h5.length}}</td>
                    <td>{{headersObj.h6.length}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    data () {
        return {
            headersObj: this.$store.getters.getHeadersToDisplay
        }
    }
}
</script>
