import { Module } from '@nestjs/common';
import { VersionController } from './controller/version.controller';
import { VersionService } from './service/version.service';
import { EventStoreProvider } from 'src/shared/event-store/provider/event-store.provider';

@Module({
  controllers: [VersionController],
  providers: [VersionService, EventStoreProvider],
})
export class VersionModule {}
