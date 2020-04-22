using Microsoft.EntityFrameworkCore.Migrations;

namespace TruckTracker.Migrations
{
    public partial class ExpandedLoadTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CurrentLocation",
                table: "Loads",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Distance",
                table: "Loads",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "TransitTime",
                table: "Loads",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrentLocation",
                table: "Loads");

            migrationBuilder.DropColumn(
                name: "Distance",
                table: "Loads");

            migrationBuilder.DropColumn(
                name: "TransitTime",
                table: "Loads");
        }
    }
}
