import { Injectable } from '@nestjs/common';
import { Snapshot } from '../domain/snapshot.domain';
import { v4 as uuidv4 } from 'uuid';
import { EventStoreProvider } from 'src/shared/event-store/model/provider/event-store.provider';

@Injectable()
export class VersionService {
  constructor(
    private readonly eventStoreProvider: EventStoreProvider<Snapshot>,
  ) {}

  async create(snapshot: Snapshot): Promise<Snapshot> {
    snapshot.id = uuidv4();
    snapshot.creationDate = new Date().toISOString();
    await this.eventStoreProvider.emitEvent(snapshot);
    return snapshot;
  }
}
