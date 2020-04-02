﻿// <auto-generated />
using System;
using InternsFeedback.Database.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace InternsFeedback.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20200402065324_AddInternFeedbackMigration")]
    partial class AddInternFeedbackMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("InternsFeedback.Database.Entities.Feedback", b =>
                {
                    b.Property<int>("FeedbackId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Communication")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Discipline")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("InternId")
                        .HasColumnType("int");

                    b.Property<string>("OverallTechnicalCompitency")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProblemSolvingAnalyzingSkill")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProjectDelivery")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProjectProcessCompliance")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Teaming")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TechnicalExcellence")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int?>("internsInternId")
                        .HasColumnType("int");

                    b.HasKey("FeedbackId");

                    b.HasIndex("UserId");

                    b.HasIndex("internsInternId");

                    b.ToTable("Feedback");
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.Interns", b =>
                {
                    b.Property<int>("InternId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("InternName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ProjectId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int?>("projectsProjectId")
                        .HasColumnType("int");

                    b.HasKey("InternId");

                    b.HasIndex("UserId");

                    b.HasIndex("projectsProjectId");

                    b.ToTable("Interns");
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.Projects", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ProjectName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ProjectsProjectId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("ProjectId");

                    b.HasIndex("ProjectsProjectId");

                    b.HasIndex("UserId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RoleId");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Contact")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.Feedback", b =>
                {
                    b.HasOne("InternsFeedback.Database.Entities.User", "user")
                        .WithMany("feedbacks")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("InternsFeedback.Database.Entities.Interns", "interns")
                        .WithMany("feedbacks")
                        .HasForeignKey("internsInternId");
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.Interns", b =>
                {
                    b.HasOne("InternsFeedback.Database.Entities.User", "user")
                        .WithMany("interns")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("InternsFeedback.Database.Entities.Projects", "projects")
                        .WithMany()
                        .HasForeignKey("projectsProjectId");
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.Projects", b =>
                {
                    b.HasOne("InternsFeedback.Database.Entities.Projects", null)
                        .WithMany("projects")
                        .HasForeignKey("ProjectsProjectId");

                    b.HasOne("InternsFeedback.Database.Entities.User", "user")
                        .WithMany("projects")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("InternsFeedback.Database.Entities.User", b =>
                {
                    b.HasOne("InternsFeedback.Database.Entities.Role", "role")
                        .WithMany("user")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
