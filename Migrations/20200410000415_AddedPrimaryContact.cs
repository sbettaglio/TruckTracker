using Microsoft.EntityFrameworkCore.Migrations;

namespace TruckTracker.Migrations
{
    public partial class AddedPrimaryContact : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PrimaryContact",
                table: "Carriers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrimaryContact",
                table: "Carriers");
        }
    }
}
