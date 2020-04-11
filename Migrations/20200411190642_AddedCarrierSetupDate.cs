using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TruckTracker.Migrations
{
    public partial class AddedCarrierSetupDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "SetupDate",
                table: "Carriers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SetupDate",
                table: "Carriers");
        }
    }
}
