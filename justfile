# mdbook build
b:
    rm -rf docs/
    mdbook build
    cp -rf book/. docs/.
    git add .
