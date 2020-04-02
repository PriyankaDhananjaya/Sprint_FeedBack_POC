using Microsoft.EntityFrameworkCore;

namespace InternsFeedback.Database.Entities
{
    public class DatabaseContext: DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
           : base(options)
        {
        }
        public DbSet<User> User { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<Interns> Interns { get; set; }
        public DbSet<Projects> Projects { get; set; }
        public DbSet<Feedback> Feedback { get; set; }

         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=.;Initial Catalog=InternsFeedback;User ID=sa;Password=pass@word1");

        }

    }
}
