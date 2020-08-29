--========CREATE DATABASE
--====================================================
-- Database: prueba_app
-- DROP DATABASE prueba_app;
CREATE DATABASE prueba_app
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

---========================================================
-- SEQUENCE: public.TableType_Id_seq
-- DROP SEQUENCE public."TableType_Id_seq";
CREATE SEQUENCE public."TableType_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
ALTER SEQUENCE public."TableType_Id_seq"
    OWNER TO postgres;

-- Table: public.TableType
-- DROP TABLE public."TableType";
CREATE TABLE public."TableType"
(
    "Id" integer NOT NULL DEFAULT nextval('"TableType_Id_seq"'::regclass),
    "Name" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "TableType_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."TableType"
    OWNER to postgres;

--*************TABLESS**********************
--***********************************
-- SEQUENCE: public.TableStructure_Id_seq
-- DROP SEQUENCE public."TableStructure_Id_seq";
CREATE SEQUENCE public."TableStructure_Id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;
ALTER SEQUENCE public."TableStructure_Id_seq"
    OWNER TO postgres;
-- Table: public.TableStructure
-- DROP TABLE public."TableStructure";
CREATE TABLE public."TableStructure"
(
    "Id" integer NOT NULL DEFAULT nextval('"TableStructure_Id_seq"'::regclass),
    "TableTypeId" integer,
    "Header" text COLLATE pg_catalog."default",
    "dataType" text  COLLATE pg_catalog."default",
    format text COLLATE pg_catalog."default" DEFAULT NULL::text,
    required bit(1),
    CONSTRAINT "TableStructure_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "TableStructure_TableTypeId_fkey" FOREIGN KEY ("TableTypeId")
        REFERENCES public."TableType" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."TableStructure"
    OWNER to postgres;


--*************TABLESS**********************
--***********************************
-- Table: public.TableData1
-- DROP TABLE public."TableData1";
CREATE TABLE public."TableData1"
(
    "T1C1" integer NOT NULL,
    "T1C2" text COLLATE pg_catalog."default" NOT NULL,
    "T1C3" integer,
    "T1C4" date
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
ALTER TABLE public."TableData1"
    OWNER to postgres;


--*************TABLESS**********************
--***********************************
-- Table: public.TableData2
-- DROP TABLE public."TableData2";
CREATE TABLE public."TableData2"
(
    "T2C1" integer NOT NULL,
    "T2C2" text COLLATE pg_catalog."default" NOT NULL DEFAULT NULL::text,
    "T2C3" integer,
    "T2C4" date,
    "T2C5" integer
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."TableData2"
    OWNER to postgres;

--*************TABLESS**********************
--***********************************
-- Table: public.TableData3
-- DROP TABLE public."TableData3";
CREATE TABLE public."TableData3"
(
    "T3C1" integer NOT NULL,
    "T3C2" text COLLATE pg_catalog."default" NOT NULL DEFAULT NULL::text,
    "T3C3" date
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."TableData3"
    OWNER to postgres;



--*************INSERT**********************
--***********************************
INSERT INTO public."TableType"("Name") VALUES ('Tabla 1');
INSERT INTO public."TableType"("Name") VALUES ('Tabla 2');
INSERT INTO public."TableType"("Name") VALUES ('Tabla 3');
--*************INSERT**********************
--***********************************
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (1, 'T1C1' , 'Int', '1');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (1, 'T1C2' , 'String', '1');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (1, 'T1C3' , 'Int', '0');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "format", "required") VALUES (1, 'T1C4' , 'Date', 'YYYY-MM-DD', '0');

INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (2, 'T2C1' , 'String', '1');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (2, 'T2C2' , 'String', '0');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (2, 'T2C3' , 'Int', '0');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "format", "required") VALUES (2, 'T2C4' , 'Date', 'YYYY-MM-DD', '1');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (2, 'T2C5' , 'Number', '1');


INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (3, 'T3C1' , 'Int', '1');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "required") VALUES (3, 'T3C2' , 'String', '1');
INSERT INTO public."TableStructure"("TableTypeId", "Header", "dataType", "format", "required") VALUES (3, 'T3C3' , 'Date', 'HH:mm:ss', '1');

