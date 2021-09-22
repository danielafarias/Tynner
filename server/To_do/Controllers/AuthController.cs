using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using To_do.Models;
using To_do.Service;

namespace To_do.Controllers
{
    /// <summary>
    /// Classe que gerencia a autorização do usuário
    /// </summary>
    [Route("api/[controller]"), ApiController]
    public class AuthController : ControllerBase
    {
        AuthService _authservice;
        SqlUsersService _sqlUserService;
        /// <summary>
        /// Construtor que gerencia a injeções
        /// </summary>
        /// <param name="authservice"></param>
        /// <param name="sqlUserService"></param>
        public AuthController(AuthService authservice, SqlUsersService sqlUserService)
        {
            _authservice = authservice;
            _sqlUserService = sqlUserService;
        }


        /// <summary>
        /// Endpoint que gerencia e é responsável por registrar usuário
        /// </summary>
        /// <param name="_user"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Register")]
        public IActionResult Register([FromBody] Users _user)
        {
            try
            {
                var result = _authservice.Create(_user).Result;
                if(result.Succeeded)
                {
                    _user.PasswordHash = default;
                    _user.SecurityStamp = default;
                    _user.ConcurrencyStamp = default;

                    return Ok(_user);
                }


                return BadRequest();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Endpoint que gerencia e é reponsável 
        /// por retornar o usuário que está logado
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("LoggerUser")]
        public IActionResult Logger()
        {
            var user = User.Identity.Name;
            var userBD = _sqlUserService.Get().ToList();
            var userID = userBD.FirstOrDefault(u => u.UserName == user);
            if(userID == null)
            {
                return NotFound("Nenhum usuário logado no momento");
            }
            return Ok(_sqlUserService.Get2(userID.Id));
        }

        /// <summary>
        /// Endpoint que gerencia e é responsável pelo token do usuário
        /// </summary>
        /// <param name="_user"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Token")]
        public IActionResult Token([FromBody] Users _user)
        {
            try
            {
                return Ok(_authservice.GenerateToken(_user));
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
