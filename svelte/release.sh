npm run build
git commit -am "built" && git push 
cd .. && git subtree push --prefix svelte/public origin gh-pages && cd svelte