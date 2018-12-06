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

SELECT AddGeometryColumn('warehouses', 'geom', 4326, 'POINT', 2); 
UPDATE warehouses SET geom = ST_SetSRID(ST_MakePoint(longitude, latitude), 4326);  

--test sql 50Km

--SELECT name, location, temperature, capacity_sq_ft
--FROM warehouses  
--WHERE ST_DWithin(geom, ST_MakePoint(-2.5,53.2)::geography, 50000);

--COPY warehouses FROM ‘/warehouses.csv’ WITH FORMAT csv;

