const router = require('express').Router();

const {
  listTasks,
  storeTask,
  updateTask,
  deleteTask
} = require('../controllers/tasksController')

/** 
* @swagger
* /tasks/list:
*  get:
*    summary: Retorna todas as tarefas
*    responses:
*      200:
*        description: Uma lista de tarefas
*        content:
*          application/json:
*            schema:
*              type: array
*              items:
*              type: object
*/
router.get('/tasks/list', listTasks);

/** 
* @swagger
* /tasks/register:
*  post:
*    summary: Cadastra uma nova tarefa
*    responses:
*      201:
*       description: Sucesso!
*        content:
*          application/json:
*            schema:
*              type: array
*              items:
*              type: object
*/
router.post('/task/register', storeTask);

/**
* @swagger
* /task/:id:
*  put:
*    sumarry: Atualiza uma tarefa pelo id
*    responses:
*      200:
*        description: Uma lista de tarefas
*        content:
*          application/json:
*            schema:
*              type: array
*              items:
*              type: object
*/
router.put('/task/:id', updateTask);

/** 
* @swagger
* /tasks/delete:
*  delete:
*    summary: Remove uma tarefa pelo id
*    responses:
*      200:
*        description: Uma lista de tarefas
*        content:
*          application/json:
*            schema:
*              type: array
*             items:
*              type: object
*/
router.delete('/task/:id', deleteTask);

module.exports = router;