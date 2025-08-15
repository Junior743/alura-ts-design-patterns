import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { AddTaskController } from "../controllers/task/addTask";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { addTaskValidationCompositeFactory } from "./addTaskValidationCompositeFactory";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/LogErrorMongoRepository";

export const taskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRepository);
  const logErrorMongoRepository = new LogErrorMongoRepository();
  const taskController = new AddTaskController(
    dbAddTask,
    addTaskValidationCompositeFactory()
  );
  return new LogErrorControllerDecorator(
    taskController,
    logErrorMongoRepository
  );
};
