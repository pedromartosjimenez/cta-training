start:
	docker-compose up -d
	docker-compose logs -f

stop:
	docker-compose down