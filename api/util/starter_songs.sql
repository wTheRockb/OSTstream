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


--
-- Data for Name: api_playlistmembership; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_playlistmembership (id, date_added, playlist_id_id, track_id_id) FROM stdin;
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: api_user_groups; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	api	user
2	api	gameseries
3	api	game
4	api	album
5	api	track
6	api	playlist
7	api	playlistmembership
8	admin	logentry
9	auth	permission
10	auth	group
11	contenttypes	contenttype
12	sessions	session
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add user	1	add_user
2	Can change user	1	change_user
3	Can delete user	1	delete_user
4	Can view user	1	view_user
5	Can add game series	2	add_gameseries
6	Can change game series	2	change_gameseries
7	Can delete game series	2	delete_gameseries
8	Can view game series	2	view_gameseries
9	Can add game	3	add_game
10	Can change game	3	change_game
11	Can delete game	3	delete_game
12	Can view game	3	view_game
13	Can add album	4	add_album
14	Can change album	4	change_album
15	Can delete album	4	delete_album
16	Can view album	4	view_album
17	Can add track	5	add_track
18	Can change track	5	change_track
19	Can delete track	5	delete_track
20	Can view track	5	view_track
21	Can add playlist	6	add_playlist
22	Can change playlist	6	change_playlist
23	Can delete playlist	6	delete_playlist
24	Can view playlist	6	view_playlist
25	Can add playlist membership	7	add_playlistmembership
26	Can change playlist membership	7	change_playlistmembership
27	Can delete playlist membership	7	delete_playlistmembership
28	Can view playlist membership	7	view_playlistmembership
29	Can add log entry	8	add_logentry
30	Can change log entry	8	change_logentry
31	Can delete log entry	8	delete_logentry
32	Can view log entry	8	view_logentry
33	Can add permission	9	add_permission
34	Can change permission	9	change_permission
35	Can delete permission	9	delete_permission
36	Can view permission	9	view_permission
37	Can add group	10	add_group
38	Can change group	10	change_group
39	Can delete group	10	delete_group
40	Can view group	10	view_group
41	Can add content type	11	add_contenttype
42	Can change content type	11	change_contenttype
43	Can delete content type	11	delete_contenttype
44	Can view content type	11	view_contenttype
45	Can add session	12	add_session
46	Can change session	12	change_session
47	Can delete session	12	delete_session
48	Can view session	12	view_session
\.


--
-- Data for Name: api_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.api_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2019-02-24 21:28:47.496655-08
2	api	0001_initial	2019-02-24 21:28:47.563261-08
3	admin	0001_initial	2019-02-24 21:28:47.578054-08
4	admin	0002_logentry_remove_auto_add	2019-02-24 21:28:47.582812-08
5	admin	0003_logentry_add_action_flag_choices	2019-02-24 21:28:47.587352-08
6	contenttypes	0002_remove_content_type_name	2019-02-24 21:28:47.607483-08
7	auth	0001_initial	2019-02-24 21:28:47.645533-08
8	auth	0002_alter_permission_name_max_length	2019-02-24 21:28:47.651255-08
9	auth	0003_alter_user_email_max_length	2019-02-24 21:28:47.656847-08
10	auth	0004_alter_user_username_opts	2019-02-24 21:28:47.662249-08
11	auth	0005_alter_user_last_login_null	2019-02-24 21:28:47.667098-08
12	auth	0006_require_contenttypes_0002	2019-02-24 21:28:47.668364-08
13	auth	0007_alter_validators_add_error_messages	2019-02-24 21:28:47.674357-08
14	auth	0008_alter_user_username_max_length	2019-02-24 21:28:47.679534-08
15	auth	0009_alter_user_last_name_max_length	2019-02-24 21:28:47.684468-08
16	sessions	0001_initial	2019-02-24 21:28:47.691515-08
17	api	0002_auto_20190225_0532	2019-02-24 21:37:16.213696-08
18	api	0003_game_publish_date	2019-02-24 21:48:17.721059-08
19	api	0004_auto_20190228_0424	2019-02-27 20:24:36.235503-08
20	api	0005_auto_20190228_0425	2019-02-27 20:25:36.690013-08
21	api	0006_auto_20190228_0427	2019-02-27 20:27:25.272832-08
22	api	0007_album_series	2019-02-27 20:33:05.001642-08
23	api	0008_auto_20190228_0522	2019-02-27 21:25:16.009924-08
24	auth	0010_alter_group_name_max_length	2019-12-23 20:42:29.183432-08
25	auth	0011_update_proxy_permissions	2019-12-23 20:42:29.202068-08
26	api	0009_auto_20200119_1728	2020-01-19 09:28:33.355766-08
27	api	0010_auto_20200119_1733	2020-01-19 09:33:31.798764-08
28	api	0011_auto_20200119_1809	2020-01-19 10:09:12.659439-08
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: api
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
\.


--
-- Name: api_album_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_album_id_seq', 3, true);


--
-- Name: api_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_game_id_seq', 1, false);


--
-- Name: api_playlist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_playlist_id_seq', 1, false);


--
-- Name: api_playlistmembership_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_playlistmembership_id_seq', 1, false);


--
-- Name: api_track_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_track_id_seq', 24, true);


--
-- Name: api_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_user_groups_id_seq', 1, false);


--
-- Name: api_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_user_id_seq', 1, false);


--
-- Name: api_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.api_user_user_permissions_id_seq', 1, false);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 48, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 12, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: api
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 28, true);


--
-- PostgreSQL database dump complete
--

