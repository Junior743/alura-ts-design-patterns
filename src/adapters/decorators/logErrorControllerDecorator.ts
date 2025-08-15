import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";
import { LogErrorRepository } from "../../usecases/repository/logErrorRepository";

export class LogErrorControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);

    if (![200, 201, 204].includes(httpResponse.statusCode))
      await this.logErrorRepository.log(httpResponse.body.stack);

    return httpResponse;
  }
}
