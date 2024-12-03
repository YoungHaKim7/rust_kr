# mdbook build
b:
    rm -rf docs/
    mdbook build
    mkdir docs/
    cp -rf book/. docs/.
    git add .

# watch 로컬 작업할때 localhost:3000
w: 
    mdbook serve --open 
