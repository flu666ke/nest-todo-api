import { TodoService } from './../services/todo.service';
import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';
import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
  NotFoundException
} from '@nestjs/common';
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CrudController, Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Todo
  }
})
@ApiTags('todo')
@Controller('rest/todo')
export class TodoController implements CrudController<Todo> {
  constructor(public service: TodoService) {}

  // @Get()
  // @ApiResponse({
  //   status: 200,
  //   description: 'get all todo',
  //   type: [Todo]
  // })
  // getAllAction(): Promise<Todo[]> {
  //   return this.todoService.findAll();
  // }

  // @Get(':id')
  // @ApiResponse({
  //   status: 200,
  //   description: 'get todo by id',
  //   type: Todo
  // })
  // @ApiResponse({
  //   status: 404,
  //   description: 'not found'
  // })
  // async getOneAction(@Param('id') id: string): Promise<Todo> {
  //   const todo = await this.todoService.findOne(id);
  //   if (todo === undefined) {
  //     throw new NotFoundException('Todo with id=' + id + ' not exists');
  //   }
  //   return todo;
  // }

  // @Post()
  // @ApiResponse({
  //   status: 200,
  //   description: 'create todo by id',
  //   type: Todo
  // })
  // @ApiBody({ type: CreateDto })
  // createAction(@Body() createDto: CreateDto): Promise<Todo> {
  //   const todo = new Todo();
  //   todo.title = createDto.title;
  //   if (createDto.isCompleted !== undefined) {
  //     todo.isCompleted = createDto.isCompleted;
  //   }
  //   return this.todoService.create(todo);
  // }

  // @Put(':id')
  // @ApiResponse({
  //   status: 200,
  //   description: 'update todo by id',
  //   type: Todo
  // })
  // @ApiBody({ type: UpdateDto })
  // async updateAction(
  //   @Param('id') id: string,
  //   @Body() { title, isCompleted = false }: UpdateDto
  // ): Promise<Todo> {
  //   const todo = await this.todoService.findOne(id);
  //   if (todo === undefined) {
  //     throw new NotFoundException('Todo with id=' + id + ' not exists');
  //   }
  //   todo.title = title;
  //   todo.isCompleted = isCompleted;
  //   return this.todoService.update(todo);
  // }

  // @Delete(':id')
  // @ApiResponse({
  //   status: 200,
  //   description: 'delete todo by id'
  // })
  // @ApiResponse({
  //   status: 404,
  //   description: 'not found'
  // })
  // deleteAction(@Param('id') id: string): Promise<void> {
  //   return this.todoService.remove(id);
  // }
}
