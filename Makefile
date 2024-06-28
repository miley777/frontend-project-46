install:
	npm ci
gendiff:
	node gendiff.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
