using System;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using InternsFeedback.Database.Entities;

namespace InternsFeedback.Datatbase.Entities
{
    public partial class InternsFeedbackContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public InternsFeedbackContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public virtual DbSet<Feedback> Feedbacks { get; set; }
        public virtual DbSet<Intern> Interns { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=MRILWAN02\\SQLEXPRESS;Database=Test;Trusted_Connection=True;");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.HasKey(e => e.FeedbackId);

                entity.HasIndex(e => e.InternId);

                entity.HasIndex(e => e.UserId);

                entity.HasOne(d => d.Intern)
                    .WithMany(p => p.Feedback)
                    .HasForeignKey(d => d.InternId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Feedback)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Intern>(entity =>
            {
                entity.HasKey(e => e.InternId);

                entity.HasIndex(e => e.CreatedBy);

                entity.HasIndex(e => e.ProjectId);

                entity.Property(e => e.InternName).HasMaxLength(50);

                entity.HasOne(d => d.CreatedByNavigation)
                    .WithMany(p => p.Intern)
                    .HasForeignKey(d => d.CreatedBy)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Intern_User_UserId");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Intern)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Intern_ProjectId");
            });

            modelBuilder.Entity<Project>(entity =>
            {
                entity.HasKey(e => e.ProjectId);

                entity.HasIndex(e => e.UserId);

                entity.Property(e => e.ProjectName).HasMaxLength(50);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Project)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
