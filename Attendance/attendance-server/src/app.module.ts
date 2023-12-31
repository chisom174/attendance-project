import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkAttendanceModule } from './work-attendance/work-attendance.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'attendance-records',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    WorkAttendanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
