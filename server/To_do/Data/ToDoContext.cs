using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using To_do.Models;

namespace To_do.Data
{
    public class ToDoContext : IdentityDbContext
    {
        public ToDoContext(DbContextOptions options) : base(options)
        { }
        
        public DbSet<Users> Usuarios { get; set; }
        public DbSet<Tarefas> Tarefas { get; set; }
    }
}
