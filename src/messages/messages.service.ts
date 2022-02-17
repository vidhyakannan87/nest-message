import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  createMessage(data: string) {
    this.messageRepo.create(data);
    return 'Message created succesfully';
  }
}
