using System;
using System.Collections.Generic;
using To_do.Enuns;

namespace To_do.Models
{
    public class Tarefas
    {
        public int Id { get; set; }
        public string Tarefa { get; set; }
        public string Prioridade { get; set; }
        //public Prioridade Prioridades { get; set; }
        //public bool? Verificar { get; set; }
        public DateTime Data_tarefa { get; set; }
        public List<Users> Users { get; set; }

    }
}
