using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InternsFeedback.Database.Entities
{
    public class Projects
    {
        [Key]
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }

        public User user { get; set; }

        public IList<Projects> projects { get; set; }

    }
}
