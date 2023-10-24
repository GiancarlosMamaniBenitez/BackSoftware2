--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-10-23 21:36:05

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

--
-- TOC entry 4788 (class 0 OID 16560)
-- Dependencies: 216
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.usuario VALUES (1, 'fabrizio prueba', 'post prueba', 'prueba@gmail.com', '123456', 'usuario', NULL);
INSERT INTO public.usuario VALUES (2, 'fabrizio prueba 2', 'post prueba 2', 'prueba2@gmail.com', '123456', 'usuario2', NULL);
INSERT INTO public.usuario VALUES (3, 'prueba front', 'front end', 'front@gmail.com', '123456', 'front', NULL);


--
-- TOC entry 4790 (class 0 OID 16569)
-- Dependencies: 218
-- Data for Name: tarjeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.tarjeta VALUES (1, 'tarjeta de crédito', 123, '1111 2222 3333 4444', 'Visa', 1, '08', NULL, NULL, NULL);
INSERT INTO public.tarjeta VALUES (2, 'tarjeta de debito', 123, '1111 2222 3333 4444', 'Visa', 1, '08', NULL, NULL, NULL);


--
-- TOC entry 4796 (class 0 OID 0)
-- Dependencies: 217
-- Name: tarjeta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tarjeta_id_seq', 2, true);


--
-- TOC entry 4797 (class 0 OID 0)
-- Dependencies: 215
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 3, true);


-- Completed on 2023-10-23 21:36:05

--
-- PostgreSQL database dump complete
--

