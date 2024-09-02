install:
	npm ci --legacy-peer-deps
gendiff:
	node gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8