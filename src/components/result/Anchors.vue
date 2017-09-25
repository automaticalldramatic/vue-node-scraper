<template>
    <div>
        <h5>
            Information on anchors found<br>
            <em>Total: {{anchorsObj.total}}</em>
        </h5>
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Total</th>
                    <th>Outgoing</th>
                    <th>Internal</th>
                    <th>Broken</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Links</td>
                    <td>{{anchorsObj.total}}</td>
                    <td>{{anchorsObj.external}}</td>
                    <td>{{anchorsObj.internal}}</td>
                    <td>{{anchorsObj.skipped}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
    data () {
        return {
            anchorsObj: this.$store.getters.getAnchorsToDisplay
        }
    }
}
</script>
