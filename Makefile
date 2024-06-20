.PHONY: all build
.DEFAULT_GOAL := help

all: help

help:
	@grep -E '^[a-zA-Z1-9\._-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| sort \
		| sed -e "s/^Makefile://" -e "s///" \
		| awk 'BEGIN { FS = ":.*?## " }; { printf "\033[36m%-30s\033[0m %s\n", $$1, $$2 }'

install: ## Setup dev environment
	npm install

up: ## Run full dev environment with Nix
	make install
	foreman start

nginx: ## Run nginx
	nginx -c $(PWD)/nginx/nginx.conf -e /dev/stderr -p $(PWD) -g 'pid $(PWD)/nginx/tmp/nginx.pid; daemon off;'

tailwind: ## Run tailwindcss
	npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch -m


publish: ## Publish files to bucket
	aws s3 cp --recursive $(PWD)/src/ s3://demo-html-edgee/
