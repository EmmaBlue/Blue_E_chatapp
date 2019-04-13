export default {

    props: ['alrt'],

    template: `
        <section id="alert-container">
            <p id="alert">{{alrt}}</p>
        </section>
    `,
    data: function() {
        return {
           // matchedID: this.$parent.socketID == this.msg.id

        }
    }
}