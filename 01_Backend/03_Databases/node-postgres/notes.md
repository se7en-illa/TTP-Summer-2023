# `pg`

## Daemons

_A daemon is a computer program that runs as a background process, rather than being under the direct control of an interactive user._

List all processes

```bash
ps aux
```

List all processes, filter by string value

```bash
ps aux | grep [string]
# [string] should be replaced with what you want to search for
```

## Ports

_A port or port number is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service._

👉🏽 **The postgres server (process) runs on port 5432 by default** 👈🏽

Check processes bound to a port number

```bash
lsof -i :[port]
# [port] should be replaced with a port number
``` 

## What is pg?

_`pg` is a non-blocking PostgreSQL client for Node.js._

## How to install

```bash
npm install pg
```

[Examples](https://github.com/orlandocaraballo/class-examples/tree/master/pg)
