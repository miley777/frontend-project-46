install:
	npm ci
gendiff:
	node gendiff.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
make test:
	NODE_OPTIONS=--experimental-vm-modules npx jest