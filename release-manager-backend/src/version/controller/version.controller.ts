import { Controller, Post, Body, Param } from '@nestjs/common';
import { Snapshot } from '../domain/snapshot.domain';
import { VersionService } from '../service/version.service';
import { Release } from '../domain/release.domain';
import { VersionDTO } from '../dto/version.dto';
import { ReleaseDTO } from '../dto/release.dto';

@Controller('/versions')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @Post('/')
  async create(@Body() version: VersionDTO): Promise<Snapshot> {
    return await this.versionService.create({ ...version } as Snapshot);
  }

  @Post('/:id/promote')
  async promote(@Body() releaseDTO: ReleaseDTO): Promise<Release> {
    return await this.versionService.promote({ ...releaseDTO } as Release);
  }
}
