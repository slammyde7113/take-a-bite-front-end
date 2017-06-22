#!/bin/bash
curl --include --request DELETE localhost:4741/menu_items/5 \
--header "Content-Type: application/json" \
data
