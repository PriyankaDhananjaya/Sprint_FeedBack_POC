using System;
using System.Collections.Generic;

namespace InternsFeedback.Models
{
    public partial class User
    {
        public User()
        {
            Feedback = new HashSet<Feedback>();
            Intern = new HashSet<Intern>();
            Project = new HashSet<Project>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        //public byte[] PasswordHash { get; set; }
        //public byte[] PasswordSalt { get; set; }
        public string Contact { get; set; }
        public int Role { get; set; }

        public virtual ICollection<Feedback> Feedback { get; set; }
        public virtual ICollection<Intern> Intern { get; set; }
        public virtual ICollection<Project> Project { get; set; }
    }
}
