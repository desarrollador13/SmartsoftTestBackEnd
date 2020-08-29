--UPDATE pg_database SET datallowconn = 'false' 
--WHERE datname = 'bancolombia1';

--ALTER DATABASE bancolombia1 CONNECTION LIMIT 1;

--SELECT pg_terminate_backend(pid) 
--FROM pg_stat_activity WHERE datname = 'prueba';

-- SELECT pg_terminate_backend(pid) 
-- FROM pg_stat_activity 
-- WHERE datname='bancolombia1' AND pid<>pg_backend_pid();

--DROP DATABASE IF EXISTS bancolombia1;
CREATE DATABASE bancolombia1
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    --LC_COLLATE = 'Spanish_Colombia.1252'
    --LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

--UPDATE pg_database SET datallowconn = 'true' WHERE datname = 'bancolombia1';
---========================================================
-- SEQUENCE: public.Employee_Id_seq

-- DROP SEQUENCE public."Employee_Id_seq";

CREATE SEQUENCE public."Employee_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
ALTER SEQUENCE public."Employee_Id_seq"
    OWNER TO postgres;

-- Table: public.Employee
-- DROP TABLE public."Employee";
CREATE TABLE public."Employee"
(
    "Id" integer NOT NULL DEFAULT nextval('"Employee_Id_seq"'::regclass),
    "Nombre" text COLLATE pg_catalog."default",
    "IdRankEmployee" integer,
    "IdGroupEmployee" integer,
    CONSTRAINT "Employee_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."Employee"
    OWNER to postgres;

--***********************************
--***********************************
-- SEQUENCE: public.GroupEmployee_Id_seq
-- DROP SEQUENCE public."GroupEmployee_Id_seq";
CREATE SEQUENCE public."GroupEmployee_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
ALTER SEQUENCE public."GroupEmployee_Id_seq"
    OWNER TO postgres;

-- Table: public.GroupEmployee
-- DROP TABLE public."GroupEmployee";
CREATE TABLE public."GroupEmployee"
(
    "Id" integer NOT NULL DEFAULT nextval('"GroupEmployee_Id_seq"'::regclass),
    "Nombre" text COLLATE pg_catalog."default",
    "Codigo" text COLLATE pg_catalog."default",
    CONSTRAINT "GroupEmployee_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."GroupEmployee"
    OWNER to postgres;


--***********************************
--***********************************
-- SEQUENCE: public.RankEmployee_Id_seq
-- DROP SEQUENCE public."RankEmployee_Id_seq";
CREATE SEQUENCE public."RankEmployee_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
ALTER SEQUENCE public."RankEmployee_Id_seq"
    OWNER TO postgres;

-- Table: public.RankEmployee
-- DROP TABLE public."RankEmployee";
CREATE TABLE public."RankEmployee"
(
    "Id" integer NOT NULL DEFAULT nextval('"RankEmployee_Id_seq"'::regclass),
    "Nombre" text COLLATE pg_catalog."default",
    "Codigo" text COLLATE pg_catalog."default",
    CONSTRAINT "RankEmployee_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."RankEmployee"
    OWNER to postgres;

---========================================================

INSERT INTO public."RankEmployee"( "Nombre", "Codigo") VALUES ('Jefe', '1010');
INSERT INTO public."RankEmployee"( "Nombre", "Codigo") VALUES ('"Empleado"', '1011');

----------------

INSERT INTO public."GroupEmployee"("Nombre", "Codigo") VALUES ('Contabilidad', '10');
INSERT INTO public."GroupEmployee"("Nombre", "Codigo")VALUES ('Comercial', '11');

---------------
INSERT INTO public."Employee"("Nombre", "IdRankEmployee", "IdGroupEmployee") VALUES ('Jonathan Pinto', '2', '2');
INSERT INTO public."Employee"("Nombre", "IdRankEmployee", "IdGroupEmployee") VALUES ('Luisa Rosales', '2', '1');
INSERT INTO public."Employee"("Nombre", "IdRankEmployee", "IdGroupEmployee") VALUES ('Luis Ramirez', '2', '1');
INSERT INTO public."Employee"("Nombre", "IdRankEmployee", "IdGroupEmployee") VALUES ('Angela Ramirez', '1', '1');
INSERT INTO public."Employee"("Nombre", "IdRankEmployee", "IdGroupEmployee") VALUES ('Esteban Lopez' ,'2', '2');
  
  