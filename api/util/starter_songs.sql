--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

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
-- Data for Name: api_game; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_game (id, title, publisher, series_id, publish_date) FROM stdin;
\.


--
-- Data for Name: api_album; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_album (id, title, publish_date, image_path, game_id_id, series_id) FROM stdin;
1	Phantasy Star Online Songs of RAGOL Odyssey Soundtrack ~Episode 1&2~ (DISC01)	\N	/Users/rock/Dropbox/Public/OST/Phatansy Star Online/album.jpg	\N	\N
2	The Elder Scrolls III - Morrowind OST	\N	/Users/rock/Dropbox/Public/OST/Morrowind/Album.jpg	\N	\N
3	Pokemon Blue	\N	\N	\N	\N
\.


--
-- Data for Name: api_gameseries; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_gameseries (title) FROM stdin;
Pokemon
Phantasy Star
The Elder Scrolls
\.


--
-- Data for Name: api_user; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_user (id, date_joined, email, first_name, is_active, is_staff, is_superuser, last_login, last_name, password, username) FROM stdin;
\.


--
-- Data for Name: api_playlist; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_playlist (id, title, owner_id_id) FROM stdin;
\.


--
-- Data for Name: api_track; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_track (id, title, artist, album_id_id, file_path, "order") FROM stdin;
1	Image of hero	Fumie Kumatani	1	\N	1
2	Prenotion	Hideaki Kobayashi	1	\N	1
3	The Prophecy Fulfilled	Jeremy Soule	2	\N	1
4	Fate's Quickening	Jeremy Soule	2	\N	1
5	Knight's Charge	Jeremy Soule	2	\N	1
6	Bright Spears, Dark Blood	Jeremy Soule	2	\N	1
7	Shed Your Travails	Jeremy Soule	2	\N	1
8	Nerevar Rising (Morrowind Title Song)	Jeremy Soule	2	\N	1
9	Darkened Depths	Jeremy Soule	2	\N	1
10	Over The Next Hill	Jeremy Soule	2	\N	1
11	Silt Sunrise	Jeremy Soule	2	\N	1
12	Stormclouds on the Battlefield	Jeremy Soule	2	\N	1
13	Introduction	Jeremy Soule	2	\N	1
14	Caprice	Jeremy Soule	2	\N	1
15	Triumphant	Jeremy Soule	2	\N	1
16	Drumbeat of the Dunmer	Jeremy Soule	2	\N	1
17	Nerevar Rising (Morrowind Title Song Reprise)	Jeremy Soule	2	\N	1
18	Ambush	Jeremy Soule	2	\N	1
19	Dance of Swords	Jeremy Soule	2	\N	1
20	Peaceful Waters	Jeremy Soule	2	\N	1
21	The Road Most Travelled	Jeremy Soule	2	\N	1
22	Blessing of Vivec	Jeremy Soule	2	\N	1
23	Hunter's Pursuit	Jeremy Soule	2	\N	1
24	Pallet Town's Theme	Junichi Masuda	3	\N	1
\.


