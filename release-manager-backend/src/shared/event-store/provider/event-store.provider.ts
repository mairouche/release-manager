import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { marshall } from '@aws-sdk/util-dynamodb';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { EventModel } from '../model/event.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EventStoreProvider<T> {
  private ddb: DynamoDB;
  private eventStoreTable: string;
  private awsRegion: string;

  constructor(private configService: ConfigService) {
    this.awsRegion = this.configService.get('AWS_REGION');
    this.eventStoreTable = this.configService.get('EVENT_STORE_TABLE');
    this.ddb = new DynamoDB({ region: this.awsRegion });
  }

  async persistEvent(data: T, operation: string): Promise<void> {
    let event: EventModel = {
      eventId: uuidv4(),
      eventDate: new Date().toISOString(),
      eventOperation: operation,
      payload: JSON.stringify(data),
    };
    this.ddb.putItem({
      TableName: this.eventStoreTable,
      Item: marshall(event),
    });
  }
}
