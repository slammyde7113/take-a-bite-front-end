#!/bin/bash
curl --include --request DELETE http://localhost:4741/profiles/6 \
--header "Content-Type: application/json" \
--data '{
  "profile":
    {
      "user_id":6,
      "menu_item_id":11
      }
}'
