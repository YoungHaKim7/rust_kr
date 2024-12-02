# mdbook build
b:
    rm -rf docs/
    mdbook build
    mkdir docs/
    cp -rf book/. docs/.
    git add .
