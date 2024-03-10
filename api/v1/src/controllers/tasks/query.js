const GET_ISSUES_QUERY = `
  SELECT * FROM issues;
`;

const GET_ISSUE_QUERY = `
  SELECT * FROM issues WHERE id = $1;
`;

const CREATE_ISSUE_QUERY = `
  INSERT INTO issues (ticket_no, vend_ticket_no, vend_assign_to, iss_name, iss_log_date, iss_raise_date, 
    iss_start_date, iss_due_date, iss_tot_date, iss_label, description)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  RETURNING id;
`;

const DELETE_ISSUE_QUERY = `
  DELETE FROM issues WHERE id = $1 RETURNING id;
`;

module.exports = {
  GET_ISSUE_QUERY,
  GET_ISSUES_QUERY,
  CREATE_ISSUE_QUERY,
  DELETE_ISSUE_QUERY,
};
