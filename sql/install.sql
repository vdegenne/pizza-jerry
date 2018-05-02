\i sql/uninstall.sql

create role testdbuser with password 'password' login;
create database pizzajerry owner testdbuser;
\connect pizzajerry

\i sql/structure.sql
\i sql/data.sql
\i sql/post-data.sql
