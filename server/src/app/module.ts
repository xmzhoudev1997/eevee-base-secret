import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import { DBMysqlModule } from 'src/database-mysql/module';
import * as path from 'path';
import { BaseToolModule } from 'src/base-tool/module';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'zh-CN',
      loaderOptions: {
        path: path.join('./' || __dirname, '/locales/'),
      },
      resolvers: [
        new QueryResolver(['locale']),
        new HeaderResolver(['locale']),
      ],
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    DBMysqlModule,
    BaseToolModule,
  ],
})
export class AppModule {}
