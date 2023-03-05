provider "aws" {
  region     = var.aws_region
}

module "event-store" {
  source = "./event-store"
  dynamodb_table_name = var.event_store_name
}