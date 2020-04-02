using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InternsFeedback.Database.Entities
{
    public class Interns
    {
        [Key]
        public int InternId { get; set; }

        public string InternName { get; set; }
        
        [ForeignKey("User")]
        public int UserId { get; set; }
        
        [ForeignKey("Projects")]
        public int ProjectId { get; set; }

        public User user { get; set; }
        public Projects projects { get; set; }

        public IList<Feedback> feedbacks { get; set; }
    }
}
