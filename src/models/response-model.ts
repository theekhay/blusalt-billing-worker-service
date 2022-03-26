import { BlusaltResponseStatus } from '../enums/blusalt.response.enum';

export class ResponseModel<T> {
  status: BlusaltResponseStatus;
  message: string;
  data: T;

  constructor(statusCode: BlusaltResponseStatus, message: string, data: T) {
    this.status = statusCode;
    this.message = message;
    this.data = data;
  }
}
