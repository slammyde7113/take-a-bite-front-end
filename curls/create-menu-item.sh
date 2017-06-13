#!/bin/bash
curl --include --request POST localhost:4741/menu_items \
--header "Content-Type: application/json" \
--data '{
  "menu_item": {
    "price": "19.99",
    "name": "Big Pizza",
    "description": "Saucy goodness",
    "location": "200 Blue St, Cat City"
  }
}'
