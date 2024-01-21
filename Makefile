build:
		docker-compose build --no-cache

start:
		docker-compose up

restart:
		docker-compose restart

stop:
		docker-compose down

watch:
		npm run watch

dependencies:
		npm install
		npm install -g sass