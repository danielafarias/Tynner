using System;
using System.Collections.Generic;

namespace To_do.Models
{
    public class Tarefas
    {
        public int Id { get; set; }
        public string Tarefa { get; set; }
        public bool? Verificar { get; set; }
        public DateTime Data_tarefa { get; set; }
        public List<Users> Users { get; set; }

    }
}
