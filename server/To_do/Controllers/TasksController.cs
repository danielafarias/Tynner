using Microsoft.AspNetCore.Mvc;
using To_do.Data;
using To_do.Models;
using To_do.Roles;
using To_do.Service;

namespace To_do.Controllers
{
    /// <summary>
    /// Classe que gerencia a Task
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        SqlTaskService _service;
        SqlUsersService _userService;
        ToDoContext _context;
        /// <summary>
        /// Contrutor que gerencia a injeção 
        /// </summary>
        /// <param name="service"></param>
        /// <param name="userService"></param>
        /// <param name="context"></param>
        public TasksController(SqlTaskService service, SqlUsersService userService, ToDoContext context)
        {
            _service = service;
            _userService = userService;
            _context = context;
        }
        /// <summary>
        /// Endpoint que é reponsável por criar a tarefa
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        [HttpPost]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult Create([FromBody] Tarefas t)
        {
            return _service.Create(t) ? Ok(_service.Get(t.Id)) : NotFound("Erro ao criar a tarefa.");
        }
        /// <summary>
        /// Endpoint que é reponsável por listar as tarefas
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult GetAll()
        {
            return Ok(_service.Get());
        }
        /// <summary>
        /// Endpoint que é reponsável por fazer a atualização da tarefa
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        [HttpPut]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult Update([FromBody] Tarefas t)
        {
            return _service.Update(t) ? Ok(_service.Get(t.Id)) : NotFound("Erro ao atualizar a tarefa!!");
        }
        /// <summary>
        /// Endpoint que é reponsável por deletar a tarefa informando o id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete]
        [Route("{id}")]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult Delete(int id)
        {
            return _service.Delete(id) ? Ok() : NotFound("Tarefa não existe!!");
        }

    }

}
