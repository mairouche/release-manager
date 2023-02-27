import { Controller, Post, Body } from '@nestjs/common';
import { SnapshotDTO } from '../dto/snapshot.dto';
import { Snapshot } from '../domain/snapshot.domain';
import { VersionService } from '../service/version.service';

@Controller('/versions')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Post('/')
  async createSnapshot(@Body() snapshotDTO: SnapshotDTO): Promise<Snapshot> {
    return this.versionService.create({ ...snapshotDTO } as Snapshot);
  }
}
