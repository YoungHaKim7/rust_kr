# mdbook build
b METHOD:
    rm -rf docs/
    mdbook build
    mkdir docs/
    cp -rf book/. docs/.
    git add .
    git commit -m \"{{METHOD}}\"
    git push

# watch 로컬 작업할때 localhost:3000
w: 
    mdbook serve --open 
