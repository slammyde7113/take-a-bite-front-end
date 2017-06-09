#!/bin/bash
curl --include --request POST http://localhost:4741/profiles/ \
--header "Content-Type: application/json" \
--data '{
  "profile":
    {
      "user_id":2,
      "menu_item_id":4
      }
}'
