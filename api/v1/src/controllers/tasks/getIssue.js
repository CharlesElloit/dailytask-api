const pool = require("../../config/database");
const issuesQueries = require("./query");

async function getIssue(req, res) {
  const { id } = req.params;
  // console.log(params)
  try {
    const issues = await pool.query(issuesQueries.GET_ISSUE_QUERY, [id]);
    if (issues.rowCount <= 0) {
      return res.status(404).json({
        totalCount: issues.rowCount,
        data: [],
        status: {
          code: 404,
          success: true,
          message: `Issue with the ${id} not found`,
        },
      });
    }

    return res.status(200).json({
      totalCount: issues.rowCount,
      data: issues.rows,
      status: {
        code: 200,
        success: true,
        message: "Successful retreived issue.",
      },
    });
  } catch (error) {
    if (error) {
      console.log(error);
      return { error };
    }
  }
}

module.exports = getIssue;
