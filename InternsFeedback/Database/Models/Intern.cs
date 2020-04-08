using System;
using System.Collections.Generic;

namespace InternsFeedback.Models
{
    public partial class Intern
    {
        public Intern()
        {
            Feedback = new HashSet<Feedback>();
        }

        public int InternId { get; set; }
        public string InternName { get; set; }
        public int CreatedBy { get; set; }
        public int ProjectId { get; set; }

        public virtual User CreatedByNavigation { get; set; }
        public virtual Project Project { get; set; }
        public virtual ICollection<Feedback> Feedback { get; set; }
    }
}
