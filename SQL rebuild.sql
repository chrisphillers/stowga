

CREATE TABLE warehouses (
id TEXT UNIQUE,
name TEXT,
location TEXT,
latitude FLOAT(2),
longitude FLOAT(2),
rating FLOAT(2),
temperature TEXT,
capacity_sq_ft NUMERIC,
PRIMARY KEY (id)
)

--To import csv to postgres (directory path as required)

-COPY warehouses FROM ‘/warehouses.csv’ WITH FORMAT csv;

--Run the below after installing PostGIS

SELECT AddGeometryColumn('warehouses', 'geom', 4326, 'POINT', 2); 
UPDATE warehouses SET geom = ST_SetSRID(ST_MakePoint(longitude, latitude), 4326);  


