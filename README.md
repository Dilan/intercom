# Description

# Task 1:

Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers.
For example:

    [[1,2,[3]],4] -> [1,2,3,4]

# Task 2:

Write a program that will read the full list of customers and output the names and user ids of
matching customers (within 100km), sorted by user id (ascending).


# Install

    $ nmp install

# launch task 1 as CLI

    $ node shell/flatten.js "[1,2,[3,[4]]]"

# launch task 2 as CLI (JSON input)

    $ node shell/customers.js "tests/data/customers.json"

# launch task 2 as CLI (invalid JSON input)

    $ node shell/txt-to-customers.js "tests/data/customers.txt"

# test all

    $ nmp test
