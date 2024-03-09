const pool = require("../../config/database");
const issuesQueries = require("./query");

async function createIssue(req, res) {
  const {
    ticket_no, vend_ticket_no, vend_assign_to, iss_name, iss_log_date,
    iss_raise_date, iss_start_date, iss_due_date, iss_tot_date, iss_label, description,
  } = req.body;

  try {
    const issues = await pool.query(issuesQueries.CREATE_ISSUE_QUERY,
      [ticket_no, vend_ticket_no, vend_assign_to, iss_name, iss_log_date,
        iss_raise_date, iss_start_date, iss_due_date, iss_tot_date, [...iss_label], description,
      ]);
    if (issues.rowCount !== 1) {
      return res.status(201).json({
        totalCount: issues.rowCount,
        data: [],
        status: {
          code: 400,
          success: false,
          message: "Issue is not created successful, please check your input.",
        },
      });
    }

    return res.status(200).json({
      totalCount: issues.rowCount,
      data: issues.rows,
      status: {
        code: 200,
        success: true,
        message: "Issue created Successful.",
      },
    });
  } catch (error) {
    if (error) {
      console.log(error);
      return { error };
    }
  }
}

module.exports = createIssue;
