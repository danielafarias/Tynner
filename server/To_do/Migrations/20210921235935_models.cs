using Microsoft.EntityFrameworkCore.Migrations;

namespace To_do.Migrations
{
    public partial class models : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Verificar",
                table: "Tarefas");

            migrationBuilder.AddColumn<string>(
                name: "Prioridade",
                table: "Tarefas",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Prioridades",
                table: "Tarefas",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Prioridade",
                table: "Tarefas");

            migrationBuilder.DropColumn(
                name: "Prioridades",
                table: "Tarefas");

            migrationBuilder.AddColumn<bool>(
                name: "Verificar",
                table: "Tarefas",
                type: "bit",
                nullable: true);
        }
    }
}
