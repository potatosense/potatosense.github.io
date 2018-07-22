#!/bin/bash

echo "Starting a local server"
cd "$(dirname "$0")"
python -m SimpleHTTPServer 8000
