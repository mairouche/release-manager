import { Snapshot } from './snapshot.domain';

export interface Release extends Snapshot {
  releaseDate: Date;
  version: String;
}
