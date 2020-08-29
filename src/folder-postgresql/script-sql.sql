-- Table: public.contacts

-- DROP TABLE public.contacts;

CREATE TABLE public.contacts
(
    state text COLLATE pg_catalog."default",
    name text COLLATE pg_catalog."default",
    id integer NOT NULL DEFAULT nextval('contacts_id_seq'::regclass),
    email text COLLATE pg_catalog."default",
    city text COLLATE pg_catalog."default",
    CONSTRAINT contacts_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.contacts
    OWNER to postgres;