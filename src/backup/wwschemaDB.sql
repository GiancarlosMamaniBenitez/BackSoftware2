--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-10-23 21:35:21

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16569)
-- Name: tarjeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tarjeta (
    id integer NOT NULL,
    "cardsName" text NOT NULL,
    cvv integer NOT NULL,
    number text NOT NULL,
    "selectedCard" text NOT NULL,
    id_usuario integer NOT NULL,
    mm text NOT NULL,
    "savingGoal" integer,
    "spendingLimit" integer,
    yyyy text
);


ALTER TABLE public.tarjeta OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16568)
-- Name: tarjeta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tarjeta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tarjeta_id_seq OWNER TO postgres;

--
-- TOC entry 4794 (class 0 OID 0)
-- Dependencies: 217
-- Name: tarjeta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tarjeta_id_seq OWNED BY public.tarjeta.id;


--
-- TOC entry 216 (class 1259 OID 16560)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    nombres text,
    apellidos text,
    email text,
    contrasenia text,
    username text,
    categories text[]
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16559)
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_seq OWNER TO postgres;

--
-- TOC entry 4795 (class 0 OID 0)
-- Dependencies: 215
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- TOC entry 4640 (class 2604 OID 16572)
-- Name: tarjeta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tarjeta ALTER COLUMN id SET DEFAULT nextval('public.tarjeta_id_seq'::regclass);


--
-- TOC entry 4639 (class 2604 OID 16563)
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- TOC entry 4644 (class 2606 OID 16576)
-- Name: tarjeta tarjeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tarjeta
    ADD CONSTRAINT tarjeta_pkey PRIMARY KEY (id);


--
-- TOC entry 4642 (class 2606 OID 16567)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- TOC entry 4645 (class 2606 OID 16577)
-- Name: tarjeta fk_id_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tarjeta
    ADD CONSTRAINT fk_id_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id) NOT VALID;


-- Completed on 2023-10-23 21:35:21

--
-- PostgreSQL database dump complete
--

