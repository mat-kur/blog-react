const Comment = require("../../db/models/user-comment-model");
const Report = require("../../db/models/comment-report-model");


class ReportedComment {

    async sendReportedComments (req, res)  {

        try {
            const reportedComments = await Report.find({status: 1})
                .populate('author', 'username avatar')
            res.json(reportedComments)
        } catch (e) {
            console.log(e)
        }

}

}

module.exports = new ReportedComment()