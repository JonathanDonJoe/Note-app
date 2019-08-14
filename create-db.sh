createdb note-api
psql -f ./database/schema.sql note-api
psql -f ./database/seed.sql note-api