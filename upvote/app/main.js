new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions() {
            // Sort in descending order
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes
            });
        }
    },
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(
                submission => submission.id === submissionId
            )
            submissionId.votes++;
        }
    }
});