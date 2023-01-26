install: 
	npm ci

lint: 
	npx eslint 

publish: 
	npm publish --dry-run

brain-games: 
	node bin/brain-games.js
	
brain-even:
	brain-even

brain-calc:
	brain-calc

brain-gcd:
	brain-gcd

brain-progression:
	brain-progression

brain-prime:
	brain-prime