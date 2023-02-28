import { Snapshot } from './snapshot.domain';

export interface Release extends Snapshot {
  releaseDate: string;
  version: string;
}
