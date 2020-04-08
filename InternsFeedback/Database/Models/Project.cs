using System;
using System.Collections.Generic;

namespace InternsFeedback.Models
{
    public partial class Project
    {
        public Project()
        {
            Intern = new HashSet<Intern>();
        }

        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Intern> Intern { get; set; }
    }
}
