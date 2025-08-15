import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { DateValidatorAdapter } from "../dateValidatorAdapter";
import { AddTaskController } from "../controllers/task/addTask";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/LogErrorMongoRepository";

export const taskControllerFactory = () => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRepository);
  const taskController = new AddTaskController(dbAddTask, dateValidatorAdapter);
  const logErrorMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(
    taskController,
    logErrorMongoRepository
  );
};
