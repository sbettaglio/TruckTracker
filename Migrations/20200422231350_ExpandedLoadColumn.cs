using Microsoft.EntityFrameworkCore.Migrations;

namespace TruckTracker.Migrations
{
    public partial class ExpandedLoadColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Distance",
                table: "Loads",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Distance",
                table: "Loads",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
