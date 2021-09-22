using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using To_do.Data;
using To_do.Models;

namespace To_do.Service
{
    public class SqlTaskService
    {
        ToDoContext _context;
        public SqlTaskService(ToDoContext context, UserManager<Users> userManager)
        {
            _context = context;
        }

        public List<Tarefas> Get() => _context.Tarefas.ToList();
        public Tarefas Get(int? id) => _context.Tarefas.FirstOrDefault(e => e.Id == id);
        public bool Update(Tarefas t)
        {
            try
            {
                var exists = Get(t.Id);
                if (exists == null) return false;
                if(t.Tarefa != null)
                {
                    exists.Tarefa = t.Tarefa;
                }
                //if(t.Verificar != null)
                //{
                //    exists.Verificar = t.Verificar;
                //}

                _context.Tarefas.Update(exists);
                _context.SaveChanges();
                t = exists;
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(int id)
        {
            try
            {
                _context.Tarefas.Remove(Get(id));
                _context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Create(Tarefas t)
        {
            try
            {
                var exists = Get(t.Id);
                if (exists != null) return false;
                _context.Tarefas.Add(t);
                _context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool isAvailable(int? tafId, string? userId)
        {
            var userTarefas = _context.Tarefas.Where(e => e.Id == tafId && e.Users.FirstOrDefault(u => u.Id == userId) != null).Count() == 0;
            
            if(userTarefas)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
