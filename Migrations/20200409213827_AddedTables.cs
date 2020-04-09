using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace TruckTracker.Migrations
{
    public partial class AddedTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Carriers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CarrierName = table.Column<int>(nullable: false),
                    MCNumber = table.Column<int>(nullable: false),
                    PhoneNumber = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    HomeState = table.Column<string>(nullable: true),
                    ValidInsurance = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carriers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FullName = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    Position = table.Column<string>(nullable: true),
                    HashedPassword = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Loads",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PickCity = table.Column<string>(nullable: true),
                    PickApp = table.Column<DateTime>(nullable: false),
                    DropCity = table.Column<string>(nullable: true),
                    DropApp = table.Column<DateTime>(nullable: false),
                    Weight = table.Column<int>(nullable: false),
                    Commodity = table.Column<string>(nullable: true),
                    CustomerRate = table.Column<double>(nullable: false),
                    LoadStatus = table.Column<string>(nullable: true),
                    CarrierRate = table.Column<double>(nullable: false),
                    PickCheckIn = table.Column<DateTime>(nullable: false),
                    PickCheckOut = table.Column<DateTime>(nullable: false),
                    DropCheckIn = table.Column<DateTime>(nullable: false),
                    DropCheckOut = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    CarrierId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loads", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Loads_Carriers_CarrierId",
                        column: x => x.CarrierId,
                        principalTable: "Carriers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Loads_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Loads_CarrierId",
                table: "Loads",
                column: "CarrierId");

            migrationBuilder.CreateIndex(
                name: "IX_Loads_UserId",
                table: "Loads",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Loads");

            migrationBuilder.DropTable(
                name: "Carriers");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
