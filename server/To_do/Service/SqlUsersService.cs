using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using To_do.Data;
using To_do.Models;

namespace To_do.Service
{
    public class SqlUsersService
    {
        ToDoContext _context;
        public SqlUsersService(ToDoContext context)
        {
            _context = context;
        }
        
        // Lista de usuarios
        public List<Users> Get() => _context.Usuarios.ToList();
        // Busca por usuário pelo id
        public Users Get2(string? id) => _context.Usuarios.FirstOrDefault(u => u.Id == id);
        public Users Get(string? id) => _context.Usuarios.Include(u => u.Id).FirstOrDefault(u => u.Id == id);

        public bool Update(Users users)
        {
            try
            {
                var exists = Get(users.Id);
                if (exists == null) return false;
                if (users.Name != null)
                {
                    exists.Name = users.Name;
                }
                if (users.Surname != null)
                {
                    exists.Surname = users.Surname;
                }
                _context.Usuarios.Update(exists);
                _context.SaveChanges();
                users = exists;
                return true;
            }
            catch
            {
                return false;
            }
        }


        public bool Delete(string? id)
        {
            try
            {
                _context.Usuarios.Remove(Get(id));
                _context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    

        public bool Create(Users users)
        {
            try
            {
                var exists = Get(users.Id);
                if (exists != null) return false;
                _context.Usuarios.Add(users);
                _context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }
    }
}
