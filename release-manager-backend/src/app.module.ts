import { Module } from '@nestjs/common';
import { VersionModule } from './version/version.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    VersionModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
