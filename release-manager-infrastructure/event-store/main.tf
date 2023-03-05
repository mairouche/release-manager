resource "aws_dynamodb_table" "event_store" {
  name = var.dynamodb_table_name
  billing_mode = "PROVISIONED"
  read_capacity= "5"
  write_capacity= "5"
  hash_key = "eventId"
  range_key = "eventDate"
  stream_enabled   = true
  stream_view_type = "NEW_IMAGE"

  attribute {
    name = "eventId"
    type = "S"
  }
  attribute {
    name = "eventDate"
    type = "S"
  }
}