export default {

    props: ['alrt'],

    template: `
        <!--<p class="new-message" :class="{'my-message' : matchedID}">
                <span>{{msg.message.name}} says:</span>
                {{msg.message.content}}
        </p>-->
        <p>{{alrt}}</p>
    `,
    data: function() {
        return {
           // matchedID: this.$parent.socketID == this.msg.id

        }
    }
}