import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AxiosAdapter } from './adapters/http/axios.adapter';
import { HTTP_ADAPTER } from './constants/injections.constants';
import { ValidatorEnv } from './config/validators-env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ValidatorEnv,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/graphql/types/types.gql'),
    }),
  ],
  controllers: [],
  providers: [
    AppResolver,
    AppService,
    {
      provide: HTTP_ADAPTER,
      useFactory: (configService: ConfigService) => {
        return new AxiosAdapter(configService);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
