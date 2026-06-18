#!/bin/sh

mkdir -p out

name=${1%/}

cd $name

zip -r ../out/$name.ccmod .

cd ..

zip out/$name.ccmod LICENSE
