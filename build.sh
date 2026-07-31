#!/bin/sh

mkdir -p out

name=${1%/}

cd $name

rm -f ../out/$name.ccmod
zip -r ../out/$name.ccmod .

cd ..

zip out/$name.ccmod LICENSE
