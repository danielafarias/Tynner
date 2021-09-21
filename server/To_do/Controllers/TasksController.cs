using Microsoft.AspNetCore.Mvc;
using To_do.Data;
using To_do.Models;
using To_do.Roles;
using To_do.Service;

namespace To_do.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        SqlTaskService _service;
        SqlUsersService _userService;
        ToDoContext _context;
        public TasksController(SqlTaskService service, SqlUsersService userService, ToDoContext context)
        {
            _service = service;
            _userService = userService;
            _context = context;
        }

        [HttpPost]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult Create([FromBody] Tarefas t)
        {
            return _service.Create(t) ? Ok(_service.Get(t.Id)) : NotFound("Erro ao criar a tarefa.");
        }

        [HttpGet]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult GetAll()
        {
            return Ok(_service.Get());
        }

        [HttpPut]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult Update([FromBody] Tarefas t)
        {
            return _service.Update(t) ? Ok(_service.Get(t.Id)) : NotFound("Erro ao atualizar a tarefa!!");
        }

        [HttpDelete]
        [Route("{id}")]
        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
        public IActionResult Delete(int id)
        {
            return _service.Delete(id) ? Ok() : NotFound("Tarefa não existe!!");
        }

    }

}
