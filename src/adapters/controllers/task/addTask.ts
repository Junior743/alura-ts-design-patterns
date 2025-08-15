import { AddTask } from "../../../usecases/addTask";
import { Controller } from "../../interfaces/controller";
import { Validation } from "../../interfaces/validation";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { InvalidParamError } from "../../presentations/api/errors/invalid-param-error";
import { MissingParamError } from "../../presentations/api/errors/missing-param-error";
import {
  badRequest,
  created,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";

export class AddTaskController implements Controller {
  constructor(
    private readonly addTask: AddTask,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body);
      if (error) return badRequest(error);

      const { title, description, date } = httpRequest.body;

      const task = await this.addTask.add({ title, description, date });
      return created(task);
    } catch (error: Error | any) {
      return serverError(error);
    }
  }
}
