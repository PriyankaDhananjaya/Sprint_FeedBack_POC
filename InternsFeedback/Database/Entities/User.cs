using System;
using System.Collections.Generic;

namespace InternsFeedback.Database.Entities
{
    public partial class User
    {
        public User()
        {
            Feedback = new HashSet<Feedback>();
            Intern = new HashSet<Intern>();
            Project = new HashSet<Project>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Contact { get; set; }
        public int Role { get; set; }

        public virtual ICollection<Feedback> Feedback { get; set; }
        public virtual ICollection<Intern> Intern { get; set; }
        public virtual ICollection<Project> Project { get; set; }
    }
}
