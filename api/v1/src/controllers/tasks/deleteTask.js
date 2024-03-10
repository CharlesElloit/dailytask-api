const pool = require("../../config/database");
const { status } = require("../../constants");
const { DELETE_ISSUE_QUERY } = require("./query");

async function deleteIssue(req, res) {
  const { id } = req.params;
  // TODO:: validate the input.
  try {
    const issue = await pool.query(DELETE_ISSUE_QUERY, [id]);
    if (issue.rowCount <= 0) {
      return res.status(status.HTTP_400_BAD_REQUEST).json({
        totalCount: issue.rowCount,
        data: issue.rows,
        status: {
          code: status.HTTP_400_BAD_REQUEST,
          success: false,
          message: `Issue with the provided id ${id} is not found`,
        },
      });
    }
    return res.status(status.HTTP_200_OK).json({
      status: {
        code: status.HTTP_200_OK,
        success: true,
      },
      message: "issue deleted successful",
    });
  } catch (error) {
    return res.status(status.HTTP_500_INTERNAL_SERVER_ERROR).json({ message: "something went wrong. " });
  }
}

module.exports = deleteIssue;
