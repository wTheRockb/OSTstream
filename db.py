
import psycopg2
##DATABASE CONNECTION
mode = "local"


def connection():
	if mode == "prod":
		urlparse.uses_netloc.append("postgres")
		url = urlparse.urlparse(os.environ["DATABASE_URL"])

		return psycopg2.connect(
		        database=url.path[1:],
		        user=url.username,
		        password=url.password,
		        host=url.hostname,
		        port=url.port
		)
	
	elif mode == "local":
		return psycopg2.connect("dbname=oststream")
		