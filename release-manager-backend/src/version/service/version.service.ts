import { Injectable } from '@nestjs/common';
import { Snapshot } from '../domain/snapshot.domain';
import { v4 as uuidv4 } from 'uuid';
import { EventStoreProvider } from 'src/shared/event-store/provider/event-store.provider';
import { Release } from '../domain/release.domain';
import { Version } from '../domain/version.domain';
import { Operations } from '../enums/operations.enum';

@Injectable()
export class VersionService {
  constructor(
    private readonly eventStoreProvider: EventStoreProvider<Version>,
  ) {}

  async create(snapshot: Snapshot): Promise<Snapshot> {
    snapshot.id = uuidv4();
    snapshot.creationDate = new Date().toISOString();
    await this.eventStoreProvider.persistEvent(snapshot, Operations.SNAPSHOT);
    return snapshot;
  }

  async promote(release: Release): Promise<Release> {
    release.releaseDate = new Date().toISOString();
    await this.eventStoreProvider.persistEvent(release, Operations.PROMOTE);
    return release;
  }
}
