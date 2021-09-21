//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using To_do.Roles;
//using To_do.Service;

//namespace To_do.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class UsersController : ControllerBase
//    {
//        SqlUsersService _service;
//        public UsersController(SqlUsersService service)
//        {
//            _service = service;
//        }

//        /// <summary>
//        /// Endpoint que gerencia e é reponsável por listar usuarios
//        /// </summary>
//        /// <returns></returns>
//        [HttpGet]
//        [AuthRole(RoleTypes.Usuario, RoleTypes.Desenvolvedor)]
//        public IActionResult GetAll() => Ok(_service.Get());
//    }
//}
