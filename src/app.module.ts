import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

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
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql/types/types.ts'),
        outputAs: 'interface',
      },
    }),
  ],
  controllers: [],
  providers: [
    AppResolver,
    AppService,
    {
      provide: HTTP_ADAPTER,
      useClass: AxiosAdapter,
    },
  ],
})
export class AppModule {}
