﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using TruckTracker.Models;

namespace TruckTracker.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("TruckTracker.Models.Carrier", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("CarrierName")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("HomeState")
                        .HasColumnType("text");

                    b.Property<int>("MCNumber")
                        .HasColumnType("integer");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<string>("PrimaryContact")
                        .HasColumnType("text");

                    b.Property<DateTime>("SetupDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<bool>("ValidInsurance")
                        .HasColumnType("boolean");

                    b.HasKey("Id");

                    b.ToTable("Carriers");
                });

            modelBuilder.Entity("TruckTracker.Models.Load", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int?>("CarrierId")
                        .HasColumnType("integer");

                    b.Property<double>("CarrierRate")
                        .HasColumnType("double precision");

                    b.Property<string>("Commodity")
                        .HasColumnType("text");

                    b.Property<double>("CustomerRate")
                        .HasColumnType("double precision");

                    b.Property<DateTime>("DropApp")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("DropCheckIn")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("DropCheckOut")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("DropCity")
                        .HasColumnType("text");

                    b.Property<DateTime>("DropEta")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("LoadStatus")
                        .HasColumnType("text");

                    b.Property<DateTime>("PickApp")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("PickCheckIn")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("PickCheckOut")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("PickCity")
                        .HasColumnType("text");

                    b.Property<DateTime>("PickEta")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.Property<int>("Weight")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CarrierId");

                    b.HasIndex("UserId");

                    b.ToTable("Loads");
                });

            modelBuilder.Entity("TruckTracker.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Company")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("FullName")
                        .HasColumnType("text");

                    b.Property<string>("HashedPassword")
                        .HasColumnType("text");

                    b.Property<string>("Position")
                        .HasColumnType("text");

                    b.Property<string>("Username")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TruckTracker.Models.Load", b =>
                {
                    b.HasOne("TruckTracker.Models.Carrier", "Carrier")
                        .WithMany("Loads")
                        .HasForeignKey("CarrierId");

                    b.HasOne("TruckTracker.Models.User", "User")
                        .WithMany("Loads")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
