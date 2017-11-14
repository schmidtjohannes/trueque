.PHONY: run-mongo-dev stop-mongo-dev

stop-mongo-dev:
	docker rm -f mean-mongo

run-mongo-dev:
	docker run --name mean-mongo -p 27017:27017 -d mongo
	sleep 5
	docker exec -it mean-mongo mongo localhost:27017/mean --eval 'db.users.insert({"name":"John Doe"});'
