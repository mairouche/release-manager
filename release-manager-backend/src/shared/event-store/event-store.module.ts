import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventStoreProvider } from './provider/event-store.provider';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [EventStoreProvider],
})
export class EventStoreModule {}
