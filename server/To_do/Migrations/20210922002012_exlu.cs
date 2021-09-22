using Microsoft.EntityFrameworkCore.Migrations;

namespace To_do.Migrations
{
    public partial class exlu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Prioridades",
                table: "Tarefas");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Prioridades",
                table: "Tarefas",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
