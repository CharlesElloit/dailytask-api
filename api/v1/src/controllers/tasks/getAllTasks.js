const pool = require("../../config/database");
const issuesQueries = require("./query");

async function getIssues(req, res) {
  try {
    const issues = await pool.query(issuesQueries.GET_ISSUES_QUERY);
    if (issues.rowCount <= 0) {
      return res.status(200).json({ data: [] });
    }

    return res.status(200).json({
      totalCount: issues.rowCount,
      data: issues.rows,
      status: {
        code: 200,
        success: true,
        message: "Successful retreived issues",
      },
    });
  } catch (error) {
    if (error) {
      console.log(error);
      return { error };
    }
  }
}

module.exports = getIssues;
