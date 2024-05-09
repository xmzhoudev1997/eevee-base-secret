import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Request, Response } from 'express';
import { throwError } from 'rxjs';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (!request.headers) {
      return throwError(exception);
    }
    response.status(500).json(exception);
  }
}