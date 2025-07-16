#!/bin/sh
setsid -f foot -e python -m http.server 8000 &
xdg-open http://localhost:8000/index.html
xdg-open https://www.leonardgomez.com
