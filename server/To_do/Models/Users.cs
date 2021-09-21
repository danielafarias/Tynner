using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace To_do.Models
{
    public class Users : IdentityUser
    {
        public string Name { get; set; }
        public int Surname { get; set; }
        public List<Tarefas> Tarefa  { get; set; }
    }
}
