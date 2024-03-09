CREATE TABLE IF NOT EXISTS issues (
 	id SERIAL NOT NULL PRIMARY KEY UNIQUE
 	,ticket_no INTEGER NOT NULL
 	,vend_ticket_no INTEGER NOT NULL
 	,vend_assign_to VARCHAR NULL
 	,iss_name VARCHAR(100) NOT NULL
 	,iss_log_date DATE NOT NULL DEFAULT CURRENT_DATE
 	,iss_raise_date DATE NOT NULL
 	,iss_raise_by VARCHAR NOT NULL DEFAULT 'YBUL'
 	,iss_start_date DATE NOT NULL
 	,iss_due_date DATE NOT NULL
 	,iss_tot_date INTEGER NOT NULL
 	,iss_tot_date_lft INTEGER NOT NULL DEFAULT 0
 	,iss_priority PRIORITY_TYPE NOT NULL DEFAULT 'LOW'
 	,iss_asigned_to VARCHAR NOT NULL DEFAULT 'Charles Silvano'
 	,is_closed BOOLEAN NOT NULL DEFAULT FALSE
    ,is_reopened BOOLEAN NOT NULL DEFAULT FALSE
    ,reopen_count INTEGER NOT NULL DEFAULT 0
 	,iss_environment ENVIRONMENT_TYPE NOT NULL DEFAULT 'NONE'
 	,iss_status STATUS_TYPE NOT NULL DEFAULT 'BACKLOG' --[BACKLOG, IN_PROGRESS, IN_REVIEW, COMPLETED]
 	,iss_label VARCHAR[] NULL
 	,iss_reviewer VARCHAR NOT NULL DEFAULT 'Sarah Nakateregga'
 	,created_date DATE NOT NULL DEFAULT CURRENT_DATE
 	,updated_date DATE NOT NULL DEFAULT CURRENT_DATE
 );

 CREATE TYPE PRIORITY_TYPE AS ENUM ('LOW', 'MEDIUM', 'HIGH');
 CREATE TYPE ENVIRONMENT_TYPE AS ENUM ('PROD', 'DEV', 'UAT', 'NONE');
 CREATE TYPE STATUS_TYPE AS ENUM ('BACKLOG', 'IN_PROGRESS', 'IN_REVIEW', 'COMPLETED');