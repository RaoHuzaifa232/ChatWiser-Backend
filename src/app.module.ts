import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGO_URI', { infer: true });
        if (!uri) {
          throw new Error('MONGO_URI is not defined');
        }
        try {
          const mongoose = await import('mongoose');
          await mongoose.connect(uri);
          console.log(
            `🟢MongoDB connected successfully Application is running on: http://localhost:${
              process.env.PORT ?? 3000
            }`,
          );
        } catch (err) {
          console.error('🔴 MongoDB connection error:', err);
        }
        return { uri };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService],
})
export class AppModule {}
