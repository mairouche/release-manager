output "aws_dynamodb_table_stream_arn" {
  value   = aws_dynamodb_table.event_store.stream_arn
}