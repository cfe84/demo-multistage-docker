#!/bin/bash

docker build . --target nodebuild -t nodebuild
id=$(docker create nodebuild)
docker cp $id:/app/results ./results
docker rm $id