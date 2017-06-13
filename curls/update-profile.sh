#!/bin/bash
curl --include --request PATCH localhost:4741/profiles/1 \
--header "Content-Type: application/json" \
--header "Authorization: Token token=BAhJIiUyMjcwZTZjMWQwYzgxMGZjZjE4NjY3YjczMWU0ZWY1MwY6BkVG--0a5438da79da736af5901b456389c3ed766712c6"\
--data '{
    "price": "19.99"
}'
